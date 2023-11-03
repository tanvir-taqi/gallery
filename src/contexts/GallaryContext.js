import React, { createContext, useEffect, useRef, useState } from 'react'


// create a context API just to handle all the functionalities and states for the gallery
export const NewGallaryContext = createContext()



const GallaryContext = ({children}) => {
  const [imagedata, setImagedata] = useState([]);
  const [isSelectedArray, setIsSelectedArray] = useState([]);
  const [refetch, setRefetch] = useState(true);

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
  };

  // a funtion to handle deletation of selected images
  // the imageData will be filtered out if the id is in the isSelectedArray
  const handleDeleteSelctedFile = () => {
    const filteredData = imagedata.filter(
      (img) => !isSelectedArray.includes(img.id)
    );
     window.localStorage.setItem("images", JSON.stringify(filteredData));
     setRefetch(!refetch);
    setIsSelectedArray([]);
  };

  //handle sorting images by drag and drop
  //save reference for dragItem and dragOverItem
  const dragItem = useRef(null)
  const dragOverItem = useRef(null);

  //const handle drag sorting
  // swap the dragitem index with the dragover items index
  //reseting the references and saving data to localStorage
  const handleSort = () => {
    let newImageData = [...imagedata];
    [newImageData[dragItem.current], newImageData[dragOverItem.current]] = [
      newImageData[dragOverItem.current],
      newImageData[dragItem.current]
    ];
    dragItem.current = null;
    dragOverItem.current = null;
    window.localStorage.setItem("images", JSON.stringify(newImageData));
    setRefetch(!refetch)
  };


  // a function to fetch data from public directory
  const handleFetchData = () => {
  fetch("data.json")
   .then((res) => res.json())
   .then((data) => {
     window.localStorage.setItem("images", JSON.stringify(data.images));
     setRefetch(!refetch);
   });
  }
  
  // handle reset all
  const handleResetAll = () => {
    handleFetchData()
    setIsSelectedArray([])
  }


// load images from localstorage
// save them in imageData state
// it will load when the page first loading and also when you sort, delete or reset everything
  useEffect(() => {
    const images = window.localStorage.getItem("images");
    if (images) {
      setImagedata(JSON.parse(images));
    } else {
      handleFetchData();
    }
  }, [refetch]);

  // load images from a public directory 
  //  save them in the local storage
  // if images are already in local storage it will not be overwritten
  useEffect(() => {
   const images = window.localStorage.getItem("images");
   if(!images){
    handleFetchData();
   }
  }, []);

  const valueInfo = {
    imagedata,
    isSelectedArray,
    setIsSelectedArray,
    handleSelectedFiles,
    handleDeleteSelctedFile,
    dragItem,
    dragOverItem,
    handleSort,
    handleResetAll,
  };


  return (
    <NewGallaryContext.Provider value={valueInfo}>
      {children}
    </NewGallaryContext.Provider>
  );
}

export default GallaryContext