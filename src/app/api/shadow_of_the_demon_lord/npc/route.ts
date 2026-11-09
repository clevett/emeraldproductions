import { MongoClient } from "mongodb";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const requestBody = await request.json();
  const { monster } = requestBody;
  let client: MongoClient | undefined;

  try {
    client = new MongoClient(process.env.ATLAS_URI_NPCS ?? "");
    await client.connect();

    const database = client.db(`${process.env.MONGO_DB}`);
    const collection = database.collection(`sodlbeasts`);
    const data = await collection.insertOne(monster);

    return Response.json({ data });
  } catch (error) {
    console.error("NPC creation failed:", error);
    return Response.json({ message: "NPC creation failed" }, { status: 500 });
  } finally {
    await client?.close();
  }
}
