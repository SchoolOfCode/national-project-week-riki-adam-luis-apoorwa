import React from "react";
import SearchBar from "./SearchBar/index"
import SearchResults from "./SearchResults/index"

export function SearcherBlock() {
    return (
    <div className="SearchBlock_Container"> 
    <SearchBar />
    <SearchResults />
    </div>
    )}

export default SearcherBlock;