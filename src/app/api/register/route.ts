import { MongoClient } from "mongodb";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const client = new MongoClient(process.env.ATLAS_URI_USERS ?? "");
  const { user } = await request.json();

  try {
    await client.connect();

    const database = client.db(`${process.env.MONGO_DB}`);
    const collection = database.collection("users");
    const [data] = await collection.find({ email: user.email }).toArray();

    //Only create a new user if the user's email has been manually added to database
    //This temporary solution is to prevent unauthorized users from creating an account
    if (data && data.id === undefined) {
      const newUser = { ...user, isAdmin: false };
      await collection.updateOne(
        { email: user.email },
        {
          $set: {
            ...newUser,
          },
        }
      );
      return Response.json({ data: newUser });
    }

    return Response.json({ data });
  } catch (error) {
    Response.json({ message: `Error: ${error}` });
  } finally {
    await client.close();
  }
}
