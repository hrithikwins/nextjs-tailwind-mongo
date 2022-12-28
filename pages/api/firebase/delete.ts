import { db } from "config/firebase";
import { doc, deleteDoc } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";

export default async function read(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "DELETE") {
    const { id } = req.body;
    const dataToBeDeleted = doc(db, "users", id);
    deleteDoc(dataToBeDeleted)
      .then(() => {
        res.status(200).json({ message: "Deleted" });
      })
      .catch((err) => {
        console.error(err);
      });
  }
}
