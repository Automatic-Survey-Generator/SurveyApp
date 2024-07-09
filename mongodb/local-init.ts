import { MongoClient } from 'mongodb';

const uri = 'mongodb://localhost:27017';
const dbName = 'form_builder_db';

async function initializeDatabase() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db(dbName);

    // Create collections
    await db.createCollection('users');
    await db.createCollection('forms');
    await db.createCollection('submissions');

    // Insert sample data
    await db.collection('users').insertOne({
      username: 'admin',
      email: 'admin@example.com',
      role: 'admin'
    });

    await db.collection('forms').insertOne({
      title: 'Sample Form',
      fields: [
        { type: 'text', label: 'Name' },
        { type: 'email', label: 'Email' }
      ],
      createdAt: new Date()
    });

    console.log('Database initialized successfully');
  } finally {
    await client.close();
  }
}

initializeDatabase().catch(console.error);
