import React from "react";
import { useState, useMemo } from "react";

export default function UseMemo() {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  const instatnse = useMemo(() => {
    console.log("inside memo");
    return `button has clicked:${count}`;
  }, [count]);

  return (<div>
      <input value={text} onChange={(e)=>setText(e.target.value)}/>
      <br/>
      <button onClick={()=>setCount(count+1)}>click</button>
      <div>
          {instatnse}
      </div>
      {count>0 ? <div>{text}</div>: ''}
  </div>);
}
