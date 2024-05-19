const Example = () => {
  // 練習用
  let strOrNum: string | number = 'Hello';
  strOrNum = 124

  let strOrNumOrBool:string | number | boolean = 'hello';

  // stringは"hello"のみ
  let helloOrNumOrBool:'Hello' | number | boolean = 'Hello'


  // 型の定義ができる
  type HelloOrNum = 'Hello' | number
  const Hello: HelloOrNum = 1;


  type WayOfWeek =
  | 'Monday'
  | 'Tuesday'

  const day:WayOfWeek = 'Tuesday'


};

export default Example;
