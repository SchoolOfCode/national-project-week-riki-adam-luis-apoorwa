import React from "react";
import SearchInput from "./SearchInput/index"
import AddButton from "./AddButton/index"
import "./styles.css"

export function SearchBar() {
    return (
    <div className="SearchInput_Container"> 
    <SearchInput />
    <AddButton />
    </div>
    )}

    export default SearchBar
