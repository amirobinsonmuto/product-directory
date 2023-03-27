import React, { useState } from "react";
import Product from "./Product";
import ProductForm from "./ProductForm";

const Button = ({ text, addProduct }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  return (
    <>
      <button className="btn btn-primary" onClick={openForm}>
        {text}
      </button>
      <ProductForm isFormOpen={isFormOpen} closeForm={closeForm} />
    </>
  );
};

export default Button;
