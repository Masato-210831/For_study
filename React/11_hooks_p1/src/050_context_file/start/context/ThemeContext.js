import { useState, useContext, createContext } from "react";


export const MyTheme = createContext();

export const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState("light");
  
  return( 
  
  <MyTheme.Provider value={[theme, setTheme]}>
    {children}
  </MyTheme.Provider>


  )};

  export const useTheme = () => useContext(MyTheme);
