import React, { Component } from 'react'

export class Timer extends Component{
    constructor(props) {
        super(props);
        this.state = {
            time: new Date(),
            color:"black",
        };
    }


    createRandomColor(){
        let randomColor ="#"+ Math.floor(Math.random()*16777215).toString(16);
        return randomColor;
    }
    componentDidMount() {
        this.timerID = setInterval(
           ( () =>{ 
            // let randomColor ="#"+ Math.floor(Math.random()*16777215).toString(16);
            //    this.setState({color:randomColor})
               this.tick()
            }),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }


    componentDidUpdate(prevProp,prevState){
        if(prevState.time !== this.state.time){
            this.setState({
                color: this.createRandomColor()
            })
        }
    }
    
    tick() {
        this.setState({
            time: new Date()
        });
    }

    render() {
        return (
            <div>
                {/* style={{color:this.state.color}} */}
                <h2 style={{color:this.state.color}} >It is {this.state.time.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

export default Timer

