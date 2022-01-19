import React from "react";
import SearchInput from "./SearchInput/index"
import AddButton from "./AddButton/index"
import "./styles.css"

export function SearchBar({setInput, input}) {


    return (
    <div className="SearchInput_Container"> 
    <SearchInput setInput={setInput} input={input}/>
    <AddButton />
    </div>
    )}

    export default SearchBar

