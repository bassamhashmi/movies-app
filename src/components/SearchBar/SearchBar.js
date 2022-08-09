import React from "react";
import { useMoviesDataContext } from "../../context/moviesDataContext";
import { useIsSearchingContext } from "../../context/isSearchingContext";
import { Button, InputGroup, Form } from "react-bootstrap";

const SearchBar = () => {
  const [isSearching, handleIsSearchingToggle] = useIsSearchingContext();
  const [moviesData, handleMoviesDataChange] = useMoviesDataContext();
  const [searchInput, setSearchInput] = React.useState("");

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);

    return;
  };

  const handleClearInput = () => {
    setSearchInput("");
    return;
  };

  const handleSearchMovie = () => {
    if (!isSearching && searchInput !== "") {
      handleIsSearchingToggle(true);
    }

    if (searchInput !== "") {
      const moviesSearched = [...moviesData].filter((movie) =>
        movie.title.toLowerCase().startsWith(searchInput.toLowerCase())
      );
      handleMoviesDataChange(moviesSearched);
    }
    return;
  };

  return (
    <InputGroup className="mb-3">
      <Form.Control
        value={searchInput}
        onChange={handleSearchInputChange}
        placeholder="Search movie by title"
        aria-label="Search Movie"
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

      <Button
        variant="outline-primary"
        id="btnSearch"
        onClick={handleSearchMovie}
      >
        Search
      </Button>
    </InputGroup>
  );
};

export default SearchBar;
