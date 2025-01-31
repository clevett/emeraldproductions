import { MongoClient } from "mongodb";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const client = new MongoClient(process.env.ATLAS_URI_USERS ?? "");

  const { user } = await request.json();

  console.log("POST", user);

  try {
    await client.connect();

    const database = client.db(`${process.env.MONGO_DB}`);
    const collection = database.collection("users");
    const [data] = await collection.find({ email: user.email }).toArray();

    if (data === undefined) {
      const newUser = { ...user, isAdmin: false };
      console.log("POST new user", newUser);

      await collection.insertOne(newUser);

      console.log("POST insert breaking", newUser);

      return Response.json({ data: newUser });
    }

    return Response.json({ data });
  } catch (error) {
    Response.json({ message: `Error: ${error}` });
  } finally {
    await client.close();
  }
}
