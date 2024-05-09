import cx from "./cx";

export default function DoubleBorderRadius() {
  return (
    <section className={cx("section")}>
      <h1>Double Border Radius Animation</h1>
      <div className={cx("container")}>
        <div className={cx("square")}>
          <span></span>
          <span></span>
          <span></span>
          <div className={cx("content")}>
            <h2>Heading Text</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
        <div className={cx("square2")}>
          <span></span>
          <span></span>
          <span></span>
          <div className={cx("content")}>
            <h2>Heading Text</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
