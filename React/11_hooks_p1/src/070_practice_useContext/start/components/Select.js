import { useNumber, useChangeNumber } from "../context/NumberContext";

const CALC_OPTIONS = ["add", "minus", "divide", "multiply"];

const Select = () => {
  const dispatch = useChangeNumber()

  const calculate = (e) => {
    dispatch({ type: e.target.value });
  };

  return (
    <select name="type" onChange={calculate}>
      {CALC_OPTIONS.map((type) => (
        <option key={type} value={type}>
          {type}
        </option>
      ))}
    </select>
  );
};

export default Select;
