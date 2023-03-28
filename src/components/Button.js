import React, { useState } from "react";
import ProductForm from "./ProductForm";

const Button = ({
  text,
  onSubmit,
  getProductToEdit,
  productId,
  submitType,
}) => {
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
        className="btn btn-primary"
        onClick={() => {
          openForm();
        }}
      >
        {text}
      </button>
      <ProductForm
        isFormOpen={isFormOpen}
        closeForm={closeForm}
        onSubmit={onSubmit}
        getProductToEdit={getProductToEdit}
        productId={productId}
        submitType={submitType}
      />
    </>
  );
};

export default Button;
