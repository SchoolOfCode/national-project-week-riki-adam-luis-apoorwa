import React from "react";
import LinksListItem from "./LinksListItem/index";
import "./styles.css";

export function LinksList() {
  return (
    <div className="LinksList_Container">
      <div className="Links_Back_Button_Container">
        <button id="Back_Button">Back</button>
      </div>
      <div className="LinksListItem_Container">
        <LinksListItem />
      </div>
    </div>
  );
}

export default LinksList;
