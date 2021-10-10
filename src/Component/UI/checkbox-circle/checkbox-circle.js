import React from 'react';
import './checkbox-circle.css';
export default class CircleCheckBox extends React.Component {
    constructor(props) {
        super(props)
      this.state = {
        cbChecked: false,
      }
      this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event) {
      this.setState({cbChecked: event.target.checked}, ()=>{
        this.toParentCheckedState();
      });
    }
  
    toParentCheckedState(){
        this.props.parent.getCirleCheckBoxChecked(this, this.state.cbChecked);
        console.log(this.state.cbChecked)
    }


    render() {
      return (
        <div className="cbStyle">
        <div className="circleCb">
            <input type="checkbox" id="circleCb" defaultChecked={false} onChange={this.handleChange} />
            <label htmlFor="circleCb"></label> 
        </div>
        <label className="cbText">{this.props.cbText} </label>
        </div>
      );
    }
  }
  