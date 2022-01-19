import React from "react";
import "./styles.css";

export function LinksListItem({ topic, link }) {
  return (
    <li className="LinksListItem">
      {topic}
      <a href={link}>Link</a>
    </li>
  );
}

export default LinksListItem;
