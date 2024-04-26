import { MongoClient } from "mongodb";

let client;

async function connectToDatabase() {
  if (!client) {
    client = new MongoClient(process.env.PORTFOLIO_PROJECTS_DB_CONNECTION_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
  }
  return client
    .db(process.env.PORTFOLIO_PROJECTS_DB_NAME)
    .collection(process.env.PORTFOLIO_PROJECTS_DB_COLLECTION_NAME);
}

export default async function handler(req, res) {
  let collection;
  try {
    collection = await connectToDatabase();
    if (req.method === "POST") {
      const {
        itemID,
        projectName,
        clientName,
        img,
        creationDate,
        demoLink,
        description,
        review,
      } = req.body;
      await collection.insertOne({
        itemID,
        projectName,
        clientName,
        img,
        creationDate,
        demoLink,
        description,
        review,
      });
      return res
        .status(200)
        .json({ message: "Portfolio Project submitted successfully!" });
    } else if (req.method === "GET") {
      const projects = await collection.find().toArray();
      return res.status(200).json(projects);
    } else if (req.method === "DELETE") {
      const { itemID } = req.query;
      if (!itemID) {
        return res.status(400).json({ error: "itemID parameter is required" });
      }
      const result = await collection.deleteOne({ itemID: itemID });
      if (result.deletedCount === 1) {
        const projects = await collection.find().toArray();
        return res
          .status(200)
          .json({
            projects,
            message: "Portfolio Project deleted successfully!",
          });
      } else {
        return res.status(404).json({ error: "Portfolio Project not found.." });
      }
    } else {
      return res.status(405).json({ error: "Method Not Allowed" });
    }
  } catch (error) {
    console.error("Error handling request:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  } finally {
    // Close the MongoDB connection after handling the request
    if (client) {
      await client.close();
      client = null; // Reset the client after closing the connection
    }
  }
}
