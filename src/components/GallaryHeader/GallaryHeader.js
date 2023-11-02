import React, { useContext } from 'react'
import './GalleryHeader.css'
import { NewGallaryContext } from '../../contexts/GallaryContext';
import { ImBin2 } from "react-icons/im";

const GallaryHeader = () => {
    const { isSelectedArray, handleDeleteSelctedFile} = useContext(NewGallaryContext);

  return (
    <div>
      <div className="gallery-header">
        <div>
          {isSelectedArray.length === 0 ? (
            <div>
              <p>Click To Select Image</p>
            </div>
          ) : (
            <div>
              <p> {isSelectedArray.length} FIle Selected</p>
            </div>
          )}
        </div>
        <div>
          {isSelectedArray.length === 0 ? (
            ""
          ) : (
            <div onClick={handleDeleteSelctedFile}>
              <p className="delete-btn">
                {" "}
                <span>
                  <ImBin2></ImBin2>
                </span>{" "}
                Delete {isSelectedArray.length} FIle
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default GallaryHeader