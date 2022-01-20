import './App.css';
import React from 'react';
import SearcherBlock from '../SearcherBlock/index';
import SideBar from "../SideBar";
import Header from '../Header';


function App() {
  return (
    <div className="App">
      <Header />
      <SearcherBlock />
      <SideBar />
    </div>
  );
}

export default App;
