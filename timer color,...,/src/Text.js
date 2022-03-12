import React, { Component } from "react";

export default class Text extends Component {
  constructor(props) {
    super(props);

    this.pElementRef = React.createRef();
  }

  handleClick = () => {
    console.log(this.pElementRef.current.outerHTML);
  };

  render() {
    return (
      <p ref={this.pElementRef} onClick={this.handleClick}>
      Assignments to the 'interval1' variable from inside React Hook useEffect will be lost after each render. To preserve the value over time, store it in a useRef Hook and keep the mutable value in the '.current' property. Otherwise, you can move this variable directly inside useEffect 
      </p>
    );
  }
}
