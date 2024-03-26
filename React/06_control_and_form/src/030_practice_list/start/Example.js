import { useState } from "react";

const persons = [
  {
    name: "Geo",
    age: 18,
    hobbies: ["sports", "music"],
  },
  {
    name: "Tom",
    age: 25,
    hobbies: ["movie", "music"],
  },
  {
    name: "Lisa",
    age: 21,
    hobbies: ["sports", "travel", "game"],
  },
];
const Example = () => {
  return (
    <>
      <h3>練習問題</h3>
      <p>
        Profileコンポーネントを使用して、完成コードと同じ画面を作成してください。
      </p>
      <p>
        また、Profileコンポーネント内のリスト表示部分にkeyを設定して、ワーニング表示がされないようにしてください。
      </p>
      <ul>
        {persons.map((person) => {
          return (
            <>
              <hr />
              <div>Name:{person.name}</div>
              <div>Age:{person.age}</div>
              <div>Hobby:</div>
              <ul>
                {person.hobbies.map((hobby) => (
                  <li>{hobby}</li>
                ))}
              </ul>
            </>
          );
        })}
      </ul>
    </>
  );
};

export default Example;
