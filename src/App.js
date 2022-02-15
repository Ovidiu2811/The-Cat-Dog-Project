import React from "react";
import Navbar from "./components/navbar";
import MyImages from "./pages/myImages";
import Upload from "./pages/upload";
import PublicImages from "./pages/publicImages";
import {HashRouter, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css"
import MyFavs from "./pages/myFavs";

function App() {
  return (
    <HashRouter>
    <Navbar/>
    <Switch>
      <Route path="/upload" component={Upload}/>
      <Route path="/my-images" component={MyImages}/>
      <Route path="/public-images" component= {PublicImages}/>
      <Route path="/MyFavs" component={MyFavs}/>
    </Switch>
  </HashRouter>
  );
}

export default App;
