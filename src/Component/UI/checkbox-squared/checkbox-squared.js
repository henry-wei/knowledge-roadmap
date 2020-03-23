import React from 'react';
import './checkbox-squared.css';
export default class SquaredCheckBox extends React.Component {
  constructor(props) {
  	super(props)
    this.state = {
      cbChecked: false,
    }
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {
    this.setState({cbChecked: event.target.checked}, () => {
        this.toParentCheckedState();
    });
  }

  toParentCheckedState(){
    this.props.parent.getSquaredCheckBoxChecked(this, this.state.cbChecked);
}

  render() {
    return (
        <div className="cbSquaredStyle">
            <div className="squaredCheckBox">
                <input type="checkbox" id="squaredCheckBox" defaultChecked={false} onChange={this.handleChange} />
                <label htmlFor="squaredCheckBox"></label> 
            </div>
            <label className="cbSquaredCheckBoxText">{this.props.cbText} </label>
        </div>
    );
  }
}







// Front-end developer  
//Please select your role:
//checked = {this.state.checkBoxValue} 