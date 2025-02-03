import { MongoClient } from "mongodb";
import { NextRequest } from "next/server";

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

export async function POST(request: NextRequest) {
  const client = new MongoClient(process.env.ATLAS_URI_NPCS ?? "");
  const requestBody = await request.json();
  const { monster, action } = requestBody;

  console.log("POST", monster);
  console.log("POST", action);

  try {
    // await client.connect();

    // const database = client.db(`${process.env.MONGO_DB}`);
    // const collection = database.collection(`sodlbeasts`);
    // const data = await collection.insertOne(monster);

    // return Response.json({ data });

    return undefined;
  } catch (error) {
    Response.json({ message: `Error: ${error}` });
  } finally {
    await client.close();
  }
}
