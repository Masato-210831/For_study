import { useState } from "react";
import AnimalList from "./components/AnimalList";
import AnimalFilter from "./components/AnimalFilter";

const Example = () => {
  const [filterVal, setFilterVal] = useState("");
  const animals = ["Dog", "Cat", "Rat"];

  const filterdAnimals = animals.filter((animal) => {
    const isMatch = animal.indexOf(filterVal) !== -1;
    return isMatch;
  });
  console.log(filterdAnimals);


  return (
    <>
      <AnimalFilter filterState = {[filterVal, setFilterVal]}/>
      <AnimalList animals={filterdAnimals} />
    </>
  );
};

export default Example;
