import React from 'react'
import { useState,useMemo } from 'react'

export default function MemoUse() {
    const [count,setCount]=useState(0);
    const [name,setName]=useState('');
    const label=useMemo(()=>{
        console.log("cumputing clicks",Date.now());
        return`${count} click ${count===1 ? "":"s"}`
    },[count])
  return (
    <div>
        <input value={name} onChange={e=>setName(e.target.value)}/>
        <button onClick={()=>setCount(count+1)}>press me</button>
        <div>{label}</div>
    </div>
  )
}
