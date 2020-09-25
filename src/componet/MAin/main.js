import React from 'react';
import {Switch,Route} from 'react-router-dom';
import LandingPage from '../landingPage/landingPage';
import About  from '../about/aboutM';
import  Contact from '../contact/index';
import Projects from '../projects/projects';
import Resume from '../resume/resume';
import Portafolio from '../portafolio/portafolio'

export default function Main() {
    return (
        <div>
            <Switch>
                <Route exact path='/landingPage' component ={LandingPage} />
                <Route   path='/aboutM' component ={About}/>
                <Route   path='/contact' component ={Contact} />
                <Route   path='/projects'  component ={Projects}/>
                <Route   path='/resume' component ={Resume} />
                <Route   path='/' component ={Portafolio} />
               
            </Switch>
        </div>
    )
}
