import React from "react";
import Modal from "react-bootstrap/Modal";

const ProductForm = ({ isFormOpen, closeForm }) => {
  return (
    <Modal show={isFormOpen}>
      <Modal.Header>Modal header</Modal.Header>
      <Modal.Body>
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
      </Modal.Body>
      <Modal.Footer>
        <button onClick={closeForm}>Close</button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProductForm;
