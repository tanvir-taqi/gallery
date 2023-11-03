import React from 'react'
import "./Gallary.css";
import { ImCheckmark2 } from "react-icons/im";

const SingleImage = ({
  image,
  index,
  handleSelectedFiles,
  isSelectedArray,
  dragItem,
  dragOverItem,
  handleSort
}) => {
  const isSelected = isSelectedArray.includes(image.id);

  return (
    <div
      className="image-box"
      onClick={() => handleSelectedFiles(image.id)}
      draggable
      onDragStart={(e) => (dragItem.current = index)}
      onDragEnter={(e) => (dragOverItem.current = index)}
      onDragEnd={handleSort}
      onDragOver={(e) => e.preventDefault()}
    >
      {isSelected && (
        <div className="selected">
          {" "}
          <span>
            <ImCheckmark2></ImCheckmark2>
          </span>
        </div>
      )}

      <img src={image.image} className="image" alt="" />
    </div>
  );
};

export default SingleImage