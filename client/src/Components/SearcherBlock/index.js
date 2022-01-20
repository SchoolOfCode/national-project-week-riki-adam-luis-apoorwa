import React from 'react';
import SearchBar from './SearchBar/index';
import SearchResults from './SearchResults/index';
import './styles.css';
import { useEffect, useState } from 'react';

// const API_URL = process.env.REACT_APP_API_URL;

export function SearcherBlock() {
  const [links, setLinks] = useState([]);
  const [input, setInput] = useState(null);

  const [search, setSearch] = useState(null);

  useEffect(() => {
    async function fetchData() {
      let response = await fetch(
        `https://soc-oneplace.herokuapp.com/weeks?subject=${search}`
        //`${API_URL}/weeks?subject=${search}`
      );
      const data = await response.json();
      setLinks(data.payload);
    }
    fetchData();
  }, [search]);

  // console.log(links);
  return (
    <div className="SearchBlock_Container">
      <SearchBar setInput={setInput} input={input} setSearch={setSearch} />
      <SearchResults links={links} />
    </div>
  );
}

export default SearcherBlock;
