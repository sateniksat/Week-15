import React, { useState, useEffect } from "react";

export default function DigitTimer() {
  let [time, setTime] = useState(new Date());
  let [color, setColor] = useState("#000");
  let interval1 = null;

  function createRandomColor() {
    const rgb =
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0);
    return rgb;
  }

  useEffect(() => {
    interval1 = setInterval(setTime(new Date()), 1000);

    return () => {
      if (interval1) {
        clearInterval(interval1);
      }
    };
  });

  useEffect(() => {
    setColor(createRandomColor());
  }, [time]);

  return (
    <>
      <h1 style={{ color: color }}>{time.toLocaleTimeString()}</h1>
    </>
  );
}

// export default class DigitTimer extends Component {
//   constructor() {
//     super();
//     this.state = {
//       time: new Date(),
//     };
//   }
//   createRandomColor(){

//   }
//   componentDidMount() {
//        this.interval = setInterval(()=>{
//           this.setState({time: new Date()})
//         },1000)
//   }
//   componentDidUpdate(prevProp,prevState){
//       if(prevState.time !== this.state.time){
//           this.setState({
//               color: this.createRandomColor(),
//           })
//       }
//   }
//   componentWillUnmount(){
//       clearInterval(this.interval)
//   }
//   render() {

//     return (
//         <div>
//             {this.state.time.toLocaleTimeString()}

//         </div>
//     )

//   }
// }
