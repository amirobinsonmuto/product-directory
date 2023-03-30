import React from "react";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const ProductForm = ({
  isFormOpen,
  closeForm,
  onSubmit,
  productToEdit,
  formType,
}) => {
  const [newProduct, setNewProduct] = useState(
    productToEdit || {
      productId: "",
      productName: "",
      productOwnerName: "",
      developers: [""],
      scrumMasterName: "",
      startDate: "",
      methodology: "",
    }
  );

  const handleOnSubmit = (e) => {
    e.preventDefault();
    // check if al fields have value
    if (
      !newProduct.productName ||
      !newProduct.productOwnerName ||
      !newProduct.developers[0] ||
      !newProduct.scrumMasterName ||
      !newProduct.startDate ||
      !newProduct.methodology
    ) {
      alert("Please fill out all fields.");
      return;
    } else {
      onSubmit(newProduct, formType);
      closeForm();
    }
  };

  const handleOnChange = (e) => {
    let newValue = e.target.value;
    if (e.target.name === "startDate")
      newValue = e.target.value.replace(/-/g, "/");
    if (e.target.name === "methodology") newValue = e.target.id;
    setNewProduct((prevState) => ({
      ...prevState,
      [e.target.name]: newValue,
    }));
  };

  const handleDeveloperChange = (index, value) => {
    setNewProduct((prev) => {
      const newDevelopers = [...prev.developers];
      newDevelopers[index] = value;
      return {
        ...prev,
        developers: newDevelopers,
      };
    });
  };

  const handleAddDeveloper = () => {
    setNewProduct((prev) => ({
      ...prev,
      developers: [...prev.developers, ""],
    }));
  };

  const handleRemoveDeveloper = (index) => {
    setNewProduct((prev) => ({
      ...prev,
      developers: prev.developers.filter((_, i) => i !== index),
    }));
  };

  return (
    <Modal show={isFormOpen}>
      <Modal.Header>
        <h2>{formType === "create" ? "Add New Product" : "Edit Product"}</h2>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleOnSubmit}>
          <Form.Group>
            <Form.Label>Product Name:</Form.Label>
            <Form.Control
              className="w-75 mb-1"
              name="productName"
              value={newProduct.productName}
              onChange={handleOnChange}
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Product Owner Name:</Form.Label>
            <Form.Control
              className="w-75 mb-1"
              name="productOwnerName"
              value={newProduct.productOwnerName}
              onChange={handleOnChange}
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Developers</Form.Label>
            {newProduct.developers.map((developer, index) => (
              <div key={index}>
                <Form.Control
                  className="w-75 d-inline-block mb-1"
                  name="developers"
                  value={developer}
                  onChange={(e) => handleDeveloperChange(index, e.target.value)}
                  required
                />
                {newProduct.developers.length > 1 && (
                  <Button
                    variant="secondary"
                    className="ms-2"
                    size="sm"
                    type="button"
                    onClick={() => handleRemoveDeveloper(index)}
                  >
                    Remove
                  </Button>
                )}
              </div>
            ))}
            {newProduct.developers.length < 10 && (
              <Button
                className="mt-2 mb-2"
                variant="success"
                size="sm"
                type="btn btn-small button"
                onClick={handleAddDeveloper}
              >
                Add Developer
              </Button>
            )}
          </Form.Group>

          <Form.Group>
            <Form.Label>Scrum Master Name:</Form.Label>
            <Form.Control
              className="w-75 mb-1"
              name="scrumMasterName"
              value={newProduct.scrumMasterName}
              onChange={handleOnChange}
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Start Date: </Form.Label>
            <Form.Control
              className="w-75 mb-1"
              name="startDate"
              value={newProduct.startDate.replace(/\//g, "-")}
              onChange={handleOnChange}
              type="date"
              required
              disabled={formType === "Edit"}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Methodology: </Form.Label>
            <Form.Check
              name="methodology"
              id="Agile"
              value={newProduct.methodology}
              onChange={handleOnChange}
              type="radio"
              label="Agile"
              required
              checked={newProduct.methodology === "Agile"}
            />
            <Form.Check
              className="mb-4"
              name="methodology"
              id="Waterfall"
              value={newProduct.methodology}
              onChange={handleOnChange}
              type="radio"
              label="Waterfall"
              required
              checked={newProduct.methodology === "Waterfall"}
            />
          </Form.Group>

          <>
            {formType === "create" && (
              <Button id="submit-btn" type="submit">
                Add Product
              </Button>
            )}

            {formType === "update" && (
              <Button id="submit-btn" type="submit">
                Save Change
              </Button>
            )}
          </>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeForm}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProductForm;
