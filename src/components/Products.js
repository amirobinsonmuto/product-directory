import React from "react";
import Product from "./Product";

const Products = ({ products, onSubmit, search, filter }) => {
  const filterProducts = () => {
    if (filter === "productName") {
      return products.filter((product) => {
        return search === ""
          ? product
          : product.productName.toLowerCase().includes(search);
      });
    } else if (filter === "scrumMasterName") {
      return products.filter((product) => {
        return search === ""
          ? product
          : product.scrumMasterName.toLowerCase().includes(search);
      });
    } else if (filter === "developers") {
      return products.filter((product) => {
        return search === ""
          ? product
          : product.developers
              .map((developer) => developer.toLowerCase())
              .some((developer) => developer.includes(search));
      });
    }
  };

  return (
    <>
      <h3>
        {search === "" ? "Total Products: " : "Filtered Products: "}
        {filterProducts().length}
      </h3>
      <table className="table">
        <thead>
          <tr>
            <th>Product ID</th>
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
          {filterProducts().map((product, index) => (
            <Product key={index} product={product} onSubmit={onSubmit} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Products;
