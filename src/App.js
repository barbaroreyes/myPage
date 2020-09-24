import React ,{Component}from 'react'
import './App.css';
import{Layout,Header,Navigation,Drawer,Content}from 'react-mdl';
import {Link}from 'react-router-dom'
import Main from './componet/MAin/main'


 
 export default class App extends Component {
   render() {
     return (
       <div>
         <div className="demo-big-content">
    <Layout>
        <Header className='header-styles' title="Barbaro Reyes" scroll>
            <Navigation>
                < Link to ="/aboutMe">AboutMe</Link>
                < Link to ="/resume">Resume</Link>
                < Link to ="/portafolio">Portafolio</Link>
                < Link to ="/contact">Contact</Link>
                < Link to ="/projects">Proyects</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
            < Link to ="/">AboutMe</Link>
                < Link to ="/">Resume</Link>
                < Link to ="/">Portafolio</Link>
                < Link to ="/">Contact</Link>
                < Link to ="/">Proyects</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
       </div>
     )
   }
 }
 