import { useParams } from "react-router";
import Footer from "./Components/Footer";

import { AiOutlineStar, AiOutlineHeart } from "react-icons/ai";
import TopBar from "./Components/Navbar/TopBar";
import useAxios from "./Hooks/useAxios";

import styles from "./stylesheets/product.module.css"

const Product = () => {
  const rating = [1, 2, 3, 4, 5];
  const { id } = useParams();
  const { data: dish, isPending } = useAxios(
    `http://localhost:8000/dishes/${id}`
  );
  console.log(dish);
  return (
    <>
      <div className={styles.productBody}>
        <TopBar />
        {isPending && <center>Loading</center>}
        {dish && (
          <>
            <div className={styles.productPreview}>
              <div className={styles.productInfo}>
                <h1>{dish.name}</h1>
                <h3>Extra Large</h3>
                <h3>N{dish.price}</h3>
                <div className={styles.rating}>
                  {
                    rating.map((rate, i) => {
                      return (
                        
                        <AiOutlineStar className={styles.ratingIcon} key={`rate${i}`}/>
                      )
                    })
                  }
                </div>
                <p>{dish.description}</p>
                <button className={styles.cta}>Add To Cart</button>
              </div>
              <div className={styles.productMedia}>
                <div className={styles.productImage}>
                  <img src={dish.image} />
                </div>
                <AiOutlineHeart className={styles.likeButton} />
                <div className={styles.shareProduct}>
                  <h3>SHARE</h3>
                  
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Product;
