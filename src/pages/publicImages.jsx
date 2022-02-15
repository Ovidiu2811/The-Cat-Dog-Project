import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";


const PublicImages = () => {
  const url = "https://api.thecatapi.com/v1/categories";
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState("1");
  const [numsPics, setNumspics] = useState(3);
  const [myImages, setMyImages] = useState([]);
  const [favouritePics, setFavouritePics] = useState([]);
  const key = 'e88bd2e1-ba73-45b1-87f3-9b2c6e4b7a4a';


  const getPics = async () => {
    const response = await fetch(`https://api.thecatapi.com/v1/images/search/?category_ids=${categoryId}&limit=${numsPics}`
    )
    if (response.status === 200) {
      const pics = await response.json()
      setMyImages(pics)
    }
  }

  const favouritePic = async (id) => {
    const response = await fetch("https://api.thecatapi.com/v1/favourites", {
      method: "POST",
      headers: {
        'Access-Control-Allow-Origin': "*",
        "Content-Type": "application/json",
        'x-api-key': key
      },
      body: JSON.stringify({ 'image_id': id, 'sub_id': "user123" })
    })
  }

  const getCategories = async () => {
    const response = await fetch(url);
    const categories = await response.json();

    if (response.status === 200) {
      setCategories(categories);
    }
  }

  useEffect(() => {
    getCategories()
  }, []);

  return (
    <div>
      <select onChange={(e) => setCategoryId(e.target.value)} value={categoryId} >
        {categories.map(item => <option value={item.id} >{item.name}</option>)}
      </select>
      <select onChange={(e) => setNumspics(e.target.value)} value={numsPics} >
        <option value="3"> 3 </option>
        <option value="9"> 9 </option>
        <option value="15"> 15 </option>
      </select>
      <button onClick={getPics} >Show pics</button>

      <div className="row row-cols-3">
        {myImages.map(item =>
          <div className="col">
            <img className="img-thumbnail" src={item.url} alt="cats" />
            <button onClick={() => favouritePic(item.id)}>Add to Favourite</button>
          </div>
        )}
      </div>
    </div>
  )
};

export default PublicImages;
