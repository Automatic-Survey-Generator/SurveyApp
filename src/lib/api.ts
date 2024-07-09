import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

let client: MongoClient | null = null;

async function connectToDatabase(): Promise<MongoClient> {
  if (client) {
    return client;
  }

  client = new MongoClient(uri as string, {
    serverApi: ServerApiVersion.v1,
  });

  const dbOptions = {
      server: {
          socketOptions: {
              keepAlive: 100,
              connectTimeoutMS: 30000
          }
      }
  };


  // await client.connect(dbOptions);
  console.log("Connected successfully to MongoDB");
  return client;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const client = await connectToDatabase();
    const db = client.db(); // This will use the database specified in the connection string or the default one

    switch (req.method) {
      case 'GET':
        console.log("Fetching forms...");
        try {
          const formsCollection = db.collection('forms');
          const forms = await formsCollection.find({}).toArray();
          console.log("Forms:", forms);
          res.status(200).json(forms);
        } catch (error) {
          console.error("Error fetching forms:", error);
          res.status(500).json({ error: 'Error fetching forms' });
        }
        break;

      case 'POST':
        try {
          const formsCollection = db.collection('forms');
          const newForm = req.body;
          const result = await formsCollection.insertOne(newForm);
          res.status(201).json(result);
        } catch (error) {
          console.error("Error creating form:", error);
          res.status(500).json({ error: 'Error creating form' });
        }
        break;

      default:
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error("Database connection error:", error);
    res.status(500).json({ error: 'Unable to connect to the database' });
  }
}
