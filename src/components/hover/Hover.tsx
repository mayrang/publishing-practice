import React from "react";
import Dropdown from "./dropdown/Dropdown";
import Overlay from "./overlay/Overlay";
import Tooltip from "./tooltip/Tooltip";

export default function Hover() {
  return (
    <div style={{ padding: 36 }}>
      <Dropdown />
      <Overlay />
      <Tooltip />
    </div>
  );
}
