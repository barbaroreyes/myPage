import React from 'react';
import {Switch,Route} from 'react-router-dom';
import LandingPage from '../landingPage/landingPage';
import AboutMe  from '../aboutMe/aboutme';
import  Contact from '../contact/index';
import Projects from '../projects/projects';
import Resume from '../resume/resume';
import Portafolio from '../portafolio/portafolio'

export default function Main() {
    return (
        <div>
            <Switch>
                <Route exact path='/landingPage' component ={LandingPage} />
                <Route   path='/' component ={AboutMe} />
                <Route   path='/' component ={Contact} />
                <Route   path='/projects'  component ={Projects} />
                <Route   path='/' component ={Resume} />
                <Route   path='/' component ={Portafolio} />
               
            </Switch>
        </div>
    )
}
