import React from "react";
import "./style.css";

export function ButtomItem() {
  return (
    <div className="ButtonContainer">
      <a href="https://soc-national-bootcamp.slack.com/">
        <button class="button" id="slack">
          <img
            src="https://netstorage.ringcentral.com/dpw/apps/53N5jaZ0Q0a9Nv93-HrvLQ/6d811d6c-a338-4696-902c-fa6007971d25-1210.png"
            class="buttonimg"
            alt="buttonicon"
          />
        </button>
      </a>
      <a href="https://schoolofcode.zoom.us/j/85444009034#success">
        <button class="button" id="zoom">
          <img
            src="https://www.freepnglogos.com/uploads/zoom-logo-png/zoom-png-logo-download-transparent-20.png"
            class="buttonimg"
            alt="buttonicon"
          />
        </button>
      </a>
      <a href="https://schoolofcode.notion.site/Bootcamp-9-Homepage-e42d291fc9ed4fd59af3cef2d73e7b96">
        <button class="button" id="SoC">
          <img
            src="https://d33wubrfki0l68.cloudfront.net/e6fddcbea146f91d2f3c160f7d56a9391a4740b0/4e758/static/logo-51c754388b198e5bbb0d08a971ebbfa2.png"
            class="buttonimg"
            alt="buttonicon"
          />
        </button>
      </a>
      <a href="https://mdn.dev/">
        <button class="button" id="Mozilla">
          <img
            src="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_8f795660c91fee0289054335d544b27a/mdn-web-docs.jpg"
            class="buttonimg"
            alt="buttonicon"
          />
        </button>
      </a>
      <a href="https://vimeo.com/showcase/soc-national">
        <button class="button" id="Vimeo">
          <img
            src="https://www.pngrepo.com/png/156620/512/vimeo.png"
            class="buttonimg"
            alt="buttonicon"
          />
        </button>
      </a>
      <a href="https://www.w3schools.com/">
        <button class="button" id="W3schools">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/W3Schools_logo.svg/1200px-W3Schools_logo.svg.png"
            class="buttonimg"
            alt="buttonicon"
          />
        </button>
      </a>
    </div>
  );
}

export default ButtomItem;
