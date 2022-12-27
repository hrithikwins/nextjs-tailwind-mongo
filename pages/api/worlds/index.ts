import type { NextApiRequest, NextApiResponse } from "next";
import Cors from "cors";
import clientPromise from "@lib/mongodb";

// Initializing the cors middleware
// You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
const cors = Cors({
  methods: ["POST", "GET", "HEAD", "PATCH", "DELETE"],
});

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req: NextApiRequest, res: NextApiResponse, fn: Function) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

// ------apis start here
export default async (req: any, res: any) => {
  try {
    const client = await clientPromise;
    // const db = client.db();
    // This will allow OPTIONS request
    if (req.method === "OPTIONS") {
      return res.status(200).send("ok");
    }
    const worldCollection = client.db().collection("worlds");
    if (req.method === "POST") {
      console.log("in the request");
      runMiddleware(req, res, cors);
      const world = await worldCollection.insertOne(req.body);
      if (world.acknowledged) {
        res.status(200).json({
          message: "World created successfully with id:  " + world.insertedId,
        });
      }
    } else if (req.method == "GET") {
      runMiddleware(req, res, cors);
      const links = await worldCollection
        .find()
        .sort({ metacritic: -1 })
        // .limit(10)
        .toArray();
      res.json(links);
    } else if (req.method == "DELETE") {
      runMiddleware(req, res, cors);
      const world = await worldCollection.drop();
      // if (world.acknowledged) {
      res.status(200).json({
        message: "Deleted world Detail",
      });
      // }
    }
  } catch (e) {
    res.status(500).send({ error: e });
  }
};
