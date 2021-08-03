import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import { getProduct } from "./redux/action/productsAction";
import Footer from "./Components/Footer";
import { Link } from 'react-router-dom';

import { AiOutlineStar } from "react-icons/ai";
import TopBar from "./Components/Navbar/TopBar";


import styles from "./stylesheets/product.module.css"
import iconStyles from './stylesheets/icons.module.css'

import { useEffect, useState } from "react";
import { Heart } from "./Components/Icons";


const Product = () => {
  const rating = [1, 2, 3, 4, 5];
  
  const [active, setActive] = useState(false)
  const dispatch = useDispatch();
  const { id } = useParams();
  const { data: dish, pending: isPending } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(getProduct({ id }));
  }, [id])
  
  return (
    <>
      <div className={styles.productBody}>
        <TopBar />
        {isPending && <center>Loading</center>}
        {dish && (
          <>
            <section className={styles.productPreview}>
              <div className={styles.productInfo}>
                <h1>{dish.name}</h1>
                <h3>Extra Large</h3>
                <h3>N{dish.price}</h3>
                <div className={styles.rating}>
                  {rating.map((rate, i) => {
                    return (
                      <AiOutlineStar
                        className={styles.ratingIcon}
                        key={`rate${i}`}
                      />
                    );
                  })}
                </div>
                <p>{dish.description}</p>
                <Link to="/cart">
                <button className={styles.cta}>Add To Cart</button>
                </Link>
              </div>
              <div className={styles.productMedia}>
                <div className={styles.productImage}>
                  <img src={dish.image} />
                </div>
           
                <div
                  className={active && iconStyles.active}
                  onClick={() => setActive(!active)}
                  style={{display:"flex", alignSelf:"flex-end"}}
                >
                  <Heart />
                 
                </div>

                <div className={styles.shareProduct}>
                  <h3>SHARE</h3>
                  <div className={styles.socials}>
                    <img src="/assets/shareFacebook.png"/>
                  <img src="/assets/shareTwitter.png"/>
                  </div>
                  
                </div>
              </div>
            </section>
            <section className={styles.productReviews}>
              <h2 className={styles.reviewHeading}>
                Meal Reviews
              </h2>
              <div className={styles.reviewContainer}>
                
              </div>
            </section>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Product;
