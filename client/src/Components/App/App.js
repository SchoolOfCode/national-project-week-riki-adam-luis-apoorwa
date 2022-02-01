import "./App.css";
import React from "react";
import SearcherBlock from "../SearcherBlock/index";
import SideBar from "../SideBar";
import Header from "../Header";
import LoginComponent from "../LoginComponent";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="body_container">
        <div className="body_container_left">
          <LoginComponent />
          <SearcherBlock />
        </div>
        <div className="body_container_right">
          <SideBar />
        </div>
        
      </div>
      
      
    </div>
  );
}

export default App;
