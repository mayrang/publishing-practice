import React from "react";
import Dropdown from "./dropdown/Dropdown";
import Overlay from "./overlay/Overlay";
import Tooltip from "./tooltip/Tooltip";
import HoverGnb from "./hovergnb/HoverGnb";
import FrontBack from "./frontback/FrontBack";

export default function Hover() {
  return (
    <div style={{ padding: 36 }}>
      <Dropdown />
      <Overlay />
      <Tooltip />
      <HoverGnb />
      <FrontBack />
    </div>
  );
}
