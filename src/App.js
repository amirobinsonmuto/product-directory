import "./App.css";
import { useState } from "react";
import Heading from "./components/Heading";

function App() {
  // [products, setProducts] = useState([
  //   {
  //     productId: 1,
  //     productName: "product1",
  //     productOwnerName: "productOwner1",
  //     Developers: ["NAME_1", "NAME_2", "NAME_3", "NAME_4", "NAME_5"],
  //     scrumMasterName: "scrumMaster1",
  //     startDate: "YYYY/MM/DD",
  //     methodology: "methodology1",
  //   },
  //   {
  //     productId: 2,
  //     productName: "product2",
  //     productOwnerName: "productOwner2",
  //     Developers: ["NAME_1", "NAME_2", "NAME_3", "NAME_4", "NAME_5"],
  //     scrumMasterName: "scrumMaster2",
  //     startDate: "YYYY/MM/DD",
  //     methodology: "methodology2",
  //   },
  //   {
  //     productId: 3,
  //     productName: "product3",
  //     productOwnerName: "productOwner3",
  //     Developers: ["NAME_1", "NAME_2", "NAME_3", "NAME_4", "NAME_5"],
  //     scrumMasterName: "scrumMaster3",
  //     startDate: "YYYY/MM/DD",
  //     methodology: "methodology3",
  //   },
  // ]);

  return (
    <div className="App">
      <h1>Product Tracker</h1>
      <Heading text="Current Products"/>
    </div>
  );
}

export default App;
