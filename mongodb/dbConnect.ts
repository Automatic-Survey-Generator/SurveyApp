import mongoose from 'mongoose';

// don't use 'localhost'
const uri = 'mongodb://127.0.0.1:27017';

export async function connectToDatabase(databaseName: string) {
  const connectionString = `${uri}/${databaseName}`;
  if (mongoose.connection.readyState !== 1) {
    await mongoose.connect(connectionString, {
      serverSelectionTimeoutMS: 5000 // if no localhost, quit after 5 seconds
    });
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
