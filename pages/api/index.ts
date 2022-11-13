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
    const sceneCollection = client.db().collection("scenes");
    if (req.method === "POST") {
      console.log("in the request");
      runMiddleware(req, res, cors);
      const scene = await sceneCollection.insertOne(req.body);
      if (scene.acknowledged) {
        res.status(200).json({
          message: "Scene created successfully with id:  " + scene.insertedId,
        });
      }
    } else if (req.method == "GET") {
      runMiddleware(req, res, cors);
      const links = await sceneCollection.find().sort({ metacritic: -1 }).limit(10).toArray();
      res.json(links);
    } else if (req.method == "DELETE") {
      runMiddleware(req, res, cors);
      const scene = await sceneCollection.drop();
      // if (scene.acknowledged) {
      res.status(200).json({
        message: "Deleted scene Detail",
      });
      // }
    }
  } catch (e) {
    res.status(500).send({ error: e });
  }
};
