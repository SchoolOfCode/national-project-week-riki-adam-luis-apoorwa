import React from 'react';
import './styles.css';

export function LinksListItem({ topic, link }) {
  return (
    <li className="LinksListItem">
      {topic}
      <span>
        <a href={link}>Link</a>
      </span>
    </li>
  );
}

export default LinksListItem;
