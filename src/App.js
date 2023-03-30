import { useState } from "react";
import Button from "./components/Button";
import Products from "./components/Products";
import SearchBar from "./components/SearchBar";
import { data } from "./data";
import { Container } from "react-bootstrap";

function App() {
  const [products, setProducts] = useState(data);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("productName");

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
    <Container>
      <h1 className="mt-4">Product Tracker</h1>
      <SearchBar setSearch={setSearch} filter={filter} setFilter={setFilter} />
      <Button onSubmit={onSubmit} formType="create" />
      <Products
        products={products}
        onSubmit={onSubmit}
        search={search}
        filter={filter}
      />
    </Container>
  );
}

export default App;
