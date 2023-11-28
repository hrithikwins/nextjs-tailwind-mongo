import { db } from "config/firebase";
import { collection, getDocs } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";

export default async function read(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const databaseRef = await collection(db, "users");
    await getDocs(databaseRef)
      .then((results) => {
        res.status(200).json(
          results.docs.map((data) => {
            return data.data();
          })
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
}
