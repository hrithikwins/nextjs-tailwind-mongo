import { db } from "config/firebase";
import { collection, addDoc } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";

export default async function create(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name, email, password } = req.body;
    const databaseRef = await collection(db, "users");
    await addDoc(databaseRef, {
      name: name,
      email: email,
      password: password,
    })
      .then(() => {
        res.status(200).json({ status: "Submitted" });
      })
      .catch((err) => {
        console.error(err);
      });
  }
}
