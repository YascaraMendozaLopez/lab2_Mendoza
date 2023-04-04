import { useState, useEffect } from "react";
import "../../styles/css/index.css"
const Counter = () => {
    const [count, setCount] = useState(0);

    let timer;
    useEffect(() => {
        timer = setInterval(() => {
            setCount(count + 1);
        }, 1000)
        return () => clearInterval(timer)
    });

    return <div className="contador">
        <h2>CONTADOR</h2>
        <p>{count}</p>
        <div className="botones">
            <button className="incr" onClick={() => setCount(count + 1)}>Incrementar</button>
            <button className="decr" onClick={() => setCount(count - 1)}>Decrementar</button>
        </div>

    </div>
}
export default Counter;
