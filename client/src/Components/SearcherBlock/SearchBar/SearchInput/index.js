import React from 'react';
import './styles.css';
import { useState } from 'react';

export function SearchInput({ setInput, input }) {
//state for input
const [search, setSearch] = useState('')

  function handleChange(e) {
    const inputText = e.target.value;
    console.log(inputText);
    setInput(inputText);
  }

  function handleClick() {
    setSearch(input)
    console.log(search)
  }

  return (
    <div>
      <button id="Search_Text_Span" onClick={handleClick}>
        Search
      </button>
      <input type="text" id="Searcher_Input" onChange={handleChange}></input>
    </div>
  );
}

export default SearchInput;
