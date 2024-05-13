import { useEffect, useState } from "react";
import axios from "axios";

const Example = () => {

  const [users, setUsers] = useState([])

  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get('http://localhost:3003/user')
      setUsers(res.data)
    }
    getUser()
  }, [])


  return (
  <div>
    {users.map(user => {
      return (
        <div key={user.id}>
          <h3>{user.username}</h3>
          <p>age:{user.age}</p>
          <p>hobby:{user.hobbies.join(',')}</p>
        </div>
      )
    })}
    "id": 1,
    "username": "hoge太郎",
    "age": 20,
    "hobbies": ["サッカー", "野球"],
    "premiumAccount": true
  </div>
  )
};

export default Example;
