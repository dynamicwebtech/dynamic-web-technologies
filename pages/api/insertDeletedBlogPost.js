// Import necessary modules
import { MongoClient } from "mongodb";

// Define a function to connect to the MongoDB database
async function connectToDatabase() {
  const client = new MongoClient(process.env.BLOG_POSTS_DB_CONNECTION_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();
  return client; // Return the MongoClient instance directly
}

// Define the API handler function for storing data from localStorage
export default async function handler(req, res) {
  let client = null; // Initialize MongoDB client

  try {
    console.log("Request method:", req.method);
    console.log("Request body:", req.body); // Log the request body to see if blogID is included

    // Ensure that the request method is POST
    if (req.method === "POST") {
      try {
        // Connect to the database
        client = await connectToDatabase();
        console.log("Connected to MongoDB");

        // Use the parsed data received from the client-side directly
        const postData = req.body;

        // Remove the duplicate document with the same _id
        const collection = client.db("blog-posts").collection("posts");
        await collection.deleteOne({ _id: postData._id });
        console.log("Removed duplicate document with _id:", postData._id);

        // Insert the post data into the database collection
        await collection.insertOne(postData);
        console.log("Inserted post from localStorage into database");

        // Send a success response
        res
          .status(200)
          .json({ message: "Blog post inserted into database successfully" });
      } catch (error) {
        // Handle any errors
        console.error(
          "Error saving Blog post from localStorage to database: ",
          error
        );
        res
          .status(500)
          .json({ error: "Failed to save Blog post from localStorage." });
      } finally {
        // Close the MongoDB client connection
        if (client) {
          await client.close();
          console.log("Closed MongoDB client connection");
        }
      }
    } else {
      // If the request method is not POST, return a 405 Method Not Allowed response
      res.status(405).json({ error: "Method Not Allowed" });
    }
  } catch (error) {
    console.error("Error handling request:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
