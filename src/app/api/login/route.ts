import { MongoClient } from "mongodb";
import { NextRequest } from "next/server";
export async function GET(request: NextRequest) {
  const client = new MongoClient(process.env.ATLAS_URI ?? "");
  const email = request.nextUrl.searchParams.get("email");

  try {
    await client.connect();

    const database = client.db(`${process.env.MONGO_DB}`);
    const collection = database.collection("users");
    const [data] = await collection.find({ email }).toArray();

    return Response.json({ data });
  } catch (error) {
    Response.json({ message: `Error: ${error}` });
  } finally {
    await client.close();
  }
}
