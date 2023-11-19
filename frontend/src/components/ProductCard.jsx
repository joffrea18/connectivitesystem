import PropTypes from 'prop-types'
import './ProductCard.css'

function ProductCard({ product }) {
  return (
      <div className="product-card">
        <img src={product.image} />
      <span>
        {product.title}
      </span>
    </div>
  )
}

ProductCard.propTypes = {
  product: PropTypes.object
}

export default ProductCard
