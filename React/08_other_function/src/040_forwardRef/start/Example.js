import { useRef, forwardRef } from "react";

const Example = () => {
  const ref = useRef();
  const Input = forwardRef((props, ref) => {
    return <input type="text" ref={ref} />;
  });
  return (
    <>
      <Input ref={ref} />
      <button onClick={() => ref.current.focus()}>
        インプット要素をフォーカスする
      </button>
    </>
  );
};

export default Example;
