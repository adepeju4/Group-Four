/* eslint-disable react/prop-types */

import styles from "../stylesheets/product.module.css";
import { AiFillStar } from "react-icons/ai";
const ReviewsList = ({ reviews }) => {
  const rating = [1, 2, 3, 4, 5];
  return (
    <>
      <div className={styles.reviewContainer}>
        {reviews.length &&
          reviews.map((review, i) => {
            return (
              <div className={styles.review} key={`review${i}`}>
                <div className={styles.user}>
                  <div></div>
                  {review.author}
                </div>
                <div className={styles.rating}>
                  {rating.map((rate, i) => {
                    if (i < review.rating) {
                      return (
                        <AiFillStar
                          className={styles.ratingIcon}
                          key={`rate${i}`}
                        />
                      );
                    }
                  })}
                </div>
                <div className={styles.reviewTitle}>{review.title}</div>
                <div className={styles.reviewComment}>{review.comment}</div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default ReviewsList;
