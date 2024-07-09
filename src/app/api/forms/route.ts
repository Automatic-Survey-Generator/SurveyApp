// import type { NextApiRequest, NextApiResponse } from 'next';
// import type { Db } from 'mongodb';
// import { MongoClient } from 'mongodb';
// import { NextResponse } from 'next/server'

// // MongoDB connection URI
// const uri = process.env.MONGODB_URI;

// if (!uri) {
//   throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
// }

// let cachedDb: Db | null = null;
// const client = new MongoClient(uri);

// export async function GET(request: Request) {
//   // Your GET logic here
//   return NextResponse.json({ message: 'This is the forms GET endpoint' })
// }

// export async function POST(request: Request) {
//   // Your POST logic here
//   return NextResponse.json({ message: 'This is the forms POST endpoint' })
// }

// async function connectToDatabase(): Promise<Db> {
//   if (cachedDb) {
//     return cachedDb;
//   }

//   console.log("uri: ", uri)
//   const client = await MongoClient.connect(uri as string)
//   console.log("connected!")

//   // @ts-ignore
//   const db = client.db();
//   cachedDb = db;
//   return db;
// }

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   const db = await connectToDatabase();
//   const collection = db.collection('main');

//   switch (req.method) {
//     case 'GET':
//       console.log("fetching forms..")
//       try {

//         // @ts-ignore
//         const forms = db.main.find({}).toArray();

//         // const forms = await db.collection('forms').find({}).toArray();
//         // @ts-ignore
//         // const forms = db.getCollection('forms').find({}).toArray();

//         console.log("forms: ", forms)
//         res.status(200).json(forms);
//       } catch (error) {
//         res.status(500).json({ error: 'Error fetching forms' });
//       }
//       break;

//     case 'POST':
//       try {
//         const newForm = req.body;
//         const result = await db.collection("forms").insertOne(newForm);
//         res.status(201).json(result);
//       } catch (error) {
//         res.status(500).json({ error: 'Error creating form' });
//       }
//       break;

//     default:
//       res.setHeader('Allow', ['GET', 'POST']);
//       res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }

import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  // Your GET logic here
  return NextResponse.json({ message: 'This is the forms GET endpoint' })
}

export async function POST(request: Request) {
  // Your POST logic here
  return NextResponse.json({ message: 'This is the forms POST endpoint' })
}
