"use client";
import { signInWithGoogle } from "@utils/signin";

const GoogleSignIn = () => {
  return (
    <div>
      <button
        onClick={signInWithGoogle}
        className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
      >
        Sign in with google
      </button>
    </div>
  );
};

export default GoogleSignIn;
