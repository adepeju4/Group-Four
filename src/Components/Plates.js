import styles from "../stylesheets/plates.module.css";

export const LeftPlate = (props) => {
  return (
    <img
      src="/assets/restaurant.png"
      // eslint-disable-next-line react/prop-types
      className={[styles.plateImageLeft, props.className].join(" ")}
    />
  );
};

export const RightPlate = (props) => {
  return (
    <img
      src="/assets/restaurant.png"
      // eslint-disable-next-line react/prop-types
      className={[styles.plateImageRight, props.className].join(" ")}
    />
  );
};
