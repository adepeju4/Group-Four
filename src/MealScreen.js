/* eslint-disable react/prop-types */

import styles from "./stylesheets/product.module.css";
import iconStyles from "./stylesheets/icons.module.css";
import { Heart } from "./Components/Icons";
import { FaStar } from "react-icons/fa";
// import { AiFillStar } from "react-icons/ai";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import ReviewForm from "./Components/ReviewForm";
import ReviewsList from "./Components/ReviewsList";
import { useState} from "react";
import HelmetMetaData from "./Components/HelmetMetaData";

const MealScreen = ({dish, reviews, dishId}) => {
  const [active, setActive] = useState(false);
  const { name, price, description, image, label } = dish;
  
  let sum  = 0 
  const reviewsRating = reviews?.length && reviews.reduce((acc, value) => acc + value.rating, sum);
  const avgRating = Math.round(reviewsRating ? reviewsRating/reviews.length : 0)

  console.log(dish, "mealscreen")
  return (
    <>
      <section className={styles.productPreview}>
        <HelmetMetaData dish={dish}></HelmetMetaData>
        <div className={styles.productInfo}>
          <h1>{name}</h1>
          <h3>{label}</h3>
          <h3>
            {"\u20A6"}
            {price}
          </h3>
          <div className={styles.rating}>
            {[...Array(5)].map((rate, i) => {
              const ratingNumber = i + 1;
              return (
                <FaStar
                  key={`rate${i}`}
                  size={20}
                  className={styles.star}
                  color={ratingNumber <= avgRating ? "#000" : "#e4e5e9"}
                />
              );
            })}
          </div>
          <p>{description}</p>
          <button className={styles.cta}>Add To Cart</button>
        </div>
        <div className={styles.productMedia}>
          <div className={styles.productImage}>
            <img src={image} />
          </div>

          <div
            className={active && iconStyles.active}
            onClick={() => setActive(!active)}
            style={{ display: "flex", alignSelf: "flex-end" }}
          >
            <Heart />
          </div>

          <div className={styles.shareProduct}>
            <h3>SHARE</h3>
            <div className={styles.socials}>
              <FacebookShareButton
                url="https://nifty-lumiere-b22b44.netlify.app/"
                quote={
                  "Foodine lets you experience the amazing meal choices. We discover the hidden gems in the nearby to help you connect with various cultures and meal diversities" +
                  "Trust us, Our services are reliable and delivery is free for the first ten orders!" +
                  "So, join us and get food delivered to you as soon as possible"
                }
                hashtag="#Stutern"
              >
                <img src="/assets/shareFacebook.png" />
              </FacebookShareButton>
              <TwitterShareButton
                url="https://nifty-lumiere-b22b44.netlify.app/"
                uote={
                  "Foodine lets you experience the amazing meal choices. We discover the hidden gems in the nearby to help you connect with various cultures and meal diversities" +
                  "Trust us, Our services are reliable and delivery is free for the first ten orders!" +
                  "So, join us and get food delivered to you as soon as possible"
                }
                
                hashtag="#Stutern"
              >
                <img src="/assets/shareTwitter.png" />
              </TwitterShareButton>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.productReviews}>
        <h2 className={styles.reviewHeading}>Meal Reviews</h2>

        <ReviewsList reviews={reviews} />
      </section>
      <section className={styles.reviewFormContainer}>
        <ReviewForm dishId={dishId} />
      </section>
    </>
  );
};

export default MealScreen;
