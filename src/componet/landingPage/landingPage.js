import React, { Component } from 'react';
import './landingPage.css';
import work from '../../work.jpg';
import {Link}from 'react-router-dom'
import Footer from '../footer/footer';
import Map from'../map/map'




export default class landingPage extends Component {
    render() {
        return (
              <div className='tc'>
                  <div className=''>
                      <section col={12}>  
                        <div  className='banner-text '>
                        <h1 className='name  dib'>Barbaro Reyes</h1> 
                          <img className='picture ' alt ='' src={work}/>
                          <h1 className='name  dib'>Software Developer</h1> 
                            <Map/>
                          <hr className='line'/>
                          <p className='parraph'><i class="fab fa-html5"></i>HTML/CSS<i className=" fab fa-css3-alt"></i>|JavaScript<i class="fab fa-node-js"></i>|React-Redux<i class="fab fa-react"></i>| <button className='grow btn' style={{backgroundColor:'turquesa'}} >< Link style={{backgroundColor:'',color:'grey'}} to ="/aboutMe">AboutMe</Link></button></p>
                            
                                <h3>you just don't climb the mountain you never got to </h3>
                                      
                           <div className='socials-liks'>
                                {/* linkedIn */}
                                <a className ='link' href="http://google.com" rel='noopener noreferrer' target='_black'><i className=" fab fa-linkedin"></i></a>
                                 {/* Gihub */}
                                 <a className ='link' href="https://github.com/barbaroreyes" rel='noopener noreferrer' target='_black'><i className=" link fab fa-github-square"></i></a>
                                 {/* linkedIn */}
                                <a className ='link'href="http://google.com" rel='noopener noreferrer' target='_black'><i className="  fab fa-facebook-square"></i></a>
                          </div>
                        </div>
                      </section>
                  </div>
                 
                  <Footer/>
              </div>
                

                                 
                    
            
        )
    }
}

