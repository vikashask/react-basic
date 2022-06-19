import React, { useCallback, useState } from 'react';

const couterSet = new Set()
export default function MainUseCallback1Com() {
    const [count,setCount] = useState(0)
    const [count2,setCount2] = useState(0)
    const increment =() =>{
        console.log("increment");
        setCount(count+1)
    }
    // const increment2 =() =>{
    //     console.log("increment2");
    //     setCount2(count2+1)
    // }
/* 
TODO: increment2UseCallback will be called only when count2 change
*/
    const increment2 = useCallback(() =>{
        console.log("increment2");
        setCount2(count2+1)
    },[count2])

    couterSet.add(increment)
    couterSet.add(increment2)
    console.log("🚀 ~ file: ", couterSet)
    return(<div>
         <p>Counter 1:{count}</p>
         <p>Counter 2:{count2}</p>
         <button onClick={increment}>increase couter 1</button>
         <button onClick={increment2}>increase couter 2</button>
    </div>)   
}