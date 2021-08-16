/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useState } from "react";
import { useTransition, animated } from "react-spring";
import styles from "../stylesheets/landing.module.css"


function Mount() {
  const [show, set] = useState(false);
  const transitions = useTransition(show, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    reverse: show,
    delay: 200,
    
    onRest: () => set(!show),
  });
  return transitions(
    (styles, item) =>
      item && (
        <animated.div style={styles}>
          <img src="assets/food.png" className={styles.foodImg} />
        </animated.div>
      )
  );
}

export default Mount;