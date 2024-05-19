const Example = () => {
  // 練習用
  const repeatStr = (value: string, times: number): string[] => {
    return new Array(times).fill(value)
  }

  const repeatNum = (value: number, times: number): number[] => {
    return new Array(times).fill(value)
  }


  const strArray = repeatStr('hello', 3);
  console.log(strArray)


  const numArray = repeatNum(1, 4);
  console.log(numArray)


  const repeat = <T>(value: T, times: number): T[] => {
    return new Array(times).fill(value)
  }

  const numArray1 = repeat<number>(10, 4);
  const strArray1 = repeat<string>('hello', 10);
  const boolArray1 = repeat<boolean>(true, 10);
  
  type bye = 123
  const byeArray1 = repeat<bye>(123, 10);
  console.log(strArray1)
  console.log(numArray1) 

};


export default Example;
