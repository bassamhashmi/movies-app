import React from "react";

const CreateIsSearchingContext = React.createContext(undefined);
const CreateIsSearchingDispatchContext = React.createContext(undefined);

function IsSearchingProvider({ children }) {
  const [isSearching, setIsSearching] = React.useState(false);

  const handleIsSearchingToggle = (isSearching) => {
    setIsSearching(isSearching);
  };

  return (
    <CreateIsSearchingContext.Provider value={isSearching}>
      <CreateIsSearchingDispatchContext.Provider
        value={handleIsSearchingToggle}
      >
        {children}
      </CreateIsSearchingDispatchContext.Provider>
    </CreateIsSearchingContext.Provider>
  );
}

const useCreateIsSearchingContext = () => {
  const context = React.useContext(CreateIsSearchingContext);

  if (context === undefined) {
    throw Error(
      "useCreateIsSearchingContext must be inside IsSearchingProvider"
    );
  }

  return context;
};

const useCreateIsSearchingDispatchContext = () => {
  const context = React.useContext(CreateIsSearchingDispatchContext);

  if (context === undefined) {
    throw Error(
      "useCreateIsSearchingDispatchContext must be inside IsSearchingProvider"
    );
  }

  return context;
};

const useIsSearchingContext = () => {
  return [useCreateIsSearchingContext(), useCreateIsSearchingDispatchContext()];
};

export { IsSearchingProvider, useIsSearchingContext };
