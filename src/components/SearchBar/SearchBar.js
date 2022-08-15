import React from "react";
import { Button, InputGroup, Form } from "react-bootstrap";

const SearchBar = ({
  searchInput,
  handleSearchInputChange,
  handleClearInput,
}) => {
  return (
    <InputGroup className="mb-3">
      <Form.Control
        value={searchInput}
        onChange={handleSearchInputChange}
        placeholder="Search movie by title"
      />
      {searchInput ? (
        <Button
          variant="outline-secondary"
          id="btnClear"
          onClick={handleClearInput}
        >
          Clear
        </Button>
      ) : null}
    </InputGroup>
  );
};

export default SearchBar;
