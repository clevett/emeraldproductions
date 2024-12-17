//@ts-expect-error - mongo not typed
import { MongoClient } from "mongodb";

export async function GET() {
  const client = new MongoClient(process.env.ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();

    const database = client.db(`${process.env.MONGO_DB}`);

    const collection = database.collection(
      `${process.env.SOTDL_NPC_COLLECTION}`
    );
    const data = await collection.find({}).toArray();

    return Response.json({ data });
  } catch (error) {
    Response.json({ message: `Error: ${error}` });
  } finally {
    await client.close();
  }
}
