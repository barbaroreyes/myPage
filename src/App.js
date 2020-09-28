import React ,{Component}from 'react'
import './App.css';
import {Link}from 'react-router-dom'
import Main from './componet/MAin/main';

 
 export default class App extends Component {
   render() {
     return ( <main>
       <div>
         <div className="content" style={{background:'linear-gradient(to left ,rgb(240, 122, 122) ,rgb(204, 214, 230))'}}>
    
            <nav style={{background:'grey',height:'100px',width:'100%',display:'flex',justifyContent:'center',textAlign:'center'}}>
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
 