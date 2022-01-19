import React from "react";
import WeekBar from "./WeekBar/index";
import LinksList from "./LinksList/index";
import "./styles.css";

export function SearchResults() {
  return (
    <div className="SearchResults_Container">
      <div className="Search_FoundText_Container">
        <h3 id="Search_Found_Text">Here's what we found:</h3>
      </div>
      <WeekBar />
      <LinksList />
    </div>
  );
}

export default SearchResults;
