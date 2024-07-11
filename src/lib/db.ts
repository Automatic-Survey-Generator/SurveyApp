
import mongoose from 'mongoose';

// TODO: don't use globals in general
// using global to preserve value during HMR
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

type ConnectionURI = string | undefined;

export async function dbConnect(dbName?: string) {
  let uri: ConnectionURI = process.env.NEXT_PUBLIC_MONGODB_URI;

  console.log('Starting db connection...')
  console.log("NODE_ENV: ", process.env.NODE_ENV)

  if (process.env.NODE_ENV === 'development') {
    // set URI for localhost development
    uri = process.env.NEXT_PUBLIC_MONGODB_URI_LOCAL;
  }

  if (dbName) {
    uri = `${uri}/${dbName}`;
  }

  console.log('URI set: ', uri)

  if (!uri) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
  }

  if (cached.conn) {
    console.log("Using cached DB connection!")
    // registerModels();
    return cached.conn;
  }

  if (!cached.promise) {
    const options = {
      // don't use buffering, wait for actual live connection to be ready
      // https://mongoosejs.com/docs/connections.html#buffering
      bufferCommands: false,
      // disable `autoCreate` since `bufferCommands` is false
      autoCreate: false,
    };

    cached.promise = mongoose.connect(uri, options).then(
      () => {
        console.log("Connected to db!")
        // registerModels();
        return mongoose;
      },
      err => { console.error('Connection to DB error: \n', err); }
    );

  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}
