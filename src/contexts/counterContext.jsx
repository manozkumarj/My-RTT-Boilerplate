import { createContext, useContext, useState } from "react"

// const CounterContext = createContext<{
//     count: number
//     setCount: (count: number) => void
// }>({
//     count: 0,
//     setCount: () => { },
// })

const CounterContext = createContext()

const CounterContextProvider = ({ children }) => {
    const [count, setCount] = useState(0)

    return (
        <CounterContext.Provider value={{ count, setCount }}>
            {children}
        </CounterContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useCounter = () => useContext(CounterContext)

export default CounterContextProvider;