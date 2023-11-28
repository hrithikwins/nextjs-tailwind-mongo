"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Image from "next/image";
import axios from "axios";
import React from "react";

function CreateWorld() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
    control,
  } = useForm();

  async function onSubmit(data: any) {
    const options = {
      method: "POST",
      url: "http://localhost:3000/api/scenes",
      headers: { "Content-Type": "application/json" },
      data: {
        name: data["name"],
        sceneId: data["sceneId"],
        imageUrl: data["imageUrl"],
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        alert("scene created");
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  const createWorldFields: FormField[] = [
    {
      label: "name",
      name: "name",
      errors: errors.name,
      field: "textField",
      required: true,
    },
    {
      label: "Scene Id",
      name: "sceneId",
      fileName: "sceneId",
      errors: errors.sceneId,
      field: "textField",
      required: true,
    },
    {
      label: "Scene Image Url",
      name: "imageUrl",
      fileName: "imageUrl",
      errors: errors.brandLogo,
      field: "textField",
      required: true,
    },
  ];
  return (
    <>
      <h1>Enter scene details</h1>
      {/* {JSON.stringify(scenes)} */}
      {/* {sceneId} */}
      {/* <button onClick={submitFunction}>Create</button> */}

      <FormCreator key="createWorld" fields={createWorldFields} register={register} control={control} onSubmit={onSubmit} handleSubmit={handleSubmit} buttonText="Create Scene" />
    </>
  );
}
export default CreateWorld;
