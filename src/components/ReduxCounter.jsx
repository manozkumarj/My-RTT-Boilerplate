import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, incrementByAmount } from "./../redux/slices/counterSlice"
import { useState } from "react"

const ReduxCounter = () => {
    const [count, setCount] = useState(0)
    const reduxCount = useSelector(state => state.counter.count)
    const dispatch = useDispatch()

    const handleIncrementByAmount = () => {
        dispatch(incrementByAmount(count))
        setCount(0)
    }

    return (
        <div className="w-full m-auto flex flex-col text-center justify-center items-center gap-4">
            <input type="number" value={count} onChange={(e) => setCount(Number(e.target.value))} className="border p-2 rounded w-92 text-center" />
            <button className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer" onClick={handleIncrementByAmount}>Increment By {count}</button>
            <div className="w-full m-auto flex text-center justify-center items-center gap-4">
                <button className="bg-red-500 text-white px-4 py-2 rounded cursor-pointer" onClick={() => dispatch(decrement())}>Decrement</button>
                <p>ReduxCounter: {reduxCount}</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer" onClick={() => dispatch(increment())}>Increment</button>
            </div>
        </div>
    )
}

export default ReduxCounter