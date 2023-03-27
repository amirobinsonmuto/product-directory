import React from "react";

const ProductForm = () => {
  return (
    <form>
      <label>
        Product ID:
        <input type="text" name="productId" />
      </label>
      <br />

      <label>
        Product Name:
        <input type="text" name="productName" />
      </label>
      <br />

      <label>
        Product Owner Name:
        <input type="text" name="productOwnerName" />
      </label>
      <br />

      <label>
        Developers:
        <input type="text" name="developers" />
      </label>
      <br />

      <label>
        Scrum Master Name:
        <input type="text" name="scrumMasterName" />
      </label>
      <br />

      <label>
        Start Date:
        <input type="text" name="startDate" />
      </label>
      <br />

      <label>
        Methodology:
        <input type="text" name="methodology" />
      </label>
      <br />

      <button type="submit">Submit</button>
    </form>
  );
};

export default ProductForm;
