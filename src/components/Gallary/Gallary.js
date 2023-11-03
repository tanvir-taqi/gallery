import React, { useContext } from "react";
import { NewGallaryContext } from "../../contexts/GallaryContext";
import SingleImage from "./SingleImage";
import "./Gallary.css";

const Gallary = () => {
  const {
    imagedata,
    handleSelectedFiles,
    isSelectedArray,
    dragItem,
    dragOverItem,
    handleSort,
  } = useContext(NewGallaryContext)

  
  return (
    <div>
      <div className="gallery">
        {imagedata.map((image, index) => (
          <SingleImage
            key={image.id}
            image={image}
            index={index}
            handleSelectedFiles={handleSelectedFiles}
            isSelectedArray={isSelectedArray}
            dragItem={dragItem}
            dragOverItem={dragOverItem}
            handleSort={handleSort}
          ></SingleImage>
        ))}
      </div>
    </div>
  );
};

export default Gallary;
