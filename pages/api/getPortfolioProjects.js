import multer from "multer";
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
  return client; // Return the MongoClient instance directly
}

export const config = {
  api: {
    bodyParser: false,
    sizeLimit: "5gb",
  },
};

export default async function handler(req, res) {
  let client = null;

  try {
    if (req.method === "POST") {
      upload.fields([
        { name: "file", maxCount: 1 },
        { name: "clientLogo", maxCount: 1 },
      ])(req, res, async (err) => {
        if (err) {
          console.error("Error uploading files:", err);
          res.status(500).json({ error: "Failed to upload files" });
          return;
        }

        try {
          client = await connectToDatabase();
          const collection = client
            .db("portfolio-projects")
            .collection("projects");

          const {
            itemID,
            projectName,
            projectNameID,
            clientName,
            // creationDate,
            demoLink,
            description,
            review,
          } = req.body;
          const files = req.files;
          const file = files["file"][0];
          const clientLogo = files["clientLogo"][0];

          if (!file || !clientLogo) {
            console.error("Files not uploaded");
            res.status(400).json({ error: "Files not uploaded" });
            return;
          }

          const type = "image";
          const client_logo_src = `data:${type};base64,${clientLogo.buffer.toString(
            "base64"
          )}`;
          const display_src = `data:${type};base64,${file.buffer.toString(
            "base64"
          )}`;

          await collection.insertOne({
            itemID,
            projectName,
            projectNameID,
            clientName,
            client_logo_src,
            display_src,
            // creationDate,
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
        } finally {
          if (client) {
            await client.close();
            console.log("CLOSED connection to Portfolio DB");
          }
        }
      });
    } else if (req.method === "DELETE") {
      const { itemID } = req.query;
      if (!itemID) {
        return res.status(400).json({ error: "itemID parameter is required" });
      }

      try {
        client = await connectToDatabase();
        const collection = client
          .db("portfolio-projects")
          .collection("projects");

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
      } catch (error) {
        console.error("Error deleting Portfolio project:", error);
        return res
          .status(500)
          .json({ error: "Failed to delete Portfolio project" });
      } finally {
        if (client) {
          await client.close();
          console.log("CLOSED connection to Portfolio DB");
        }
      }
    } else if (req.method === "GET") {
      try {
        client = await connectToDatabase();
        const collection = client
          .db("portfolio-projects")
          .collection("projects");

        const portfolioProjects = await collection.find().toArray();
        res.status(200).json(portfolioProjects);
      } catch (error) {
        console.error("Error retrieving media items from database:", error);
        res.status(500).json({ error: "Failed to retrieve media items" });
      } finally {
        if (client) {
          await client.close();
          console.log("CLOSED connection to Portfolio DB");
        }
      }
    } else {
      res.status(405).json({ error: "Method Not Allowed" });
    }
  } catch (error) {
    console.error("Error handling request:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
