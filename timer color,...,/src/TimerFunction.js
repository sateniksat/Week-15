import React, {useState,useEffect} from "react";

export default function TimerFunction({userId}){
    function createRandomColor(){
        let randomColor ="#"+ Math.floor(Math.random()*16777215).toString(16);
        return randomColor;
    }
    const [time, setTime] = useState(new Date());
    const [show, setSHow] = useState(false);
    const [color, setcolor] = useState("black");

    const timer = () => {
        setTime(new Date())
    }
    useEffect(()=>{
        const interval = setInterval(() => timer(), 1000)
        console.log()
        return ()=>{
           clearInterval(interval)
        }
    },[])

    useEffect(()=>{
        setcolor(createRandomColor())
    },[time])
    return (
        <div>
            <h2 style={{color:color}} >It is {time.toLocaleTimeString()}</h2>
        </div>
    );
}