import React, { createContext, useContext, useMemo } from "react";
import Localbase from "localbase";
const database = new Localbase("finsinai");

interface IProvideDB {
  children: React.ReactNode;
}

const withDB = createContext<any | undefined>(undefined);

const ProvideDB: React.FC<IProvideDB> = ({ children }) => {
  const contextValues = {
    database,
  };
  return <withDB.Provider value={contextValues}>{children}</withDB.Provider>;
};

const useDatabase = () => {
  const context = useContext(withDB);
  if (!context) {
    console.error("useDatabase must be used in a ProvideDB context provider");
  }
  return context;
};

export { ProvideDB, useDatabase };
