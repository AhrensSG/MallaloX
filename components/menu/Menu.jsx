import { Abhaya } from "@/fonts";
import React, { useEffect, useState } from "react";

import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "@/firebase/config";
import { toast } from "sonner";

const getImageURL = async (imagePath) => {
  const imageRef = ref(storage, imagePath);

  try {
    const downloadURL = await getDownloadURL(imageRef);
    return downloadURL;
  } catch (error) {
    toast.info("Error getting the Menu");
  }
};

const Menu = () => {
  const [imageURL, setImageURL] = useState("");

  useEffect(() => {
    const fetchImageURL = async () => {
      try {
        const url = await getImageURL("/images/Menu.jpg");
        setImageURL(url);
      } catch (error) {
        toast.info("Error fetching image URL");
      }
    };

    fetchImageURL();
  }, []);

  return (
    <div className="divide-y divide-lightBrown space-y-3">
      <div className="flex justify-between items-center ">
        <h3 className="font-bold text-2xl uppercase">Menu</h3>
      </div>
      <div className="flex flex-col justify-center items-center py-2 w-full gap-2">
        {imageURL ? <img src={imageURL} alt="Menu" /> : <span>Loading...</span>}
      </div>
    </div>
  );
};

export default Menu;
