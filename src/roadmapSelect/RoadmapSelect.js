import React from 'react';
import './RoadmapSelect.css';

export default class RoadmapSelect extends React.Component {
  constructor(props) {
  	super(props)
    this.state = {
      titleValue: 'Please select the proper one to learn:',
      linkText: 'Front-end Road-map',  
      cbChecked: false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    this.setState({cbChecked: event.target.checked});
  }

  handleSubmit(event) {
    event.preventDefault();
  }
  
  render() {
    return (
        <div className="roadmapSelect">
            <h1>{this.state.titleValue}</h1>
            <a href='/' className="linkStyle">{this.state.linkText}</a> 
        </div>
    );
  }
}
