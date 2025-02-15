import { MongoClient } from "mongodb";

export async function GET() {
  const client = new MongoClient(process.env.ATLAS_URI ?? "");

  try {
    await client.connect();

    const database = client.db(`${process.env.MONGO_DB}`);

    const collection = database.collection(`sodlbeasts`);
    const data = await collection.find({}).toArray();

    return Response.json({ data });
  } catch (error) {
    Response.json({ message: `Error: ${error}` });
  } finally {
    await client.close();
  }
}
