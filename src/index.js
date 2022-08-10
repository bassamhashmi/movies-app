import React from "react";
import ReactDOM from "react-dom/client";
import { ActiveGenreProvider } from "./context/activeGenreContext";
import { MoviesDataProvider } from "./context/moviesDataContext";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ActiveGenreProvider>
      <MoviesDataProvider>
        <App />
      </MoviesDataProvider>
    </ActiveGenreProvider>
  </React.StrictMode>
);
