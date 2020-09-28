import React ,{Component}from 'react'
import './App.css';
import {Link}from 'react-router-dom'
import Main from './componet/MAin/main';

 
 export default class App extends Component {
   render() {
     return ( <main>
       <div>
         <div className="demo-big-content">
    
            <nav style={{background:'grey',margin:'10px',width:'100%',display:'flex',justifyContent:'center'}}>
                < Link className='nav' to ="/">Home</Link>
                < Link className='nav' to ="/aboutMe">AboutMe</Link>
                < Link className='nav' to ="/resume">Resume</Link>
                < Link className='nav' to ="/contact">Contact</Link>
                < Link className='nav' to ="/projects">Proyects</Link>
            </nav>
        
        
            
        
        
            <div className="page-content" />
            <Main/>
            
       
    
           </div>
      </div>
      </main>
     )
   }
 }
 