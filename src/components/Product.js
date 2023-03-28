import React from "react";
import Button from "./Button";

const Product = ({ product, getProductToEdit, onSubmit }) => {
  return (
    <tr key={product.productId}>
      <td>{product.productId}</td>
      <td>{product.productName}</td>
      <td>{product.productOwnerName}</td>
      <td>
        {product.developers.map((developer, index) => (
          <p key={index}>{developer}</p>
        ))}
      </td>
      <td>{product.scrumMasterName}</td>
      <td>{product.startDate}</td>
      <td>{product.methodology}</td>
      <td>
        <Button
          text="edit"
          getProductToEdit={getProductToEdit}
          productId={product.productId}
          submitType="edit"
          onSubmit={onSubmit}
        />
      </td>
    </tr>
  );
};

export default Product;
