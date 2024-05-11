import cx from "./cx";

export default function HoverGnb() {
  return (
    <div style={{ marginTop: 100, marginBottom: 100 }}>
      <div className={cx("container")}>
        <div className={cx("gnb")}>
          <a href="#">New Arrivals</a>
          <a href="#">Summer Collection</a>
          <a href="#">Winter Collection</a>
          <a href="#">Special Offers</a>
          <a href="#">Trends</a>
        </div>
      </div>
    </div>
  );
}
