import React, { useState } from "react";
import ProductForm from "./ProductForm";

const Button = ({ onSubmit, productToEdit, formType }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  return (
    <>
      <button
        className="btn btn-primary mt-3 mb-3"
        onClick={() => {
          openForm();
        }}
      >
        {formType === "create" ? "Add New Product" : "Edit"}
      </button>
      <ProductForm
        isFormOpen={isFormOpen}
        closeForm={closeForm}
        onSubmit={onSubmit}
        productToEdit={productToEdit}
        formType={formType}
      />
    </>
  );
};

export default Button;
