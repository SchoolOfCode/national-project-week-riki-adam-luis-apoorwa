import React from 'react';
import WeekBar from './WeekBar/index';
import LinksList from './LinksList/index';
import './styles.css';

export function SearchResults({ links }) {
  return (
    <div className="SearchResults_Container">
      <div className="Search_FoundText_Container">
        <h3 id="Search_Found_Text">Here's what we found:</h3>
      </div>
      <WeekBar links={links} />
      <LinksList links={links} />
    </div>
  );
}

export default SearchResults;
