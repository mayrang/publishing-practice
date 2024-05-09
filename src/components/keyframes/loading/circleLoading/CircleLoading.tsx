import cx from "./cx";

export default function CircleLoading() {
  return (
    <div className={cx("container")}>
      <div className={cx("loading")}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
