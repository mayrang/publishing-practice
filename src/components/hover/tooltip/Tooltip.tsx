import Image from "next/image";
import cx from "./cx";

export default function Tooltip() {
  return (
    <div style={{ padding: 50 }}>
      <h1>오버레이 </h1>

      <div className={cx("container")}>
        <div className={cx("icon")}>
          <Image src={"/sushi.jpg"} width={150} height={150} alt="스시 사진" />
          <span>
            이 사진은 삿포로 어느 식당에서 찍은 소고기 초밥 사진입니다. 맛있어
            보이네요.
          </span>
        </div>
      </div>
    </div>
  );
}
