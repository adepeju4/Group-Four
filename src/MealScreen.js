/* eslint-disable react/prop-types */


import styles from "./stylesheets/product.module.css";
import iconStyles from "./stylesheets/icons.module.css";
import { Heart } from "./Components/Icons";
import { AiOutlineStar } from "react-icons/ai";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import ReviewForm from "./Components/ReviewForm";
import ReviewsList from "./Components/ReviewsList";
import { useState} from "react";

const MealScreen = ({dish, reviews, dishId}) => {
  const rating = [1, 2, 3, 4, 5];
  const [active, setActive] = useState(false);
  const { name, price, description, image } = dish;
  
 
  return (
    <>
      <section className={styles.productPreview}>
        <div className={styles.productInfo}>
          <h1>{name}</h1>
          <h3>Extra Large</h3>
          <h3>N{price}</h3>
          <div className={styles.rating}>
            {rating.map((rate, i) => {
              return (
                <AiOutlineStar className={styles.ratingIcon} key={`rate${i}`} />
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
              {/* <img src="/assets/shareFacebook.png" role="button" url="https://instagram.com" quote={"Dishes on foodine"} hashtag="#Stutern"/> */}
              <FacebookShareButton
                url="https://facebook.com"
                quote={"Dishes on foodine"}
                hashtag="#Stutern"
              >
                <img src="/assets/shareFacebook.png" />
              </FacebookShareButton>
              <TwitterShareButton
                url="https://twitter.com"
                quote={"Dishes on foodine"}
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

        <ReviewsList reviews={ reviews}/>
      </section>
      <section className={styles.reviewFormContainer}>
        <ReviewForm dishId={dishId}/>
      </section>
    </>
  );
};

export default MealScreen;
