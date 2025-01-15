//@ts-expect-error - mongo not typed
import { MongoClient } from "mongodb";

import { NextAuthUser } from "@/types";

export async function GET(user: NextAuthUser) {
  const client = new MongoClient(process.env.ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();

    const database = client.db(`${process.env.MONGO_DB}`);

    const collection = database.collection(`${process.env.USER_COLLECTION}`);

    console.log("USER");
    console.log(user.id);

    const data = await collection.find({ id: user.id }).toArray();

    return Response.json({ data });
  } catch (error) {
    Response.json({ message: `Error: ${error}` });
  } finally {
    await client.close();
  }
}
