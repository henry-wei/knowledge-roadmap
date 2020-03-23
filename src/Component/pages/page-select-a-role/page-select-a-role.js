import React from 'react';
import './page-select-a-role.css';
import AwesomeButton from '../../UI/button-awesome/button-awesome';
import CircleHookCheckBox from '../../UI/checkbox-circleHook/checkbox-circleHook';
import LinesFollowMouse from '../../UI/lines-follow-mouse/lines-follow-mouse';

export default class SelectARole extends React.Component {
  constructor(props) {
  	super(props)
    this.state = {
      titleValue: 'Please select your role:',
      cbText: "Front-end developer",
      cbCheckedState: false,
    }
  }
  
  getCirleHookCheckBoxChecked = (result, msg) =>{
      this.setState({
        cbCheckedState: msg
      })
  }


  render() {

    return (
      <div>
          {/* <LinesFollowMouse/> */}
          {/* <div className="homePage"></div> */}
          {/* <div className="transparent-box"></div> */}
          <div className = "selectARole">
            <h1 className="interfaceDescription">{this.state.titleValue}</h1>
              <div className="CircleHookCheckBox">
                <CircleHookCheckBox cbText={this.state.cbText}  parent={this}/>
              </div>
            {this.state.cbCheckedState === true ? 
            <div className="AwesomeButton">
                <AwesomeButton btnName="START" btnhref="/select/roadmapSelect"/> 
            </div>: null} 
          </div>
      </div>
    );
  }
}







// Front-end developer  
//Please select your role:
//checked = {this.state.checkBoxValue} 