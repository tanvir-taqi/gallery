import React, { useContext } from 'react'
import './GalleryHeader.css'
import { NewGallaryContext } from '../../contexts/GallaryContext';
import { ImBin2, ImLoop2 } from "react-icons/im";

const GallaryHeader = () => {
    const { isSelectedArray, handleDeleteSelctedFile, handleResetAll} = useContext(NewGallaryContext);

  return (
    <div>
      <div className="gallery-header">
        <div>
          <h3>Gallery</h3>
        </div>
        <div>
          {isSelectedArray.length === 0 ? (
            <div>
              <small>Click To Select Image</small>
            </div>
          ) : (
            <div>
              <small>{isSelectedArray.length} File Selected</small>
            </div>
          )}
        </div>
        <div onClick={handleResetAll} className="reset-btn">
          <p>
            <span>
              <ImLoop2></ImLoop2>
            </span>{" "}
            <span className="mobile-hidden">Reset All</span>
          </p>
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
                <span className="mobile-hidden">
                  Delete {isSelectedArray.length} FIle
                </span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default GallaryHeader