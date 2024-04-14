import { useSetCount } from "../context/CounterContext";


const CounterButton = ({calcType, step}) => {
    const dispatch = useSetCount()

    const clickhander = () => {
        console.log(calcType)
        dispatch({type:calcType, step})
    }
    
    
    return <button onClick={clickhander}>{calcType}{step}</button>
}
export default CounterButton;