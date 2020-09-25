import React from 'react';
import {Switch,Route} from 'react-router-dom';
import LandingPage from '../landingPage/landingPage';
import About  from '../about/aboutMe';
import  Contact from '../contact/contact-page';
import Projects from '../projects/projects';
import Resume from '../resume/resume';
import Portafolio from '../portafolio/portafolio'

export default function Main() {
    return (
        <div>
            <Switch>
                <Route exact  path='/landingPage'  component = {LandingPage}/>
                <Route        path='/aboutMe'      component = {About}/>
                <Route        path='/contact'      component = {Contact}/>
                <Route        path='/projects'     component = {Projects}/>
                <Route        path='/resume'       component = {Resume}/>
                <Route        path='/portafolio'   component = {Portafolio}/>
               
            </Switch>
        </div>
    )
}
