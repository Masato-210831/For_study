import Child from "./components/Child";

const Example = () => {
  const hello = (arg) => `Hello ${arg}`;
  const o = { color: "red", num: 124 };
  return (
    <>
      <Child num={123} fn={hello} bool obj={{ name: "tom", age: 18 }} {...o}/>
      {/* <Child color='red' /> */}
    </>
  );
};

export default Example;
