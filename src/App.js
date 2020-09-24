import React ,{Component}from 'react'
import './App.css';
import{Layout,Header,Navigation,Drawer,Content}from 'react-mdl';
import {Link}from 'react-router-dom'
import Main from './componet/MAin/main';
import Aboutme from './componet/aboutMe/aboutme';
// import Particles from 'react-particles-js';


 
 export default class App extends Component {
   render() {
     return (
       <div>
         <div className="demo-big-content">
    <Layout className='header-styles' >
        <Header className='bg-light-blue  head' title="Barbaro Reyes " scroll>
            <Navigation>
                < Link to ="/aboutMe">AboutMe</Link>
                < Link to ="/resume">Resume</Link>
                < Link to ="/portafolio">Portafolio</Link>
                < Link to ="/contact">Contact</Link>
                < Link to ="/projects">Proyects</Link>
            </Navigation>
        </Header>
        <Drawer  className ='bg-grey' title="">
            <Navigation className= 'header-styles'>
            < Link to ="/">AboutMe</Link>
                < Link className='' to ="/">Resume</Link>
                < Link to ="/">Portafolio</Link>
                < Link to ="/">Contact</Link>
                < Link to ="/">Proyects</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            {/* <Particles/> */}
            <Main/>
            <Aboutme/>
        </Content>
    </Layout>
</div>
       </div>
     )
   }
 }
 