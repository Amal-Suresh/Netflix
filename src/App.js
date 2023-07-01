import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import {action,originals,romance,horror,comedy,documentary} from './urls'
import "./App.css"
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";

export function App() {
  return (
    <div className="App">
        <Navbar/>
        <Banner/>
        <RowPost url={originals} title="Netflix Originals"/>
        <RowPost url={action} title="Action" isSmall/>
        <RowPost url={romance} title="Romance" isSmall/>
        <RowPost url={horror} title="Horror" isSmall/>
        <RowPost url={comedy} title="Comedy" isSmall/>
        <RowPost url={documentary} title="Documentary" isSmall/>
        
    </div>
  );
}


