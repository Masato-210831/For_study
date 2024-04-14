import { createContext, useContext, useReducer } from "react";

const NumberContext = createContext();
const NumberChangeContext = createContext();


const CalcProvider = ({ children }) => {

  const reducer = (state, { type, payload }) => {
    switch (type) {
      case "change": {
        const { name, value } = payload;
        return { ...state, [name]: value };
      }
      case "add": {
        return { ...state, result: state.a + state.b };
      }
      case "minus": {
        return { ...state, result: state.a - state.b };
      }
      case "divide": {
        return { ...state, result: state.a / state.b };
      }
      case "multiply": {
        return { ...state, result: state.a * state.b };
      }
      default:
        throw new Error("operator is invalid");
    }
  };

  const initState = {
    a: 1,
    b: 2,
    result: 3,
  };

  const [state, dispatch] = useReducer(reducer, initState);
  
  return (
    <>
      <NumberContext.Provider value={state}>
        <NumberChangeContext.Provider value={dispatch}>
          {children}
        </NumberChangeContext.Provider>
      </NumberContext.Provider>
    </>
  );
};

const useNumber = () => useContext(NumberContext);

const useChangeNumber = () => useContext(NumberChangeContext);

export { CalcProvider, useNumber, useChangeNumber };
