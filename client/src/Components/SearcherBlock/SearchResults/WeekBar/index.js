import React from 'react';
import './styles.css';

export function WeekBar({ links }) {
  return links.length ? (
    <div className="WeekBar_Container">
      <h2 className="WeekBar_Number">WEEK {links[0].weeknumber}</h2>
      <h2 className="WeekBar_Title">- {links[0].subject}</h2>
    </div>
  ) : ( 
    <div className="WeekBar_Container">
      <h2 className="WeekBar_Number">You haven't search anything </h2>
      <h2 className="WeekBar_Title"></h2>
    </div>
  );
}

export default WeekBar;
