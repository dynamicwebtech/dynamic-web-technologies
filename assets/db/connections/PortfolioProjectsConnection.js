/**
 *
 *  This is the Portfolio Projects Connection object
 *
 */

import { MongoClient } from "mongodb";

let client;

async function portfolioProjectsConnection() {
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

export default portfolioProjectsConnection;
