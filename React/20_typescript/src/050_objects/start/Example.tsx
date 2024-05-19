const Example = () => {
  // 練習用
  const array1:number[] = [1, 2, 3]
  const array2:string[] = ["1", "2"]
  const arrayNull:null[] = []
  const array3: Array<number> = [1, 2, 3]
  const array4: (number | string)[] = [1, 2, '3']


  const obj1: {name:string, age:number} = {name:'John', age:11}
  // obj1.name = 18;

  type Person = {name:string, age?:number}
  const obj1Pre: Person = {name:'taro'}

  // 配列の中にオブジェクト
  const usrs: Person[] = [
    {name:'taro'},
    {name:'hanako', age:11}
  ]



};

export default Example;
