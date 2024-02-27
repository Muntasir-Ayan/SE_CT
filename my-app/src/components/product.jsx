import React from 'react';

const Product = ({ product }) => {
  return (
    <div className="product">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <button>{product.button}</button>
    </div>
  );
};

export default Product;
