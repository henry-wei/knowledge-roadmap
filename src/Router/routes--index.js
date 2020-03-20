import React from 'react'
import SelectARole from '../selectARole/SelectARole';
import RoadmapSelect from '../roadmapSelect/RoadmapSelect'

import {Router, Switch, Route} from 'react-router-dom';
import {createBrowserHistory} from "history";

const customHistory = createBrowserHistory();
const Routes = () => (
     <Router history={customHistory}>
      <Switch>
        <Route path="/roadmapSelect" component={RoadmapSelect}/> 
        <Route path="/" component={SelectARole}/>    
      </Switch>
    </Router>
) 
export default Routes;