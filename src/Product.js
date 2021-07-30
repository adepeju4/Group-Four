import { useParams } from "react-router";
import useAxios from "./Hooks/useAxios";

const Product = () => {
  const { id } = useParams();
  const { data: dish, isPending } = useAxios(
    `http://localhost:8000/dishes${id}`
  );
  return (
    <>
      {isPending && <center>Loading</center>}
          {dish && (
              <>
              <h1>{dish.name}</h1>
                  <div>{dish.image}</div>
            </>
          )}
    </>
  );
};

export default Product;
