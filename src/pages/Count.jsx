import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"
const Count = () => {
    const {counter, setCounter} = useContext(CounterContext)

    return(
        <div>
            <h2>Contador</h2>
            <p>Valor do contador: {counter}</p>
            <button onClick={() => setCounter(counter + 1)}>Incrementar</button>
        </div>
    )
}

export default Count