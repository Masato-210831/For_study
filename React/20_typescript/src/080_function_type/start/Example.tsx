const Example = () => {
  // 練習用

  // 関数の数値には必ず型定義
  function sum1(x: number, y: number){
    return x + y
  }

  const sum2 = (x: number, y: number): number => x + y;

  const result1 = sum1(1, 2)
  console.log(result1)

};

const sum0 = (x:number, y:number):number => x + y

type Sum = (x:number, y:number) => number;
const sum1:Sum = (x, y) => x + y;
const result1 = sum1(1, 2)
console.log(result1)

export default Example;
