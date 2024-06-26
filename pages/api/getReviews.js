import { MongoClient } from "mongodb";

async function connectToDatabase(uri) {
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    return client.db().collection("reviews");
  } catch (error) {
    console.error("Error connecting to database:", error);
    throw error;
  }
}

export default async function handler(req, res) {
  let client = null; // Declare client variable outside the try-catch block
  let collection = null; // Declare collection variable outside the try-catch block

  try {
    // Assign the client instance returned by connectToDatabase to the client variable
    client = new MongoClient(process.env.REVIEWS_DB_CONNECTION_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    collection = await connectToDatabase(process.env.REVIEWS_DB_CONNECTION_URI);

    if (req.method === "POST") {
      const { itemID, name, rating, date, location, review } = req.body;
      await collection.insertOne({
        itemID,
        name,
        rating,
        date,
        location,
        review,
      });
      return res
        .status(200)
        .json({ message: "Review submitted successfully!" });
    } else if (req.method === "GET") {
      const reviews = await collection.find().toArray();
      return res.status(200).json(reviews);
    } else if (req.method === "DELETE") {
      const { itemID } = req.query;
      if (!itemID) {
        return res.status(400).json({ error: "itemID parameter is required" });
      }
      const result = await collection.deleteOne({ itemID: itemID });
      if (result.deletedCount === 1) {
        const reviews = await collection.find().toArray();
        return res
          .status(200)
          .json({ reviews, message: "Review deleted successfully!" });
      } else {
        return res.status(404).json({ error: "Review not found.." });
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
      console.log("CLOSED connection to Reviews DB");
    }
  }
}
