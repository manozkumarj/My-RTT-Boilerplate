import { useCounter } from "../contexts/counterContext.jsx"

const Counter = () => {
    const { count, setCount } = useCounter()
    return (
        <div className="w-full m-auto text-center my-4">
            <div className="w-full m-auto flex text-center justify-center items-center gap-4">
                <button className="bg-red-500 text-white px-4 py-2 rounded cursor-pointer" onClick={() => setCount(count - 1)}>Decrement</button>
                <p>Count: {count}</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer" onClick={() => setCount(count + 1)}>Increment</button>
            </div>
        </div>
    )
}

export default Counter