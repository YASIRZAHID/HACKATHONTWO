import React, { createContext, useContext, useState, ReactNode } from "react";

interface sessionProps {
  sessionValue: boolean;
  setSessionValue: (newValue: boolean) => void;
}

const sessionContext = createContext<sessionProps | undefined>(undefined);

interface sessionProviderProps {
  children: ReactNode;
}

export function SessionProvider({ children }: sessionProviderProps) {
  const [sessionValue, setSesionValue] = useState<boolean>(false);

  const setSessionValue = (newValue: boolean) => {
    setSesionValue(newValue);
  };

  const contextValue: sessionProps = {
    sessionValue,
    setSessionValue
  };

  return (
    <sessionContext.Provider value={contextValue}>
      {children}
    </sessionContext.Provider>
  );
}

export function useSession() {
  const context = useContext(sessionContext);
  if (!context) {
    throw new Error("useSession must be used within a SessionProvider");
  }
  return context;
}
