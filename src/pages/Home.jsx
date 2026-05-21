import Counter from "../components/Counter.jsx"
import ReduxCounter from "../components/ReduxCounter.jsx"
import Todos from "../components/Todos.jsx"

const Home = () => {
    return (
        <div>
            <Counter />
            <Todos />
            <ReduxCounter />
        </div>
    )
}

export default Home