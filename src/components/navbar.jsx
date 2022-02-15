import React from "react";
import {Link} from "react-router-dom"


const Navbar = () => {
  return (
    <ul className="navbar">
      <Link to="my-images">My images</Link>
      <Link to="upload">Upload images</Link>
      <Link to="public-images">Public images</Link>
      <Link to="MyFavs">Favourites Pics</Link>
    </ul>
  );
};

export default Navbar;
