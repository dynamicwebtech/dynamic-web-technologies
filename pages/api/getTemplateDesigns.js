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
  const client = new MongoClient(
    process.env.TEMPLATE_DESIGNS_DB_CONNECTION_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
  await client.connect();
  return client; // Return the MongoClient instance directly
}

export default async function handler(req, res) {
  let client = null;

  try {
    if (req.method === "POST") {
    } else if (req.method === "DELETE") {
    } else if (req.method === "GET") {
    } else {
      res.status(405).json({ error: "Method Not Allowed" });
    }
  } catch (error) {
    console.error("Error handling request:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
