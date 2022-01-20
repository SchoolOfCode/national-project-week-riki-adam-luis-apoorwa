import React from 'react';
import './styles.css';

const CurrentDate = () => {
  const date = new Date();
  const day = date.getDate();
  const year = date.getFullYear();
  const month = date.toLocaleString('default', { month: 'long' });
  let ordinal = '';

  if (day === 1 || day === 21 || day === 31) {
    ordinal = 'st';
  } else if (day === 2 || day === 22) {
    ordinal = 'nd';
  } else if (day === 3) {
    ordinal = 'rd';
  } else {
    ordinal = 'th';
  }

  const currentDate = `${day}${ordinal} ${month} ${year}`;

  return (
    <div className="Current_Date_Container">
      <div className="Current_Date">{currentDate}</div>
      <div>
        <em className="Current_Week">Week 9</em>
      </div>
    </div>
  );
};

export default CurrentDate;
