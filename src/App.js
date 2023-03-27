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
      startDate: "YYYY/MM/DD",
      methodology: "methodology1",
    },
    {
      productId: 2,
      productName: "product2",
      productOwnerName: "productOwner2",
      developers: ["NAME_1", "NAME_2", "NAME_3", "NAME_4", "NAME_5"],
      scrumMasterName: "scrumMaster2",
      startDate: "YYYY/MM/DD",
      methodology: "methodology2",
    },
    {
      productId: 3,
      productName: "product3",
      productOwnerName: "productOwner3",
      developers: ["NAME_1", "NAME_2", "NAME_3", "NAME_4", "NAME_5"],
      scrumMasterName: "scrumMaster3",
      startDate: "YYYY/MM/DD",
      methodology: "methodology3",
    },
  ]);

  return (
    <div className="App container">
      <h1>Product Tracker</h1>
      <Heading text="Current Products" />
      <Button text="Add a new product" />
      <Products products={products} />
    </div>
  );
}

export default App;
