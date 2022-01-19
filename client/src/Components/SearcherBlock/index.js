import React from "react";
import SearchBar from "./SearchBar/index";
import SearchResults from "./SearchResults/index";
import "./styles.css";
import { useEffect, useState } from "react";

export function SearcherBlock() {
  const [links, setLinks] = useState([]);
  //state for the input
  const [input, setInput] = useState("");
  //
  const [search, setSearch] = useState(null);
  console.log(search);
  useEffect(() => {
    // https://soc-oneplace.herokuapp.com/weeks?subject=${javascript}
    async function fetchData() {
      let response = await fetch(
        `https://soc-oneplace.herokuapp.com/weeks?subject=${search}`
      );
      const data = await response.json();
      setLinks(data.payload);
    }
    fetchData();
    //console.log(links.payload);
  }, [search]);
  console.log(links);
  return (
    <div className="SearchBlock_Container">
      <SearchBar setInput={setInput} input={input} setSearch={setSearch} />
      <SearchResults links={links} />
    </div>
  );
}

export default SearcherBlock;
