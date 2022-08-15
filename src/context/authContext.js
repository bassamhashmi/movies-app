import React from "react";

const AuthContext = React.createContext(undefined);

function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const handleAuthChange = (isAuthenticated) => {
    setIsAuthenticated(isAuthenticated);
  };

  return (
    <AuthContext.Provider value={[isAuthenticated, handleAuthChange]}>
      {children}
    </AuthContext.Provider>
  );
}

const useAuthContext = () => {
  const context = React.useContext(AuthContext);

  if (context === undefined) {
    throw Error("useAuthContext must be inside AuthProvider");
  }

  return context;
};

export { AuthProvider, useAuthContext };

// import React from "react";

// const CreateAuthContext = React.createContext(undefined);
// const CreateAuthDispatchContext = React.createContext(undefined);

// function AuthProvider({ children }) {
//   const [isAuthenticated, setIsAuthenticated] = React.useState(false);

//   const handleAuthChange = (bool) => {
//     setIsAuthenticated(bool);
//   };

//   return (
//     <CreateAuthContext value={isAuthenticated}>
//       <CreateAuthDispatchContext value={handleAuthChange}>
//         {children}
//       </CreateAuthDispatchContext>
//     </CreateAuthContext>
//   );
// }

// const useCreateAuthContext = () => {
//   const context = React.useContext(CreateAuthContext);

//   if (context === undefined) {
//     throw Error("useCreateAuthContext must be inside AuthProvider");
//   }

//   return context;
// };

// const useCreateAuthDispatchContext = () => {
//   const context = React.useContext(CreateAuthDispatchContext);

//   if (context === undefined) {
//     throw Error("useCreateAuthContext must be inside AuthProvider");
//   }

//   return context;
// };

// const useAuthContext = () => {
//   return [useCreateAuthContext(), useCreateAuthDispatchContext()];
// };

// export { AuthProvider, useAuthContext };
