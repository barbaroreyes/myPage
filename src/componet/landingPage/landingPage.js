import React, { Component } from 'react';
import './landingPage.scss';
import work from '../../work.jpg';
import {Grid,Cell}from 'react-mdl'




export default class landingPage extends Component {
    render() {
        return (
              <div>
                  <Grid>
                      <Cell col={12}>  
                        <div  className='banner-text '>
                        <h1 className='name grow shadow-5 dib'>Barbaro Reyes</h1> 
                          <img className='picture tc' alt ='' src={work}/>
                          <h1 className='name grow shadow-5 dib'>Software Developer</h1> 
                          <hr className='line'/>
                          <p className='parraph'><i class="fab fa-html5"></i>HTML/CSS<i className=" fab fa-css3-alt"></i>|JavaScript<i class="fab fa-node-js"></i>|React-Redux<i class="fab fa-react"></i></p>
                          <div className='socials-liks'>
                              {/* linkedIn */}
                          <a  className ='link' href="http://google.com" rel='noopener noreferrer' target='_black'>
                          
                            <i className=" fab fa-linkedin"></i>
                          </a>
                            {/* Gihub */}
                            <a href="http://google.com" rel='noopener noreferrer' target='_black'>
                            <i className="fab fa-github-square"></i>
                          </a>
                            {/* linkedIn */}
                            <a href="http://google.com" rel='noopener noreferrer' target='_black'>
                            <i className="fab fa-facebook-square"></i>
                          </a>

                         </div>
                        </div>
                      </Cell>
                  </Grid>
                
              </div>
               
            
        )
    }
}

