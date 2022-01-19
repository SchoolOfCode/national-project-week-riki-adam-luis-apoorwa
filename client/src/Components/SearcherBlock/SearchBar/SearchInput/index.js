import React from "react";
import "./styles.css";
import { useState } from "react";

export function SearchInput({ setInput, input, setSearch }) {
  //state for input

  function handleChange(e) {
    const inputText = e.target.value;
    console.log(inputText);
    setInput(inputText);
  }

  function handleClick() {
    setSearch(input);

    console.log(input);
  }

  return (
    <div>
      <button onClick={handleClick} id="Search_Text_Span">
        Search
      </button>
      <input type="text" id="Searcher_Input" onChange={handleChange}></input>
    </div>
  );
}

export default SearchInput;
