import React, { Component } from 'react';
import './landingPage.scss';
import work from '../../work.jpg';
import {Grid,Cell}from 'react-mdl';
import {Link}from 'react-router-dom'
import Footer from '../footer/footer'




export default class landingPage extends Component {
    render() {
        return (
              <div className='tc'>
                  <Grid className=''>
                      <Cell col={12}>  
                        <div  className='banner-text '>
                        <h1 className='name grow shadow-5 dib'>Barbaro Reyes</h1> 
                          <img className='picture tc' alt ='' src={work}/>
                          <h1 className='name grow shadow-5 dib'>Software Developer</h1> 
                         
                          <hr className='line'/>
                          <p className='parraph'><i class="fab fa-html5"></i>HTML/CSS<i className=" fab fa-css3-alt"></i>|JavaScript<i class="fab fa-node-js"></i>|React-Redux<i class="fab fa-react"></i>| <button className='grow btn' style={{backgroundColor:'turquesa'}} >< Link style={{backgroundColor:'',color:'grey'}} to ="/aboutMe">AboutMe</Link></button></p>
                          <div>
      <img alt='' src='https://www.google.com/maps/vt/data=5P4ONVexKCVOBj0TGShKJUHHEh92mCYp-iiYNH_ToCyE8lC8bKwnonJSUN8d9dMOASkgYIV0qOpY3MUAayvO3A7tQNMsawDb5NRKT6lbg5B71CZnmDhT0aA1rBBk9vKekI1JNuqLmj1SQgfPUx0lvmqOPTcg8Z4V3WCHXdacXOuQsphQpEnVjuv7R1HRi1FcOCG1Xr1g7ryrq2hclzzfAMf3UakE-PxCA9l0RJ7kvrwB_KbL3ZEzIZg'/>
    </div>
                          <div className='socials-liks'>
                                {/* linkedIn */}
                                <a className ='link' href="http://google.com" rel='noopener noreferrer' target='_black'><i className=" fab fa-linkedin"></i></a>
                                 {/* Gihub */}
                                 <a className ='link' href="https://github.com/barbaroreyes" rel='noopener noreferrer' target='_black'><i className=" link fab fa-github-square"></i></a>
                                 {/* linkedIn */}
                               <a className ='link'href="http://google.com" rel='noopener noreferrer' target='_black'><i className="  fab fa-facebook-square"></i></a>
                               
                           </div>
                        </div>
                      </Cell>
                  </Grid>
                 
                  <Footer/>
              </div>
                

                                 
                    
            
        )
    }
}

