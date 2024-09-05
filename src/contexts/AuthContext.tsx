import { createContext, ReactNode, useContext, useState } from "react";

interface IAuthContext {
  auth: boolean;
  setAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthContext = createContext<IAuthContext | null>(null);

export function AuthContextProvider({ children }: {children: ReactNode}) {
  const [auth, setAuth] = useState<boolean>(false);

  return (
    <AuthContext.Provider value={{auth, setAuth}}>
      { children }
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within a AuthContextProvider");
  }
  return context;
}