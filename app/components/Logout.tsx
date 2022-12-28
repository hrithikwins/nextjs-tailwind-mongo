"use client";
import { logOut } from "@utils/logout";

const Logout = () => {
  return (
    <div>
      <button onClick={logOut}>Sign in with google</button>
    </div>
  );
};

export default Logout;
