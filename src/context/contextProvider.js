import React from "react";
import { ActiveGenreProvider } from "./activeGenreContext";
import { AuthProvider } from "./authContext";
import { MoviesDataProvider } from "./moviesDataContext";

export default function ContextProvider({ children }) {
  return (
    <AuthProvider>
      <ActiveGenreProvider>
        <MoviesDataProvider>{children}</MoviesDataProvider>
      </ActiveGenreProvider>
    </AuthProvider>
  );
}
