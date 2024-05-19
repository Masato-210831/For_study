const Example = () => {
  // 練習用

  type User = {
    name: string,
    age: number
  }

  const user: User = {name:'taro', age:12}

  type UserName = string;
  type UserAge = number;
  type Gender = 'woman' | 'man' | 'others';

  type UserProfile = {
    name: UserName,
    age : UserAge,
    gender: Gender
  }

  const userProfile: UserProfile = {
    name: 'hanako',
    age: 18,
    gender: 'woman'
  }


};

export default Example;
