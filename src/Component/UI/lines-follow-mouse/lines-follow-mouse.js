import React from 'react';
import {linesFollowMouse} from '../../UI/lines-follow-mouse/lines-follow-mouse-sourse';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import RoadmapSelect from '../../pages/page-roadmap-select/page-roadmap-select'
import SelectARole from '../../pages/page-select-a-role/page-select-a-role'

import {Router, Switch, Route} from 'react-router-dom';
export default class LinesFollowMouse extends React.Component {
    constructor(props) {
        super(props);
      this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    componentDidMount() {
        linesFollowMouse();
    }

    render() {
        this.componentDidMount();
        return (
           <div>
            <Route  path={`${this.props.match.path}/selectARole`} component={SelectARole} />  
            <Route  path={`${this.props.match.path}/roadmapSelect`} component={RoadmapSelect} />      
           </div>
            
        );
    }
}
