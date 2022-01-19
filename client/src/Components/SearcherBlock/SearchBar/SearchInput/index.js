import React from "react";
import "./styles.css";

export function SearchInput() {
  return (
    <div>
      <button id="Search_Text_Span">Search</button>
      <input
        type="text"
        value="Search by keywords (e.g. express)"
        id="Searcher_Input"
      ></input>
    </div>
  );
}

export default SearchInput;
