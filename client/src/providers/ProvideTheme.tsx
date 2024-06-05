import {
  FluentProvider,
  teamsDarkTheme,
  teamsLightTheme,
} from "@fluentui/react-components";
import React, { createContext, useContext, useState } from "react";
import { addRxPlugin } from "rxdb";
import { RxDBDevModePlugin } from "rxdb/plugins/dev-mode";

addRxPlugin(RxDBDevModePlugin);
interface IProvider {
  children: React.ReactNode;
}

const withTheme = createContext<any | undefined>(undefined);

export const ProvideTheme: React.FC<IProvider> = ({ children }) => {
  const [theme, setTheme] = useState(teamsLightTheme);
  //   const saveTheme = (themeName: string) => {};

  const toggleTheme = (arg: boolean) => {
    let t = arg ? teamsLightTheme : teamsDarkTheme;
    setTheme(t);
  };

  let ctxValues = {
    theme,
    toggleTheme,
  };

  return (
    <withTheme.Provider value={ctxValues}>
      <FluentProvider theme={theme}>{children}</FluentProvider>
    </withTheme.Provider>
  );
};

export const useTheme = () => {
  let context = useContext(withTheme);
  if (!context) {
    console.log("No context provider for useTheme. ");
  } else {
    return context;
  }
};
