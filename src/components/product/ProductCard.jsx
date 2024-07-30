import PropTypes from "prop-types"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const ProductCard = ({product, func}) => {
    
  return (
    <div>
         <Card style={{ width: '18rem' }} onClick={func}>
      <Card.Img variant="top"  src={product.thumbnail || "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/thumbnail.png"}/>
      <Card.Body>
        <Card.Title>{product.title} </Card.Title>
        <Card.Title>Price: ${product.price}</Card.Title>
        <Card.Title>Rating: {product.rating}</Card.Title>
        <Card.Text>
         {product.description.slice(0,50)}...
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

ProductCard.propTypes = {
  func: PropTypes.any,
  product: PropTypes.shape({
    description: PropTypes.shape({
      slice: PropTypes.func
    }),
    price: PropTypes.any,
    rating: PropTypes.any,
    thumbnail: PropTypes.string,
    title: PropTypes.any
  })
}


export default ProductCard