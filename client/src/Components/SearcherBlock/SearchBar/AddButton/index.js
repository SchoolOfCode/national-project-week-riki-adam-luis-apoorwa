import React from "react";
import "./styles.css";

export function AddButton({setAdd}) {
  return <div>{ <button id="Add_Button" onClick={setAdd}>Add</button> }</div>;
}

export default AddButton;
