import React from "react";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

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
      <Modal.Header>Modal header</Modal.Header>
      <Modal.Body>
        <h2>{formType === "create" ? "Add New Product" : "Edit Product"}</h2>
        <form onSubmit={handleOnSubmit}>
          <label>
            Product Name:
            <br />
            <input
              name="productName"
              value={newProduct.productName}
              onChange={handleOnChange}
              required
            />
          </label>

          <label>
            Product Owner Name:
            <br />
            <input
              name="productOwnerName"
              value={newProduct.productOwnerName}
              onChange={handleOnChange}
              required
            />
          </label>

          <div>
            Developers
            {newProduct.developers.map((developer, index) => (
              <div key={index}>
                <input
                  name="developers"
                  value={developer}
                  onChange={(e) => handleDeveloperChange(index, e.target.value)}
                  required
                />
                {newProduct.developers.length > 1 && (
                  <button
                    type="button"
                    onClick={() => handleRemoveDeveloper(index)}
                  >
                    <small>Remove</small>
                  </button>
                )}
              </div>
            ))}
            {newProduct.developers.length < 10 && (
              <button type="button" onClick={handleAddDeveloper}>
                Add Developer
              </button>
            )}
          </div>

          <label>
            Scrum Master Name:
            <br />
            <input
              name="scrumMasterName"
              value={newProduct.scrumMasterName}
              onChange={handleOnChange}
              required
            />
          </label>

          <label>
            Start Date:
            <br />
            <input
              name="startDate"
              value={newProduct.startDate.replace(/\//g, "-")}
              onChange={handleOnChange}
              type="date"
              required
              disabled={formType === "Edit"}
            />
          </label>

          <label>
            Methodology:
            <br />
            <div>
              <input
                name="methodology"
                id="Agile"
                value={newProduct.methodology}
                onChange={handleOnChange}
                type="radio"
                required
                checked={newProduct.methodology === "Agile"}
              />
              <label htmlFor="agile">Agile</label>
              <input
                name="methodology"
                id="Waterfall"
                value={newProduct.methodology}
                onChange={handleOnChange}
                type="radio"
                required
                checked={newProduct.methodology === "Waterfall"}
              />
              <label htmlFor="waterfall">Waterfall</label>
            </div>
          </label>

          <div>
            {formType === "create" && (
              <button id="submit-btn" type="submit">
                Add Product
              </button>
            )}

            {formType === "update" && (
              <button id="submit-btn" type="submit">
                Save Change
              </button>
            )}
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={closeForm}>Cancel</button>
      </Modal.Footer>
    </Modal>
  );
};

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // check if al fields have value
//     if (
//       !productIdValue ||
//       !productNameValue ||
//       !productOwnerNameValue ||
//       developerValue.some((d) => !d) ||
//       !scrumMasterNameValue ||
//       !startDateValue ||
//       !methodologyValue
//     ) {
//       alert("Please fill out all fields.");
//       return;
//     } else {
//       onSubmit(
//         {
//           productId: productIdValue,
//           productName: productNameValue,
//           productOwnerName: productOwnerNameValue,
//           developers: developerValue,
//           scrumMasterName: scrumMasterNameValue,
//           startDate: startDateValue,
//           methodology: methodologyValue,
//         },
//         submitType,
//         productId
//       );
//       closeForm();
//     }
//   };

//   // const handleAddDeveloper = () => {
//   //   setDeveloperValue(prev => ({
//   //     ...prev,
//   //     developerValue

//   //     () => setDeveloperValue([...developerValue, ""])
//   //   }))
//   // }

//   return (
//     <Modal show={isFormOpen}>
//       <Modal.Header>Modal header</Modal.Header>
//       <Modal.Body>
//         <form>
//           <label>
//             Product ID:
//             <input
//               type="text"
//               name="productId"
//               value={productIdValue}
//               onChange={(e) => setProductIdValue(e.target.value)}
//             />
//           </label>
//           <br />

//           <label>
//             Product Name:
//             <input
//               type="text"
//               name="productName"
//               value={productNameValue}
//               onChange={(e) => setProductNameValue(e.target.value)}
//             />
//           </label>
//           <br />

//           <label>
//             Product Owner Name:
//             <input
//               type="text"
//               name="productOwnerName"
//               value={productOwnerNameValue}
//               onChange={(e) => setProductOwnerNameValue(e.target.value)}
//             />
//           </label>
//           <br />

//           <label>
//             Developer:
//             {developerValue.map((developer, index) => (
//               <input
//                 key={index}
//                 type="text"
//                 name="developer"
//                 value={developer}
//                 onChange={(e) => {
//                   const copiedDeveloperValue = [...developerValue];
//                   copiedDeveloperValue[index] = e.target.value;
//                   setDeveloperValue(copiedDeveloperValue);
//                 }}
//               />
//             ))}
//           </label>
//           <button onClick={() => setDeveloperValue([...developerValue, ""])}>
//             Add developer
//           </button>
//           <br />

//           <label>
//             Scrum Master Name:
//             <input
//               type="text"
//               name="scrumMasterName"
//               value={scrumMasterNameValue}
//               onChange={(e) => setScrumMasterNameValue(e.target.value)}
//             />
//           </label>
//           <br />

//           <label>
//             Start Date:
//             <input
//               type="text"
//               name="startDate"
//               value={startDateValue}
//               onChange={(e) => setStartDateValue(e.target.value)}
//             />
//           </label>
//           <br />

//           <label>
//             Methodology:
//             <input
//               type="text"
//               name="methodology"
//               value={methodologyValue}
//               onChange={(e) => setMethodologyValue(e.target.value)}
//             />
//           </label>
//           <br />

//           <button type="submit" onClick={handleSubmit}>
//             {submitType === "add" ? "Add" : "Save"}
//           </button>
//         </form>
//       </Modal.Body>
//       <Modal.Footer>
//         <button onClick={closeForm}>Cancel</button>
//       </Modal.Footer>
//     </Modal>
//   );
// };

export default ProductForm;
