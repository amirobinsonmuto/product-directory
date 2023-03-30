import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";

const SearchBar = ({ setSearch, filter, setFilter }) => {
  const handleOptionSelect = (option) => {
    setFilter(option);
  };
  return (
    <Form>
      <Form.Group>
        <Form.Control
          className="w-50 d-inline-block"
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Product by"
        />
        <Dropdown className="d-inline-block ms-2">
          <Dropdown.Toggle variant="success" size="sm">
            {filter === "productName"
              ? "Product Name"
              : filter === "scrumMasterName"
              ? "Scrum Master"
              : "Developers"}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handleOptionSelect("productName")}>
              Product Name
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => handleOptionSelect("scrumMasterName")}
            >
              Scrum Master
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleOptionSelect("developers")}>
              Developer
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Form.Group>
    </Form>
  );
};

export default SearchBar;
