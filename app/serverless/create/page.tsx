import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SceneCreate from "./SceneCreate";

async function getAllScenes() {
  const request = await axios.get(process.env.BASE_URL + "/api/scenes");
  return request;
}
const MetaverseScenesPage = async (props) => {
  const scenes = await getAllScenes();
  return (
    <>
      <h1>Create a new scene here</h1>
      <SceneCreate />
    </>
  );
};
export default MetaverseScenesPage;
