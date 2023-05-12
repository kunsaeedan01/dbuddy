import React, { useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";

function SearchBar({ onSearch }) {
  const [searchText, setSearchText] = useState("");

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchText);
  };

  return (
    <Form className="my-3" onSubmit={handleSubmit}>
      <div className="d-flex align-items-center">
        <FormControl
          type="text"
          placeholder="Search"
          className="py-2 rounded-pill border-primary text-primary"
          value={searchText}
          onChange={handleInputChange}
        />
        <div style={{ marginLeft: "10px" }}>
          <Button type="submit" variant="primary">
            Search
          </Button>
        </div>
      </div>
    </Form>
  );
}

export default SearchBar;