import React from 'react'
import "./Gallary.css";
import { ImCheckmark2 } from "react-icons/im";

const SingleImage = ({ image, handleSelectedFiles, isSelectedArray }) => {
  
  const isSelected = isSelectedArray.includes(image.id);

  return (
    <div className='image-box'  onClick={() => handleSelectedFiles(image.id)}>
      {
        isSelected &&  <div className='selected'> <span><ImCheckmark2></ImCheckmark2></span></div>
      }
      
      <img
        src={image.image}
        className="image"
        alt=""
       
      />
    </div>
  );
};

export default SingleImage