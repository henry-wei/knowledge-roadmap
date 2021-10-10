import React, { Component } from 'react'
import SelectARole from '../Component/pages/page-select-a-role/page-select-a-role';
import RoadmapSelect from '../Component/pages/page-roadmap-select/page-roadmap-select'
import './react-transition.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import LinesFollowMouse from '../Component/UI/lines-follow-mouse/lines-follow-mouse';
import {Switch, Route, BrowserRouter, withRouter, Redirect} from 'react-router-dom';

const MyRoutres = withRouter(({location}) => (
  <TransitionGroup >
    <CSSTransition
      // timeout={5000}
      // classNames={'fade'}
      // key={location.pathname}  
    >
        <Switch location={location}>
          <Route path='/select' component={LinesFollowMouse}/> 
          <Redirect from = "/" to="/select/selectARole"/>
        </Switch>
    </CSSTransition>
  </TransitionGroup>
));

export default class Routes extends React.PureComponent{

  render() {
    return (
      <BrowserRouter>
        <MyRoutres/>
      </BrowserRouter>
    )}
}