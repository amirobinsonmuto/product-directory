import React from "react";
import Product from "./Product";

const Products = ({ products }) => {
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
          <Product key={product.productId} product={product} />
        ))}
      </tbody>
    </table>
  );
};

export default Products;
