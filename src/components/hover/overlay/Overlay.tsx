import React from "react";
import cx from "./cx";
import Image from "next/image";

export default function Overlay() {
  return (
    <div style={{ padding: 50 }}>
      <h1>오버레이 </h1>

      <div className={cx("container")}>
        <Image alt="sushi" width={300} height={300} src={"/sushi.jpg"} />
        <div>
          <h3>맛잇는 초밥</h3>
          <p>무슨 초밥인지는 모르겠네. 소고기 초밥인가? 나도 여행가고 싶다</p>
          <a href="#">More</a>
        </div>
      </div>
    </div>
  );
}
