import { MongoClient } from "mongodb";
import { NextRequest } from "next/dist/server/web/spec-extension/request";

export async function POST(request: NextRequest) {
  const client = new MongoClient(process.env.ATLAS_URI_NPCS ?? "");
  const requestBody = await request.json();
  const { monster } = requestBody;

  try {
    await client.connect();

    const database = client.db(`${process.env.MONGO_DB}`);
    const collection = database.collection(`sodlbeasts`);
    const data = await collection.insertOne(monster);

    return Response.json({ data });
  } catch (error) {
    Response.json({ message: `Error: ${error}` });
  } finally {
    await client.close();
  }
}
