import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";


const key = 'e88bd2e1-ba73-45b1-87f3-9b2c6e4b7a4a';
const url = "https://api.thecatapi.com/v1/favourites"
const MyFavs = () => {
  const [myImages, setMyImages] = useState([])

  const getImages = async () => {
    const response = await fetch(url, {
      headers: {
        'x-api-key': key
      }
    })
    if (response.status === 200) {
      const pics = await response.json()
      setMyImages(pics)
    }
  }

  const deletePics = async (id) => {
    const response = await fetch(`https://api.thecatapi.com/v1/images/${id}`, {
      method : 'DELETE',
      headers: {
        AccessControlAllowOrigin:'*', 'x-api-key': key
      }
    })
      if(response.status === 204){
        getImages()
      }
  }

  useEffect(() => {
    getImages()
  }, [])

  console.log(myImages)
  return (
    <div className="row row-cols-3">
      {myImages.map(item =>

      <div className="col">
        <img className="img-thumbnail" src = {item.image.url}  alt="cats"/>
        <button onClick={()=>deletePics(item.id)}>Delete</button>
      </div>
      )}
    </div>
  )
};

export default MyFavs;