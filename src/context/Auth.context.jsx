import React, { useState } from "react";

const AuthContext = React.createContext();

const AuthContextProvider = (props) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const removeUser = () => {
    setToken(null);
    setUser(null);
  };
  return (
    <AuthContext.Provider
      value={{ setToken, setUser, token, user, removeUser }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
export function useAuthContext() {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuthContext can only be used inside AuthProvider");
  }
  return context;
}
