import React, { createContext, useEffect, useState } from 'react'


// create a context API just to handle all the functionalities and states for the gallery
export const NewGallaryContext = createContext()



const GallaryContext = ({children}) => {
    const [imagedata, setImagedata] = useState([]);
    const [isSelectedArray,setIsSelectedArray] = useState([]);


    // handle selected files for deletations
    // Check if the ID is already in the isSelected array
    // If the ID is already selected, remove it from the array
    // If the ID is not selected, add it to the array
    const handleSelectedFiles = (id) => {
      const isAlreadySelected = isSelectedArray.includes(id);

      if (isAlreadySelected) {
        const updatedSelection = isSelectedArray.filter(
          (selectedId) => selectedId !== id
        );
        setIsSelectedArray(updatedSelection);
      } else {
        const updatedSelection = [...isSelectedArray, id];
        setIsSelectedArray(updatedSelection);
      }
    }

    // a funtion to handle deletation of selected images
    // the imageData will be filtered out if the id is in the isSelectedArray
    const handleDeleteSelctedFile = ()=>{
      const filteredData = imagedata.filter((img) => !isSelectedArray.includes(img.id))
      setImagedata(filteredData)
      setIsSelectedArray([])
    }

    // load images from a public directory
    useEffect(() => {
      fetch("data.json")
        .then((res) => res.json())
        .then((data) => {
          setImagedata(data.images);
        });
    }, []);


    
    const valueInfo = {
      imagedata,
      isSelectedArray,
      setIsSelectedArray,
      handleSelectedFiles,
      handleDeleteSelctedFile,
    };
  return (
    <NewGallaryContext.Provider value={valueInfo}>
        {children}
    </NewGallaryContext.Provider>
  )
}

export default GallaryContext