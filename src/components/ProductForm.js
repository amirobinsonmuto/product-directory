import React from "react";
import Modal from "react-bootstrap/Modal";
import { useState, useEffect } from "react";

const ProductForm = ({
  isFormOpen,
  closeForm,
  onSubmit,
  getProductToEdit,
  productId,
  submitType,
}) => {
  // store input values in states
  const [productIdValue, setProductIdValue] = useState("");
  const [productNameValue, setProductNameValue] = useState("");
  const [productOwnerNameValue, setProductOwnerNameValue] = useState("");
  const [developerValue, setDeveloperValue] = useState("");
  const [scrumMasterNameValue, setScrumMasterNameValue] = useState("");
  const [startDateValue, setStartDateValue] = useState("");
  const [methodologyValue, setMethodologyValue] = useState("");

  useEffect(() => {
    // populate the form with the product properties
    if (submitType === "edit") {
      const productToEdit = getProductToEdit(productId);
      setProductIdValue(productToEdit.productName);
      setProductNameValue(productToEdit.productName);
      setProductOwnerNameValue(productToEdit.productOwnerName);
      setDeveloperValue(productToEdit.developers);
      setScrumMasterNameValue(productToEdit.scrumMasterName);
      setStartDateValue(productToEdit.startDate);
      setMethodologyValue(productToEdit.methodology);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(
      {
        productId: productIdValue,
        productName: productNameValue,
        productOwnerName: productOwnerNameValue,
        developers: ["NAME_1", "NAME_2", "NAME_3", "NAME_4", "NAME_5"],
        scrumMasterName: scrumMasterNameValue,
        startDate: startDateValue,
        methodology: methodologyValue,
      },
      submitType,
      productId
    );
    closeForm();
  };

  return (
    <Modal show={isFormOpen}>
      <Modal.Header>Modal header</Modal.Header>
      <Modal.Body>
        <form>
          <label>
            Product ID:
            <input
              type="text"
              name="productId"
              value={productIdValue}
              onChange={(e) => setProductIdValue(e.target.value)}
            />
          </label>
          <br />

          <label>
            Product Name:
            <input
              type="text"
              name="productName"
              value={productNameValue}
              onChange={(e) => setProductNameValue(e.target.value)}
            />
          </label>
          <br />

          <label>
            Product Owner Name:
            <input
              type="text"
              name="productOwnerName"
              value={productOwnerNameValue}
              onChange={(e) => setProductOwnerNameValue(e.target.value)}
            />
          </label>
          <br />

          <label>
            Developer:
            <input
              type="text"
              name="developer"
              value={developerValue}
              onChange={(e) => setDeveloperValue(e.target.value)}
            />
          </label>
          <br />

          <label>
            Scrum Master Name:
            <input
              type="text"
              name="scrumMasterName"
              value={scrumMasterNameValue}
              onChange={(e) => setScrumMasterNameValue(e.target.value)}
            />
          </label>
          <br />

          <label>
            Start Date:
            <input
              type="text"
              name="startDate"
              value={startDateValue}
              onChange={(e) => setStartDateValue(e.target.value)}
            />
          </label>
          <br />

          <label>
            Methodology:
            <input
              type="text"
              name="methodology"
              value={methodologyValue}
              onChange={(e) => setMethodologyValue(e.target.value)}
            />
          </label>
          <br />

          <button type="submit" onClick={handleSubmit}>
            {submitType === "add" ? "Add" : "Save"}
          </button>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={closeForm}>Cancel</button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProductForm;
