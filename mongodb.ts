import { MongoClient } from "mongodb";

const uri = process.env.ATLAS_URI;

let client;
let clientPromise;

if (!uri) {
  throw new Error("Add Mongo URI to .env.local");
}

if (process.env.NODE_ENV === "development") {
  //@ts-expect-error mongo not typed
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    //@ts-expect-error mongo not typed
    global._mongoClientPromise = client.connect();
  }
  //@ts-expect-error mongo not typed
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export default clientPromise;
