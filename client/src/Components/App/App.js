import './App.css';
import React from 'react';
import SearcherBlock from '../SearcherBlock/index';
import SideBar from '../SideBar';
import Header from '../Header';
import LoginComponent from './LoginComponent';

function App() {
  return (
    <div className="App">
      <Header />
      <LoginComponent />
      <div className="body_container">
        <SearcherBlock />
        <SideBar />
      </div>
    </div>
  );
}

export default App;
