import { MongoClient } from 'mongodb';

const uri = 'mongodb://localhost:27017';
const dbName = 'local_test_db';

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

    const formArr = [] as Array<any>;
    for (let i = 0; i < 10; i++) {
      formArr.push({
        _id: `test${i}`,
        title: `Title${i}`,
        description: `Description${i}`,
        questions: [
            {
              _id: `question_id${i}`,
              type: `Type${i}`,
              questionText: `questionText${i}`,
              options: `Options${i}`,
              required: true
            },
            {
              _id: `question_id${i+1}`,
              type: `Type${i+1}`,
              questionText: `questionText${i+1}`,
              options: `Options${i+1}`,
              required: true
            }
        ],
        createdAt: new Date()
      })
    } 

    await db.collection('forms').insertMany(formArr);

    console.log('Database initialized successfully');
  } finally {
    await client.close();
  }
}

initializeDatabase().catch(console.error);
