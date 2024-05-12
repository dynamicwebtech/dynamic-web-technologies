export const config = {
  api: {
    bodyParser: false,
    sizeLimit: "5gb",
  },
};

import multer from "multer";
import { MongoClient, ObjectId } from "mongodb";

const upload = multer({
  storage: multer.memoryStorage(),
});

async function connectToDatabase() {
  const client = new MongoClient(process.env.BLOG_POSTS_DB_CONNECTION_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();
  return client; // Return the MongoClient instance directly
}

export default async function handler(req, res) {
  let client = null;

  try {
    console.log("Request method:", req.method);
    console.log("Request body:", req.body); // Log the request body to see if blogID is included

    if (req.method === "POST") {
      // Use multer middleware to handle file upload
      upload.single("blogPostImg")(req, res, async (err) => {
        if (err) {
          console.error("Error uploading file:", err);
          res.status(500).json({ error: "Failed to upload file" });
          return;
        }

        try {
          client = await connectToDatabase();
          const collection = client.db("blog-posts").collection("posts");

          const {
            blogID,
            blogPostName,
            blogPostNameID,
            blogPostIntroText,
            blogPostText,
            blogPostCreationDate,
            blogPostAuthor,
          } = req.body;
          const file = req.file;

          if (!file) {
            console.error("No file uploaded");
            res.status(400).json({ error: "No file uploaded" });
            return;
          }

          const type = "image";
          const blogPostImg = `data:${type};base64,${file.buffer.toString(
            "base64"
          )}`;

          await collection.insertOne({
            blogID,
            blogPostName,
            blogPostNameID,
            blogPostIntroText,
            blogPostText,
            blogPostImg,
            blogPostCreationDate,
            blogPostAuthor,
          });

          res
            .status(200)
            .json({ message: "Blog post submitted successfully!" });
        } catch (error) {
          console.error("Error saving Blog post to database: ", error);
          res.status(500).json({ error: "Failed to save Blog post." });
        } finally {
          if (client) {
            await client.close();
            console.log("CLOSED connection to Blog Posts DB");
          }
        }
      });
    } else if (req.method === "DELETE") {
      const { blogID, selectedPost } = req.query;

      if (!blogID && !selectedPost) {
        return res
          .status(400)
          .json({ error: "blogID or selectedPost parameter is required" });
      }

      try {
        client = await connectToDatabase();
        const collection = client.db("blog-posts").collection("posts");

        let result;

        if (blogID) {
          result = await collection.deleteOne({ blogID: blogID });
        } else if (selectedPost) {
          result = await collection.deleteOne({ blogID: selectedPost });
        }

        if (result.deletedCount === 1) {
          const blogPosts = await collection.find().toArray();
          return res.status(200).json({
            blogPosts,
            message: "Blog post deleted successfully!",
          });
        } else {
          return res.status(404).json({ error: "Blog post not found" });
        }
      } catch (error) {
        console.error("Error deleting Blog post:", error);
        return res.status(500).json({ error: "Failed to delete Blog post" });
      } finally {
        if (client) {
          await client.close();
          console.log("CLOSED connection to Blog Posts DB");
        }
      }
    } else if (req.method === "GET") {
      try {
        client = await connectToDatabase();
        const collection = client.db("blog-posts").collection("posts");

        const blogPosts = await collection.find().toArray();
        res.status(200).json(blogPosts);
      } catch (error) {
        console.error("Error retrieving media items from database:", error);
        res.status(500).json({ error: "Failed to retrieve media items" });
      } finally {
        if (client) {
          await client.close();
          console.log("CLOSED connection to Blog Posts DB");
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
