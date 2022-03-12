import React , { useMemo, useState} from 'react';

let fib = (n)=> {
    console.log(n)
    if (n === 1) {
        return [0, 1];
    } else {
        var arr = fib(n - 1);
        arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
        return arr;
    }
};

export default function Fibo() {
    let [fibo,setFibo]=useState(1);
    let [value,setValue]=useState(1);
    let [color,setColor]=useState("pink");

    let changeColor = ()=>{
        if(color==="pink"){
            setColor("blue")
        }
        else{
            setColor("pink")
        }
    }

    
    const count= useMemo(()=>{
        let sum = 0;
        const arrayFibo = fib(fibo)
        arrayFibo.map(item=>{
            sum = sum + item
            console.log(item)
        })
        console.log(arrayFibo)

       
        return sum
    },[fibo])

    

  return (
    <div>
        <div>{count}</div>
        <input type={"number"} onChange={(e)=>setValue(e.target.value)} />
        <button onClick={()=>setFibo(value)}>btn</button>
        <button style={{backgroundColor:color}} onClick={changeColor}>change them</button>
    </div>
  )
}