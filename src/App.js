import { useState } from "react";
import Heading from "./components/Heading";
import Button from "./components/Button";
import Products from "./components/Products";
import { data } from "./data";

function App() {
  const [products, setProducts] = useState(data);

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
