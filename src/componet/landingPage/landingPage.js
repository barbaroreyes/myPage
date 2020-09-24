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
                        <div  className='banner-text'>
                          <img className='picture tc' alt ='' src={work}/>
                          <h1 className='name'>Software Developer</h1> 
                          <hr className='line'/>
                          <p className='parraph'>HTML/CSS|JavaScript|React-Redux</p>
                        </div>
                      </Cell>
                  </Grid>
                
              </div>
               
            
        )
    }
}

