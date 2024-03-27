import { useState } from "react";

const Example = () => {
  // const animals = ["Dog", "Cat", "Rat"];
  const animals = ["Dog", "Cat", null, "Rat"];

  const [filterVal, setFilterVal] = useState("");

  return (
    <>
      <input
        type="text"
        value={filterVal}
        onChange={(e) => setFilterVal(e.target.value)}
      />
      <ul>
        {animals
          .filter((animal) => {
            const animalStr = animal ?? "";
            const isMatch = animalStr.indexOf(filterVal) !== -1;
            return isMatch;
          })
          .map((animal) => {
            // if (animal === "Dog") {
            //   return <li key={animal}>{animal}★</li>;
            // } else {
            //   return <li key={animal}>{animal}</li>;
            // }

            // 三項演算子
            // return <li key={animal}>{animal === "Dog" ? animal + "★" : animal}</li>;

            // && => Trueの時に何か表示したい場合
            return <li key={animal}>{animal}{animal==='Dog' && '★'}</li>;
          })}
      </ul>
    </>
  );
};

export default Example;
