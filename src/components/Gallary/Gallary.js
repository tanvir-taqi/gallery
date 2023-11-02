import React, { useContext } from "react";
import { NewGallaryContext } from "../../contexts/GallaryContext";
import SingleImage from "./SingleImage";
import "./Gallary.css";

const Gallary = () => {
  const { imagedata, handleSelectedFiles,isSelectedArray } = useContext(NewGallaryContext);
  return (
    <div>
      <div className="gallery">
        {imagedata.map((image) => (
          <SingleImage
            key={image.id}
            image={image}
            handleSelectedFiles={handleSelectedFiles}
            isSelectedArray={isSelectedArray}
          ></SingleImage>
        ))}
      </div>
    </div>
  );
};

export default Gallary;
