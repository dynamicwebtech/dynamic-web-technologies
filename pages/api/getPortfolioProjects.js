import multer from "multer";
import fs from "fs";
import { MongoClient } from "mongodb";

const upload = multer({
  storage: multer.memoryStorage(),
});

export const config = {
  api: {
    bodyParser: false, // Disables automatic parsing of the request body
    sizeLimit: "5gb",
  },
};

export default async function handler(req, res) {
  let client = null; // Declare client variable outside try-catch block

  try {
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
        } = req.body;
        const file = req.file;

        if (!file) {
          console.error("No file uploaded");
          res.status(400).json({ error: "No file uploaded" });
          return;
        }

        try {
          client = new MongoClient(
            process.env.PORTFOLIO_PROJECTS_DB_CONNECTION_URI,
            {
              useNewUrlParser: true,
              useUnifiedTopology: true,
            }
          );

          await client.connect();
          const db = client.db(); // Get the default database
          const collection = db.collection("projects");

          const type = "image";

          const src = `data:${type};base64,${file.buffer.toString("base64")}`;
          await collection.insertOne({
            itemID,
            projectName,
            clientName,
            src,
            creationDate,
            demoLink,
            description,
            review,
          });

          res
            .status(200)
            .json({ message: "Portfolio project submitted successfully!" });
        } catch (error) {
          console.error("Error saving Portfolio project to database: ", error);
          res.status(500).json({ error: "Failed to save Portfolio project." });
        }
        // finally {
        //   // Close the MongoDB client connection
        //   if (client) {
        //     await client.close();
        //     console.log("CLOSED connection to Portfolio DB");
        //   }
        // }
      });
    } else if (req.method === "DELETE") {
      const { itemID } = req.query;
      if (!itemID) {
        return res.status(400).json({ error: "itemID parameter is required" });
      }
      try {
        client = new MongoClient(
          process.env.PORTFOLIO_PROJECTS_DB_CONNECTION_URI,
          {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          }
        );

        await client.connect();
        const db = client.db(); // Get the default database
        const collection = db.collection("projects");

        const result = await collection.deleteOne({ itemID: itemID });
        if (result.deletedCount === 1) {
          return res
            .status(200)
            .json({ message: "Portfolio project deleted successfully!" });
        } else {
          return res.status(404).json({ error: "Portfolio project not found" });
        }
      } catch (error) {
        console.error("Error deleting Portfolio project:", error);
        return res
          .status(500)
          .json({ error: "Failed to delete Portfolio project" });
      }
      // finally {
      //   // Close the MongoDB client connection
      //   if (client) {
      //     await client.close();
      //     console.log("CLOSED connection to Portfolio DB");
      //   }
      // }
    } else if (req.method === "GET") {
      try {
        client = new MongoClient(
          process.env.PORTFOLIO_PROJECTS_DB_CONNECTION_URI,
          {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          }
        );

        await client.connect();
        const db = client.db(); // Get the default database
        const collection = db.collection("projects");

        const portfolioProjects = await collection.find().toArray();
        res.status(200).json(portfolioProjects);
      } catch (error) {
        console.error("Error retrieving media items from database:", error);
        res.status(500).json({ error: "Failed to retrieve media items" });
      }
      // finally {
      //   // Close the MongoDB client connection
      //   if (client) {
      //     await client.close();
      //     console.log("CLOSED connection to Portfolio DB");
      //   }
      // }
    } else {
      res.status(405).json({ error: "Method Not Allowed" });
    }
  } catch (error) {
    console.error("Error handling request:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    // Close the MongoDB client connection
    if (client) {
      await client.close();
      console.log("CLOSED connection to Portfolio DB");
    }
  }
}
