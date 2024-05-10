import React from "react";
import cx from "./cx";

export default function Dropdown() {
  return (
    <div>
      <h1>드롭다운 메뉴</h1>

      <div className={cx("dropdown")}>
        <button className={cx("dropdown-button")}>Real Estate Type</button>
        <div className={cx("dropdown-submenu")}>
          <a href="#">All</a>
          <a href="#">One Room</a>
          <a href="#">1.5 Room</a>
          <a href="#">Two Room</a>
          <a href="#">Three Room</a>
        </div>
      </div>
    </div>
  );
}
