import React from 'react';
import {Switch,Route} from 'react-router-dom';
import LandingPage from '../landingPage/landingPage';
import AboutMe  from '../about/aboutMe';
import  Contact from '../contact/contact-page';
import Projects from '../projects/projects';
import Resume from '../resume/resume';

const Main =() => {
    return (
        <div>
            <Switch>
                <Route exact  path="/"  component = {LandingPage}/>
                <Route        path="/landingPage" component={LandingPage} />
                <Route        path='/aboutMe'      component = {AboutMe}/>
                <Route        path='/contact'      component = {Contact}/>
                <Route        path='/projects'     component = {Projects}/>
                <Route        path='/resume'       component = {Resume}/>
               
              </Switch>
        </div>
    )
}

export default Main
 