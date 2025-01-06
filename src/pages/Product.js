import { useParams } from "react-router-dom";

const Product = () => {
  // 4 - dynamic router

  const { id } = useParams();
  return (
    <>
      <p>Product ID: {id}</p>
    </>
  );
};

export default Product;
