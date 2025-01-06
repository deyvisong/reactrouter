import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";

const Product = () => {
  // 4 - dynamic router

  const { id } = useParams();

  // 5 - loading individual data
  const url = "http://localhost:3000/products/" + id;
  const { data: product, loading, error } = useFetch(url);
  console.log(product);
  return (
    <>
      <p>Product ID: {id}</p>
      {error && <p>An error occurred...</p>}
      {loading && <p>Loading...</p>}
      {product && (
        <div>
          <h1>{product.name}</h1>
          <p>$: {product.price}</p>
          <Link to={`/products/${product.id}/info`}>More info</Link>
        </div>
      )}
    </>
  );
};

export default Product;
