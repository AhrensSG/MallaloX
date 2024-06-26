"use client";
import React, { useState } from "react";
import { storage } from "@/firebase/config";
import { ref, uploadBytes } from "firebase/storage";
import { Toaster, toast } from "sonner";

const UploadMenuPage = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (file.name !== "Menu.jpg") {
      return toast.error("Verifica que el nombre del archivo sea 'Menu.jpg'");
    }
    if (file) {
      toast.info('Uploading File. Please wait!')
      const storageRef = ref(storage, `images/${file.name}`);
      try {
        await uploadBytes(storageRef, file);
        toast.success("File uploaded successfully!");
      } catch (error) {
        toast.error("Error uploading file");
      }
    } else {
      toast.info("Please select a file first.");
    }
  };

  return (
    <main className="w-full grid place-items-center min-h-screen py-5 px-2">
      <div className=" flex flex-col justify-center items-center p-2 space-y-4">
        <Toaster richColors position="bottom-center" />
        <h1 className="text-2xl font-bold">Upload Menu</h1>
        <input
          type="file"
          className="file:bg-lightBrown file:text-white file:outline-none file:border-none file:rounded-md text-sm"
          onChange={handleFileChange}
        />
        <button
          onClick={handleUpload}
          className="mt-4 bg-blue-500 text-white py-0.5 px-4 rounded"
        >
          Upload
        </button>
      </div>
    </main>
  );
};

export default UploadMenuPage;
