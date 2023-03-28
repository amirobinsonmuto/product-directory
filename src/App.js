import { useState } from "react";
import Heading from "./components/Heading";
import Button from "./components/Button";
import Products from "./components/Products";

function App() {
  const [products, setProducts] = useState([
    {
      productId: 1,
      productName: "product1",
      productOwnerName: "productOwner1",
      developers: ["NAME_1", "NAME_2", "NAME_3", "NAME_4", "NAME_5"],
      scrumMasterName: "scrumMaster1",
      startDate: "2001/10/02",
      methodology: "Agile",
    },
    {
      productId: 2,
      productName: "product2",
      productOwnerName: "productOwner2",
      developers: ["NAME_1", "NAME_2", "NAME_3", "NAME_4", "NAME_5"],
      scrumMasterName: "scrumMaster2",
      startDate: "2001/10/02",
      methodology: "Waterfall",
    },
    {
      productId: 3,
      productName: "product3",
      productOwnerName: "productOwner3",
      developers: ["NAME_1", "NAME_2", "NAME_3", "NAME_4", "NAME_5"],
      scrumMasterName: "scrumMaster3",
      startDate: "2001/10/02",
      methodology: "Agile",
    },
  ]);

  const onSubmit = (newProduct, formType) => {
    if (formType === "create") {
      setProducts([...products, newProduct]);
    } else {
      const productToEdit = products.find(
        (product) => product.productId === newProduct.productId
      );
      const index = products.indexOf(productToEdit);
      console.log(index);
      const newProducts = [...products];
      newProducts[index] = newProduct;
      setProducts(newProducts);
    }
  };

  return (
    <div className="App container">
      <h1>Product Tracker</h1>
      <Heading text="Current Products" />
      <Button onSubmit={onSubmit} formType="create" />
      <Products products={products} onSubmit={onSubmit} />
    </div>
  );
}

export default App;
