import React from "react";
import LinksListItem from "./LinksListItem/index";
import "./styles.css";

export function LinksList({ links }) {
  return (
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
  );
}

export default LinksList;
