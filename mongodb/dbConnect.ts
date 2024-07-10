import mongoose from 'mongoose';

const uri = 'mongodb://localhost:27017';
const dbName = 'local_test_db';

export async function connectToDatabase(databaseName: string) {
  const connectionString = `${uri}/${dbName}`;
  if (mongoose.connection.readyState !== 1) {
    await mongoose.connect(connectionString);
  }
  console.log(`Connected to database: ${databaseName}`);
}

export async function disconnectFromDatabase() {
  await mongoose.disconnect();
}

export async function clearDatabase() {
  const collections = mongoose.connection.collections;
  for (const key in collections) {
    await collections[key].deleteMany({});
  }
  console.log('All collections have been cleared.');
}
