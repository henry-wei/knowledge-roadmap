import React from 'react';
import './checkbox-circleHook.css';
export default class CircleHookCheckBox extends React.Component {
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
        this.props.parent.getCirleHookCheckBoxChecked(this, this.state.cbChecked);
    }


    render() {
      return (
        <div className="cbcircleHookStyle">
        <div className="circleHookCb">
            <input type="checkbox" id="circleHookCb" defaultChecked={false} onChange={this.handleChange} />
            <label htmlFor="circleHookCb"></label> 
        </div>
        <label className="circleHookCbText">{this.props.cbText} </label>
        </div>
      );
    }
  }
  