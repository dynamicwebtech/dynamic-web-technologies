/**
 *
 *  This is the Reviews Connection object
 *
 */

import { MongoClient } from "mongodb";

let client;

async function reviewsConnection() {
  if (!client) {
    client = new MongoClient(process.env.REVIEWS_DB_CONNECTION_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
  }
  return client.db("site-reviews").collection("reviews");
}

export default reviewsConnection;
