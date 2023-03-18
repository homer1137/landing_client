import { useEffect, useState } from "react"


export const Counter=()=>{
const[count, setCount]=useState(0)
const [go, setGo]=useState(false)    
useEffect(()=>{
    if(go){
        let int = setInterval(()=>{setCount(prev=>prev+1)}, 1000)
   return ()=>clearInterval(int)
    }
   
}, [go])
    return (
        <>
            <div>Таймер{count}</div>
            <button onClick={()=>setGo(prev=>!prev)}>{go?'stop':'start'}</button>
        </>
    )
}