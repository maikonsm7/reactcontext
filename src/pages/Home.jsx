import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"
const Home = () => {
    const {counter} = useContext(CounterContext)
    return(
        <div>
            <h2>Home</h2>
            <p>Contador: {counter}</p>
        </div>
    )
}

export default Home