// Import necessary modules
import { MongoClient, ObjectId } from "mongodb";

// Define a function to connect to the MongoDB database
async function connectToDatabase() {
  const client = new MongoClient(process.env.BLOG_POSTS_DB_CONNECTION_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();
  return client; // Return the MongoClient instance directly
}

// Define the API handler function for updating blog post data
export default async function handler(req, res) {
  let client = null; // Initialize MongoDB client

  try {
    console.log("Request method:", req.method);
    console.log("Request body:", req.body); // Log the request body to see if blogID and other fields are included

    // Ensure that the request method is POST
    if (req.method === "POST") {
      try {
        // Connect to the database
        client = await connectToDatabase();
        console.log("Connected to MongoDB");

        // Use the parsed data received from the client-side directly
        const postData = req.body;

        // Get the ID of the blog post to be updated
        const postId = postData._id;

        // Get the collection for blog posts
        const collection = client.db("blog-posts").collection("posts");

        // Find the existing document by its ID
        const existingPost = await collection.findOne({
          _id: new ObjectId(postId),
        });

        if (existingPost) {
          // Update the existing document with the new data
          const updatedPost = {
            ...existingPost,
            blogPostName: postData.blogPostName,
            blogPostAuthor: postData.blogPostAuthor,
            blogPostIntroText: postData.blogPostIntroText,
            blogPostText: postData.blogPostText,
            // Add other fields to update as needed
          };

          // Update the document in the collection
          await collection.updateOne(
            { _id: new ObjectId(postId) },
            { $set: updatedPost }
          );
          console.log("Updated blog post in the database");

          // Send a success response
          res.status(200).json({ message: "Blog post updated successfully" });
        } else {
          // If the blog post with the specified ID does not exist, return a 404 Not Found response
          res.status(404).json({ error: "Blog post not found" });
        }
      } catch (error) {
        // Handle any errors
        console.error("Error updating blog post:", error);
        res.status(500).json({ error: "Failed to update blog post" });
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
