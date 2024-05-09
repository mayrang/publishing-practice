import CircleLoading from "./circleLoading/CircleLoading";
import cx from "./cx";
import SquareLoading from "./squareLoading/SquareLoading";

export default function Loading() {
  return (
    <div className={cx("container")}>
      <h1>로딩 애니메이션</h1>
      <CircleLoading />
      <SquareLoading />
    </div>
  );
}
