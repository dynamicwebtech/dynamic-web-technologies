import multer from "multer";
import fs from "fs";
import { MongoClient } from "mongodb";

const upload = multer({
  storage: multer.memoryStorage(),
});

async function connectToDatabase() {
  const client = new MongoClient(
    process.env.PORTFOLIO_PROJECTS_DB_CONNECTION_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
  await client.connect();
  return client.db("portfolio-projects").collection("projects");
}

export const config = {
  api: {
    bodyParser: false, // Disables automatic parsing of the request body
    sizeLimit: "5gb",
  },
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    // Use multer middleware to handle file upload
    upload.single("file")(req, res, async (err) => {
      if (err) {
        console.error("Error uploading file:", err);
        res.status(500).json({ error: "Failed to upload file" });
        return;
      }

      const {
        itemID,
        projectName,
        clientName,
        creationDate,
        demoLink,
        description,
        review,
        // tools,
        // achievements,
      } = req.body;
      const file = req.file;

      if (!file) {
        console.error("No file uploaded");
        res.status(400).json({ error: "No file uploaded" });
        return;
      }

      const collection = await connectToDatabase();

      const type = "image";

      try {
        const src = `data:${type};base64,${file.buffer.toString("base64")}`; // Convert file buffer to base64

        await collection.insertOne({
          itemID,
          projectName,
          clientName,
          src,
          creationDate,
          demoLink,
          description,
          review,
          // tools,
          // achievements,
        });

        res
          .status(200)
          .json({ message: "Portfolio project submitted successfully!" });
      } catch (error) {
        console.error("Error saving Portfolio project to database: ", error);
        res.status(500).json({ error: "Failed to save Portfolio project." });
      }
    });
  } else if (req.method === "DELETE") {
    const { itemID } = req.query;
    if (!itemID) {
      return res.status(400).json({ error: "itemID parameter is required" });
    }
    const collection = await connectToDatabase();
    const result = await collection.deleteOne({ itemID: itemID });
    if (result.deletedCount === 1) {
      const portfolioProjects = await collection.find().toArray();
      return res.status(200).json({
        portfolioProjects,
        message: "Media item deleted successfully!",
      });
    } else {
      return res.status(404).json({ error: "Media item not found.." });
    }
  } else if (req.method === "GET") {
    try {
      const collection = await connectToDatabase();
      const portfolioProjects = await collection.find().toArray();
      res.status(200).json(portfolioProjects);
    } catch (error) {
      console.error("Error retrieving media items from database:", error);
      res.status(500).json({ error: "Failed to retrieve media items" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
