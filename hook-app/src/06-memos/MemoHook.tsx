import { useMemo, useState } from "react";
import { useCounter } from "../hooks/useCounter";



const heavyStuff = (iterarionNumber = 100) =>{
  for(let i = 0; i < iterarionNumber; i++){
    console.log('Ahi vamos...');
  }

  return `${iterarionNumber} iteraciones relazadas`
} 


export const MemoHook = () => {
  const { counter, increment } = useCounter(1400);
  const [show, setShow] = useState(true);

   const memorizedValue = useMemo(() =>{
    return heavyStuff(counter);
   }, [counter])
  

  return (
    <>
      <h1>
        {" "}
        Counter <small>{counter}</small>
      </h1>

    <h4>{memorizedValue}</h4>


      <button className="btn btn-primary" onClick={() => increment()}>
        +1
      </button>
      <button
        className="btn btn-outline-primary"
        onClick={() => setShow(!show)}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};
