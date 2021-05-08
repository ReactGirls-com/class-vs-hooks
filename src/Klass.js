import React from "react";

// React class component
export default class MouseTracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = { x: 0, y: 0 };
  }

  // WHEN
  componentDidMount() {
    window.addEventListener("mousemove", this.handleMouseMove);
  }

  componentWillUnmount() {
    window.removeEventListener("mousemove", this.handleMouseMove);
  }

  handleMouseMove = (event) => {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  };

  render() {
    const { x, y } = this.state;
    return (
      <div>
        <div>x: {x}px</div>
        <div>y: {y}px</div>
      </div>
    );
  }
}
