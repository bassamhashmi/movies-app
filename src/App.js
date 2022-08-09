import React from "react";
import { useIsSearchingContext } from "./context/isSearchingContext";
import { useMoviesDataContext } from "./context/moviesDataContext";
import Genres from "./components/Genres/Genres";
import Movies from "./components/Movies/Movies";
import GenresDataJSON from "./data/genres.json";
import MoviesDataJSON from "./data/movies.json";
import { Button } from "react-bootstrap";

function App() {
  const [isSearching, handleIsSearchingToggle] = useIsSearchingContext();
  const [moviesData, handleMoviesDataChange] = useMoviesDataContext();

  const handleGoBack = () => {
    handleIsSearchingToggle(false);
    const init = MoviesDataJSON;
    if (init !== moviesData) {
      handleMoviesDataChange(init);
    }
    return;
  };

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-3">
            {isSearching ? (
              <Button
                className="d-grid gap-2"
                variant="primary"
                size="lg"
                onClick={handleGoBack}
              >
                Go Back
              </Button>
            ) : (
              <Genres GenresDataJSON={GenresDataJSON} />
            )}
          </div>
          <div className="col-9">
            <Movies />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
