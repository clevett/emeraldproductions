import { MongoClient } from "mongodb";

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
