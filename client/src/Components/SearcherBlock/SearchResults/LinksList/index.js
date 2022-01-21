import React from "react";
import LinksListItem from "./LinksListItem/index";
import "./styles.css";

export function LinksList({ links }) {
  return links.length ? (
    <div className="LinksList_Container">
      <div className="Links_Back_Button_Container">
        {/* <button id="Back_Button">Back</button> */}
      </div>
      <div className="LinksListItem_Container">
        {links.map((item) => {
          return (
            <LinksListItem key={item.id} topic={item.topic} link={item.link} />
          );
        })}
        {/* <LinksListItem />
        <LinksListItem />
        <LinksListItem />
        <LinksListItem />
        <LinksListItem />
        <LinksListItem /> */}
      </div>
    </div>
  ) : (
    <div className="LinksList_Container">
      <div className="Links_Back_Button_Container">
        {/* <button id="Back_Button">Back</button> */}
      </div>
      <div className="LinksListItem_Container">
        <h2 className="LinksListItem">Searcher Functionality:</h2>
        <li className="LinksListItem">
          Try searching by Week Title (i.e. "HTML" or "CSS")!
        </li>
        <li className="LinksListItem">
          Or by Topic (i.e. "Arrow Functions" or "Array Destructuring")!
        </li>
      </div>
    </div>
  );
}

export default LinksList;
