import React, { Component } from 'react'
import './App.css';
import {Switch,Route} from 'react-router-dom'
import LandingPage from './component/landinpage/landingpage';



export default class App extends Component {
  render() {
    return (
      <div>
           <Switch>
               <Route   exact path='/' component ={LandingPage}/>
         </Switch>
      </div>
    )
  }
}
