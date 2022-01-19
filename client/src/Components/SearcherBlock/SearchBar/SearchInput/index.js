import React from 'react';
import './styles.css';
import { useState } from 'react';

export function SearchInput({ setInput }) {
//state for input

  function handleClick(e) {
    const input = e.target.value;
    console.log(input);
    setInput(e.target.value);
  }

  return (
    <div>
      <button id="Search_Text_Span" onClick={handleClick}>
        Search
      </button>
      <input type="text" id="Searcher_Input" onChange={handleClick}></input>
    </div>
  );
}

export default SearchInput;
