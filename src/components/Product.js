import React from "react";

const Product = ({ product }) => {
  return (
    <tr key={product.productId}>
      <td>{product.productId}</td>
      <td>{product.productName}</td>
      <td>{product.productOwnerName}</td>
      <td>
        {product.developers.map((developer) => (
          <p>{developer}</p>
        ))}
      </td>
      <td>{product.scrumMasterName}</td>
      <td>{product.startDate}</td>
      <td>{product.methodology}</td>
    </tr>
  );
};

export default Product;
