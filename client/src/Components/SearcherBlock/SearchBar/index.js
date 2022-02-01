import React, {useState} from 'react';
import SearchInput from './SearchInput/index';
import SearchByWeek from './SearchByWeek';
import AddButton from './AddButton/index';
import './styles.css';


export function SearchBar({ setInput, input, setSearch, setAdd, setWeek }) {
const [weeksBtn, setWeeksBtn] = useState(false)
  function handleClick(){
setWeeksBtn(!weeksBtn)
  }
  return (
    <div>
      <div className="SearchInput_Container">
        <SearchInput setInput={setInput} input={input} setSearch={setSearch} />
        <button className='Weeks_Button' onClick={handleClick}>Week</button>
        <AddButton setAdd={setAdd} /> 
      </div>
      {weeksBtn && <SearchByWeek setWeek={setWeek} />}
    </div>
  );
}

export default SearchBar;
