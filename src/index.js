import React from "react";
import ReactDOM from "react-dom/client";
import { ActiveGenreProvider } from "./context/activeGenreContext";
import { IsSearchingProvider } from "./context/isSearchingContext";
import { MoviesDataProvider } from "./context/moviesDataContext";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <IsSearchingProvider>
      <ActiveGenreProvider>
        <MoviesDataProvider>
          <App />
        </MoviesDataProvider>
      </ActiveGenreProvider>
    </IsSearchingProvider>
  </React.StrictMode>
);
