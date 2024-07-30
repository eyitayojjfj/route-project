import { useState, useEffect } from "react";
import ProductCard from './ProductCard'
import { useNavigate } from "react-router-dom";

const Product = () => {
    const styles ={
        grid: {
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gap: "1rem"
        }
    }
    const [products, setProducts] = useState([])

    const fetchProducts = async () => {
        try {
          const response = await fetch("https://dummyjson.com/products");
          const products = await response.json();
          setProducts(products.products);
        } catch (error) {
          console.error(error);
        }
      }; 
    
      useEffect(() => {
        fetchProducts();
      }, []);
   
    const navigate = useNavigate();

    // handle open product details
    const openProductDetails = (id) => { 
      console.log("Product ID: ", id);
      // navigate to product details page
      navigate(`/product/${id}`);
    };
  
  return (
    <div className='container mt-4'>
         <h1>Welcome To Product Page</h1>
         <div style={styles.grid}>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} func={() => openProductDetails(product.id)} />
            )
            )}
         </div>
    </div>
  )
}

export default Product