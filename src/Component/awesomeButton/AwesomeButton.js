import React from 'react';
import './AwesomeButton.css';
import ReactDOM from 'react-dom';
export default class AwesomeButton extends React.Component {
  constructor(props) {
  	super(props)

    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
  }

  handleMouseMove(event) {
    const linka = document.querySelector('a');
    const docStyle = document.documentElement.style;
    const boundingClientRect = ReactDOM.findDOMNode(linka).getBoundingClientRect();
    const x = event.clientX - boundingClientRect.left;
    const y = event.clientY - boundingClientRect.top;
    const xc = boundingClientRect.width/2;
    const yc = boundingClientRect.height/2;
    const dx = x - xc;
    const dy = y - yc;
    docStyle.setProperty('--rx', `${ dy/-1 }deg`);
    docStyle.setProperty('--ry', `${ dx/10 }deg`);
  }
  
  handleMouseLeave(event) {
    const docStyle = document.documentElement.style
    docStyle.setProperty('--ty', '0');
    docStyle.setProperty('--rx', '0');
    docStyle.setProperty('--ry', '0');   
  }
  
  handleMouseDown(event) {
    const docStyle = document.documentElement.style
    docStyle.setProperty('--tz', '-25px')
  }
  
  handleMouseUp(event) {
      const docStyle = document.documentElement.style
    docStyle.setProperty('--tz', '-12px')
  }

  
  render() {
    return (
      <div>
        <a href={this.props.btnhref} className="BtnStyle" 
        onMouseMove={this.handleMouseMove}
        onMouseLeave={this.handleMouseLeave} 
        onMouseUp={this.handleMouseUp} 
        onMouseDown={this.handleMouseDown} 
        data-title={this.props.btnName}> </a>  
      </div>
    );
  }
}
