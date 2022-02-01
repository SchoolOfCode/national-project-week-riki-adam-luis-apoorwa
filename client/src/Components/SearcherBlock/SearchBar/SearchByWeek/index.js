import React from 'react'
import './styles.css';

const SearchByWeek = ({setWeek}) => {
    function handleClick(e){
      setWeek(e.target.value)
      console.log(e.target.value)  
    }

    return (
        <div className='Weeks_Buttons'>
            <button value={1} onClick={handleClick}>1</button>
            <button value={2} onClick={handleClick}>2</button>
            <button value={3} onClick={handleClick}>3</button>
            <button value={4} onClick={handleClick}>4</button>
            <button value={5} onClick={handleClick}>5</button>
            <button value={6} onClick={handleClick}>6</button>
            <button value={7} onClick={handleClick}>7</button>
            <button value={8} onClick={handleClick}>8</button>
            <button value={9} onClick={handleClick}>9</button>
            <button value={10} onClick={handleClick}>10</button>
            <button value={11} onClick={handleClick}>11</button>
            <button value={12} onClick={handleClick}>12</button>
            <button value={13} onClick={handleClick}>13</button>
            <button value={14} onClick={handleClick}>14</button>
            <button value={15} onClick={handleClick}>15</button>
            <button value={16} onClick={handleClick}>16</button>
        </div>
    )
}

export default SearchByWeek