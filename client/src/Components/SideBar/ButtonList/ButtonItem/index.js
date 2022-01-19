import React from "react";
import "./style.css"

export function ButtomItem() {
    return (
      <div className = "ButtonContainer">
        <button class="button" id="slack" ><img src="https://netstorage.ringcentral.com/dpw/apps/53N5jaZ0Q0a9Nv93-HrvLQ/6d811d6c-a338-4696-902c-fa6007971d25-1210.png" class= "buttonimg"  alt = "buttonicon"/></button>
        <button class="button" id="zoom" ><img src="https://www.freepnglogos.com/uploads/zoom-logo-png/zoom-png-logo-download-transparent-20.png" class= "buttonimg" alt = "buttonicon"/></button>
        <button class="button" id="SoC" ><img src="https://d33wubrfki0l68.cloudfront.net/e6fddcbea146f91d2f3c160f7d56a9391a4740b0/4e758/static/logo-51c754388b198e5bbb0d08a971ebbfa2.png" class= "buttonimg" alt = "buttonicon"/></button>
        <button class="button" id="Mozilla" ><img src="https://wearesnook.com/wp-content/uploads/2018/03/mozilla-1-300x164.png" class= "buttonimg" alt = "buttonicon"/></button>
        <button class="button" id="Vimeo" ><img src="https://logos-world.net/wp-content/uploads/2021/02/Vimeo-Emblem.png" class= "buttonimg" alt = "buttonicon"/></button>
        <button class="button" id="W3schools" ><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/W3Schools_logo.svg/1200px-W3Schools_logo.svg.png" class= "buttonimg" alt = "buttonicon"/></button>
      </div>
    );
  }
  
  export default ButtomItem;