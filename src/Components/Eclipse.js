import styles from "../stylesheets/eclipse.module.css";

const Circle = (props) => {
  return (
    <svg
      // eslint-disable-next-line react/prop-types
      className={[styles.circle, props.className].join(" ")}
      viewBox="0 0 988 727"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="426" cy="165" r="562" fill="#171616" />
    </svg>
  );
};

export default Circle;
