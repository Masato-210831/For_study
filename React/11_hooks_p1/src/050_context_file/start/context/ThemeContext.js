import { useState, useContext, createContext } from "react";

export const MyTheme = createContext();
export const MyUpdateTheme = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  return (
    <MyTheme.Provider value={theme}>
      <MyUpdateTheme.Provider value={setTheme}>
        {children}
      </MyUpdateTheme.Provider>
    </MyTheme.Provider>
  );
};

export const useTheme = () => useContext(MyTheme);
export const useUpdateTheme = () => useContext(MyUpdateTheme);
