import React, { useState } from "react";
import ProductForm from "./ProductForm";

const Button = ({ text, addProduct }) => {
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(true);
  };

  return (
    <>
      <button className="btn btn-primary" onClick={handleClick}>
        {text}
      </button>
      {showForm && <ProductForm />}
    </>
  );
};

export default Button;
