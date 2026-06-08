import React from 'react';
import '../styles/ProductCard.module.css';

const ProductCard = ({ product, removeProduct }) => {
  return (
    <div
      className={
        product.inStock
          ? 'inStockClass'
          : 'outOfStockClass'
      }
    >
      <h2>{product.name}</h2>

      <p>{product.price}</p>

      <p>
        {product.inStock
          ? 'In Stock'
          : 'Out of Stock'}
      </p>

      <button onClick={() => removeProduct(product.id)}>
        Remove
      </button>
    </div>
  );
};

export default ProductCard;