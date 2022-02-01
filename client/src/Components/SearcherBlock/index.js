import React from 'react';
import SearchBar from './SearchBar/index';
import SearchResults from './SearchResults/index';
import Form from '../Form'
import './styles.css';
import { useEffect, useState } from 'react';

// const API_URL = process.env.REACT_APP_API_URL;

export function SearcherBlock() {
  const [add, setAdd] = useState(false)
  const [links, setLinks] = useState([]);
  const [input, setInput] = useState(null);
  const [search, setSearch] = useState(null);
  const [week, setWeek] = useState(0)

  useEffect(() => {
    async function fetchData() {
      let response = await fetch(
        `https://soc-oneplace.herokuapp.com/data/weeks?subject=${search}`
        //`${API_URL}/weeks?subject=${search}`
      );
      const data = await response.json();
      setLinks(data.payload);
    }
    fetchData();
  }, [search]);

  useEffect(() => {
    async function fetchDataByWeek() {
      let response = await fetch(
        `https://soc-oneplace.herokuapp.com/data/weeks/${week}`
        //`${API_URL}/weeks?subject=${search}`
      );
      const data = await response.json();
      setLinks(data.payload);
    }
    fetchDataByWeek();
  }, [week]);

  // console.log(links);
  return (
    <div className="SearchBlock_Container">
      <SearchBar setInput={setInput} input={input} setSearch={setSearch} setAdd={setAdd} setWeek={setWeek}/>
      <SearchResults links={links} /> 
      
      {add && <Form setAdd={setAdd}/>}
    </div>
  );
}

export default SearcherBlock;
