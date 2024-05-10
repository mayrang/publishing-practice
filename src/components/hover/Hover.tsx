import React from "react";
import Dropdown from "./dropdown/Dropdown";
import Overlay from "./overlay/Overlay";

export default function Hover() {
  return (
    <div style={{ padding: 36 }}>
      <Dropdown />
      <Overlay />
    </div>
  );
}
