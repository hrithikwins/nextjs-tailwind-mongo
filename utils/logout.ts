import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
export const logOut = () =>
  signOut(auth)
    .then(() => {
      console.log("logged out");
    })
    .catch((error) => {
      console.log(error);
    });
