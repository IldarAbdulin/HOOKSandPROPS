import { useState, useEffect } from "react";

function Effect() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log('123')
    }, [count])

    return (
        <div style={{padding:'10px 0'}}>
            <button style={{margin:' 0 10px'}} onClick={() => setCount(count + 1)}>Plus count</button>
            {count}
            <button style={{margin:' 0 10px'}} onClick={() => setCount(count - 1)}>Minus count</button>
        </div>
    )
}
export default Effect