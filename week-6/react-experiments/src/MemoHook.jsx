import { useEffect, useMemo, useState } from "react"

export default function MemoHook() {
    const [num, setNum] = useState(1)
    const [count, setCount] = useState(0)


    // This is also an good approach. But here we're needing extra state variable and cause 2 re-renders
    // But using memo we'll be reducing a render may be. Fuck it.
    // const [ans, setAns] = useState(0) 
    // useEffect(() => {
    //     let finalCount = 0;
    //     for (let i = 0; i <= num; i++) {
    //         finalCount = finalCount + i;
    //     }
    //     setAns(finalCount)
    // }, num)

    let finalSum = useMemo(() => {
        console.log("Memo got called")
        let sum = 0;
        for (let i = 0; i <= num; i++) {
            sum = sum + i;
        }
        return sum;
    }, [num])

    return (
        <>
            <input type="text" onChange={(e) => { setNum(e.target.value) }}></input>
            <h3>Sum is {finalSum}</h3>
            <button onClick={() => { setCount(count + 1) }}>Counter {count}</button>
        </>
    )
}