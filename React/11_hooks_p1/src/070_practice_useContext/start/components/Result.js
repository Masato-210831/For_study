import { useNumber } from "../context/NumberContext"


const Result = () => {
  const state = useNumber()

  return (
    <h3>結果：{state.result}</h3>
  )
}

export default Result
