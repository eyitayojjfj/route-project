import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const fetchProducts = async () => {
      try{
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const product = await response.json();
        setProduct (product);
      } catch (error) {
        console.error(error);
      }
    };

    useEffect(() => {
      fetchProducts();
    }, [id]);
    console.log("Product: ", product);
  return (
    <div className='container mt-4'>
          <img src={product.thumbnail} alt="" />
          <h1>{product.title}</h1>
          <h2>Price: {}</h2>
    </div>
  );
};

export default ProductDetails