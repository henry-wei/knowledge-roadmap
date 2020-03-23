// import React from 'react';
// import './widget-select.css';
// import AwesomeButton from '../../UI/button-awesome/button-awesome';
// import CircleHookCheckBox from '../../UI/checkbox-circleHook/checkbox-circleHook';
// import LinesFollowMouse from '../../UI/lines-follow-mouse/lines-follow-mouse';

// export default class RoadmapSelect extends React.Component {
//   constructor(props) {
//   	super(props)
//     this.state = {
//       titleValue: 'Please select the proper one to learn:',
//       cbText: 'Front-end Road-map',  
//       cbCheckedState: false,
//     }
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
  
//   handleChange(event) {
//     this.setState({cbChecked: event.target.checked});
//   }

//   handleSubmit(event) {
//     event.preventDefault();
//   }
  
//   getCirleHookCheckBoxChecked = (result, msg) =>{
//     this.setState({
//       cbCheckedState: msg
//     })
// }

//   render() {
//     return (
//       <div>
//       <LinesFollowMouse/>
//       <div className="homePage"></div>
//       <div className="transparent-box"></div>
//       <div className = "selectARole">
//         <h1 className="interfaceDescription">{this.state.titleValue}</h1>
//           <div className="CircleHookCheckBox">
//             <CircleHookCheckBox cbText={this.state.cbText}  parent={this}/>
//           </div>
//         {this.state.cbCheckedState === true ? 
//         <div className="AwesomeButton">
//             <AwesomeButton btnName="START" btnhref="/"/> 
//         </div>: null} 
//       </div>
//   </div>
//     );
//   }
// }
