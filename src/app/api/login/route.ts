import { MongoClient } from "mongodb";
import { NextRequest } from "next/server";
export async function GET(request: NextRequest) {
  const email = request.nextUrl.searchParams.get("email");
  let client: MongoClient | undefined;

  try {
    client = new MongoClient(process.env.ATLAS_URI ?? "");
    await client.connect();

    const database = client.db(`${process.env.MONGO_DB}`);
    const collection = database.collection("users");
    const [data] = await collection.find({ email }).toArray();

    return Response.json({ data });
  } catch (error) {
    console.error("User lookup failed:", error);
    return Response.json({ message: "User lookup failed" }, { status: 500 });
  } finally {
    await client?.close();
  }
}
