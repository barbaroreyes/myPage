import React ,{Component}from 'react'
import './App.css';
import {Link}from 'react-router-dom'
import Main from './componet/MAin/main';

 
 export default class App extends Component {
   render() {
     return ( 
        <main>
        <div className="content">
              <nav style={{height:'50px'}}>
                <button className='btn1'>< Link className='nav' to ="/">Home</Link></button>
                <button className='btn1'>< Link target="_blank"  className='nav' to ="/aboutMe">AboutMe</Link></button>
                <button className='btn1'>< Link target="_blank"  className='nav' to ="/resume">Resume</Link></button>
                <button className='btn1'> < Link target="_blank"  className='nav' to ="/contact">Contact</Link></button>
                <button className='btn1'> < Link target="_blank"  className='nav' to ="/projects">Proyects</Link></button>                          
              </nav>
              <Main/>
         <div/>
           
         </div>    
      </main>
     )
   }
 }
 