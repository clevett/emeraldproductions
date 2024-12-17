//@ts-expect-error mongo not typed
import { MongoClient } from "mongodb";

const uri = process.env.ATLAS_URI;
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

let client;
let clientPromise;

if (!process.env.ATLAS_URI) {
  throw new Error("Add Mongo URI to .env.local");
}

if (process.env.NODE_ENV === "development") {
  //@ts-expect-error mongo not typed
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    //@ts-expect-error mongo not typed
    global._mongoClientPromise = client.connect();
  }
  //@ts-expect-error mongo not typed
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
