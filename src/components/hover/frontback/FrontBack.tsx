import cx from "./cx";

export default function FrontBack() {
  return (
    <div style={{ marginTop: 50 }}>
      <h2>FrontBack</h2>
      <div className={cx("container")}>
        <div className={cx("item")}>
          <div className={cx("front")}>
            <img src={"/sushi.jpg"} />
            <h3>초밥</h3>
          </div>
          <div className={cx("back")}>
            <p>
              안녕하세요. 감사해요. 잘있어요. 다시만나요.안녕하세요. 감사해요.
              잘있어요. 다시만나요.{" "}
            </p>
            <button>Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
}
