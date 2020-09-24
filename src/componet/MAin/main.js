import React from 'react';
import {Switch,Route} from 'react-router-dom';
import LandingPage from '../landingPage/landingPage';
import AboutMe  from '../aboutMe/aboutme';
import  Contact from '../contact/index';
import Proyect from '../projects/index';
import Resume from '../resume/resume';
import Portafolio from '../portafolio/portafolio'

export default function Main() {
    return (
        <div>
            <Switch>
                <Route exact  path='/landingPage' component ={LandingPage} />
                <Route exact  path='/aboutMe' component ={AboutMe} />
                <Route exact  path='/' component ={Contact} />
                <Route exact  path='/' component ={Proyect} />
                <Route exact  path='/' component ={Resume} />
                <Route exact  path='/' component ={Portafolio} />
               
            </Switch>
        </div>
    )
}
