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

export async function POST(request: Request) {
  const client = new MongoClient(process.env.ATLAS_URI ?? "");

  const { user } = await request.json();

  console.log("POST", user);

  try {
    await client.connect();

    const database = client.db(`${process.env.MONGO_DB}`);
    const collection = database.collection("users");
    const data = await collection.find({ id: user.id }).toArray();

    console.log("POST DATA", data);

    if (data.length < 1) {
      await collection.insertOne({ ...user, isAdmin: false });
      return Response.json({ data: { ...user, isAdmin: false } });
    }

    return Response.json({ data });
  } catch (error) {
    Response.json({ message: `Error: ${error}` });
  } finally {
    await client.close();
  }
}
