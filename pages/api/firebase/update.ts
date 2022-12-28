import { db } from "config/firebase";
import { doc, updateDoc } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";

export default async function read(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "PATCH") {
    const { id, name, email, password } = req.body;
    const dataToBeEdit = doc(db, "users", id);
    updateDoc(dataToBeEdit, {
      name: name,
      email: email,
      password: password,
    })
      .then(() => {
        res.status(200).json({ message: "Updated" });
      })
      .catch((err) => {
        console.error(err);
      });
  }
}
