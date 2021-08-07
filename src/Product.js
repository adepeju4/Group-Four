import MealScreen from "./MealScreen";
import { useDispatch, useSelector } from "react-redux";
import { getProductAsync } from "./redux/action/productsAction";
import { useEffect } from "react";
import { useParams } from "react-router";
import styles from "./stylesheets/product.module.css";
import { Spinner } from "react-bootstrap";


const Product = () => {



  const dispatch = useDispatch();
   const { id } = useParams();
   
  const { data: dish, reviews, pending: isPending } = useSelector(
    (state) => state.product
  );


  
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
            <MealScreen dish={dish} dishId={id} reviews={reviews} />
          </>
        )}
      </div>
    </>
  );
};

export default Product;
