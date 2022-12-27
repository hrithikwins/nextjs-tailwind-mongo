import Link from "next/link";
import React, { FC } from "react";

async function getAllWorlds() {
  const res = await fetch(process.env.BASE_URL + "/api/worlds", {
    cache: "no-cache",
  });
  const worlds = await res.json();
  return worlds;
}

const LayoutFile = async () => {
  const worlds = await getAllWorlds();
  return (
    <>
      {/* {worlds.map((world: any) => (
        <div key={world.id}>
          <h1>{world.title}</h1>
        </div>
      ))} */}

      <div className="grid grid-cols-4">
        <Link href="/metaverse/world/create" className="">
          <div className="h-20 w-52 bg-indigo-500">New +</div>
        </Link>

        {worlds.reverse().map((world: any) => (
          <Link href={world.roomUrl ?? "/"}>
            <div className="h-20 w-52 bg-indigo-50">{world.name}</div>
          </Link>
        ))}
      </div>
    </>
  );
};
export default LayoutFile;
