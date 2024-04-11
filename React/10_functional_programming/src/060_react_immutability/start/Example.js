import { useState } from "react";

// const Child = (props) => {
//   return (
//     <>
//       <span>{props.state.value}</span>
//     </>
//   );
// };

const Example = () => {
  const [ state, setState ] = useState({ value: 0 });

  const Child = () => {
    setState(prev => ({value: state.value + 1}))
  }

  return (
    <>
      <div>
        {/* <Child state={state} setState={setState} /> */}
        <span>{state.value}</span>
        <button onClick={Child}>+</button>
      </div>
    </>
  );
};

export default Example;
