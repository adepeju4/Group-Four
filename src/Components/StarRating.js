/* eslint-disable react/prop-types */

// import { AiFillStar } from "react-icons/ai";
import styles from "../stylesheets/StarRating.module.css";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ handleRate }) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  return (
    <>
      <div>
        {[...Array(5)].map((star, i) => {
          const ratingNumber = i + 1;
          return (
            <label key={`star${i}`}>
              <input
                type="radio"
                name="rating"
                value={ratingNumber}
                onClick={() => {
                  setRating(ratingNumber);
                  handleRate(ratingNumber);
                }}
                className={styles.ratingRadio}
              />
              <FaStar
                onMouseEnter={() => {
                  setHover(ratingNumber);
                }}
                onMouseLeave={() => {
                  setHover(null);
                }}
                size={20}
                className={styles.star}
                color={ratingNumber <= (hover || rating) ? "#000" : "#e4e5e9"}
              />
            </label>
          );
        })}
      </div>
    </>
  );
};

export default StarRating;
