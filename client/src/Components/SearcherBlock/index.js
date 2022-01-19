import React from 'react';
import SearchBar from './SearchBar/index';
import SearchResults from './SearchResults/index';
import './styles.css';
import { useEffect, useState } from 'react';

export function SearcherBlock() {
  const [links, setLinks] = useState([]);
  //state for the input
  const [input, setInput] = useState('')
  //

  useEffect(() => {
    // https://soc-oneplace.herokuapp.com/weeks?subject=${javascript}
    async function fetchData() {
      let response = await fetch(`https://soc-oneplace.herokuapp.com/weeks`);
      const data = await response.json();
      setLinks(data);
    }
    fetchData();
    console.log(links.payload);
  }, []);

  


  return (
    <div className="SearchBlock_Container">
      <SearchBar setInput={setInput} input={input}/>
      <SearchResults />
    </div>
  );
}

export default SearcherBlock;
