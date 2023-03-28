import React from "react";
import Product from "./Product";

const Products = ({ products, getProductToEdit, onSubmit }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>ProductId</th>
          <th>Product Name</th>
          <th>Product Owner</th>
          <th>Developers</th>
          <th>Scrum Master</th>
          <th>Start Date</th>
          <th>methodology</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <Product
            key={product.productId}
            product={product}
            getProductToEdit={getProductToEdit}
            onSubmit={onSubmit}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Products;
