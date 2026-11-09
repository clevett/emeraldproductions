import { MongoClient } from "mongodb";

export async function GET() {
  let client: MongoClient | undefined;

  try {
    client = new MongoClient(process.env.ATLAS_URI ?? "");
    await client.connect();

    const database = client.db(`${process.env.MONGO_DB}`);

    const collection = database.collection(`sodlbeasts`);
    const data = await collection.find({}).toArray();

    return Response.json({ data });
  } catch (error) {
    console.error("NPC lookup failed:", error);
    return Response.json({ message: "NPC lookup failed" }, { status: 500 });
  } finally {
    await client?.close();
  }
}
