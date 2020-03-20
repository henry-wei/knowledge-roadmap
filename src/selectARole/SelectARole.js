import React from 'react';
import './SelectARole.css';
import AwesomeButton from '../Component/awesomeButton/AwesomeButton';
export default class SelectARole extends React.Component {
  constructor(props) {
  	super(props)
    this.state = {
      titleValue: 'Please select your role:',
      cbText: 'Front-end developer',  
      cbChecked: false,
    }
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {
    this.setState({cbChecked: event.target.checked});
  }

  render() {
    return (
      <div>
        <div className="homePage"></div>
        <div className = "selectARole">
            <div className="transparent-box"></div>
            <h1 className="interfaceDescription">{this.state.titleValue}</h1>
            <div className="cbStyle">
              <div className="circleCb">
                <input type="checkbox" id="circleCb" defaultChecked={false} onChange={this.handleChange} />
                <label htmlFor="circleCb"></label> 
              </div>
              <label className="cbText">{this.state.cbText} </label>
            </div>
            {this.state.cbChecked === true ? <AwesomeButton btnName="Start to learn" btnhref="/roadmapSelect"/> : null} 
        </div>
      </div>
    );
  }
}







// Front-end developer  
//Please select your role:
//checked = {this.state.checkBoxValue} 