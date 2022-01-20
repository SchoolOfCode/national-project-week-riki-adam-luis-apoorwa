import React from "react";
import "./styles.css";

export function SearchInput({ setInput, input, setSearch }) {
  //state for input

  function handleChange(e) {
    const inputText = e.target.value;
    setInput(inputText);
  }

  function handleClick() {
    setSearch(input);
  }

  return (
    <div>
      <input type="text" id="Searcher_Input" onChange={handleChange}></input>
      <button onClick={handleClick} id="Search_Text_Span">
        Search
      </button>
    </div>
  );
}

export default SearchInput;
