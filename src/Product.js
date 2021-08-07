import MealScreen from "./MealScreen";
import { useDispatch, useSelector } from "react-redux";
import { getProductAsync } from "./redux/action/productsAction";
import { useEffect } from "react";
import { useParams } from "react-router";
import styles from "./stylesheets/product.module.css";
import { Spinner } from "react-bootstrap";

<<<<<<< HEAD
import { getProduct } from "./redux/action/productsAction";
import Footer from "./Components/Footer";
import { Link } from 'react-router-dom';
=======
>>>>>>> 898be4c637e9ae3396844b33a3aae93d686882a3

const Product = () => {



  const dispatch = useDispatch();
   const { id } = useParams();
   
  const { data: dish, reviews, pending: isPending } = useSelector(
    (state) => state.product
  );


<<<<<<< HEAD
const Product = () => {
  const rating = [1, 2, 3, 4, 5];
  const [active, setActive] = useState(false)
  const dispatch = useDispatch();
  const { id } = useParams();
  const { data: dish, pending: isPending } = useSelector((state) => state.product);
=======
  
>>>>>>> 898be4c637e9ae3396844b33a3aae93d686882a3
  useEffect(() => {
    dispatch(getProductAsync(id));
  }, [id]);
 
  

  return (
    <>
      <div className={styles.productBody}>
        {isPending && (
          <>
            <div className={styles.pending}>
              <Spinner animation="grow" />
              Loading
            </div>
          </>
        )}
        {dish && (
          <>
<<<<<<< HEAD
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
=======
            <MealScreen dish={dish} dishId={id} reviews={reviews} />
>>>>>>> 898be4c637e9ae3396844b33a3aae93d686882a3
          </>
        )}
      </div>
    </>
  );
};

export default Product;
