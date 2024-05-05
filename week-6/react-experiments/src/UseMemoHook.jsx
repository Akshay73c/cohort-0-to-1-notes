import { useState } from "react"


export default function UseMemoHook() {
    const [num, setNum] = useState(0)
    const [count, setCount] = useState(0)
    return (
        <>
            <input type="text" onChange={(e) => { setNum(e.target.value) }}></input>
            <h3>Sum is {num}</h3>
            <button onClick={() => { setCount(count + 1) }}>Counter {count}</button>
        </>
    )
}