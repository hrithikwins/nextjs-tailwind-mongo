import Link from "next/link";
import React, { FC } from "react";
import { getCollectionData } from "../../utils/get-url";

async function getAllWorlds() {
  const res = await getCollectionData("worlds",10);
  return res;
}

const LayoutFile = async () => {
  const worlds = await getAllWorlds();
  return (
    <>
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
