import React, { Component } from 'react';
import {Tabs,Tab,Grid,Cell,Card,CardTitle,CardText,CardActions,Button,CardMenu}from 'react-mdl';


export default class Projects extends Component {
    constructor(props){
     super(props)
     this.state ={activeTab:0};
    }
    toggleCategories(){
        if(this.state.activeTab===0){
         return(<Card shadow={5} style={{width:'450',margin:'auto'}}>
               <CardTitle style={{color:'#fff',height:'176px',background:'url(https://img-a.udemycdn.com/course/750x422/1199058_8435_3.jpg)center/cover'}}></CardTitle>
               <CardText className='tc'>Project Description</CardText>
              <CardActions border>
                 <Button colored>Github</Button>
                 <Button colored>CodePen</Button>
                 <Button colored>LiveDemo</Button>
             </CardActions>
             <CardMenu></CardMenu>
           </Card>)

        }else if(this.state.activeTab ===1)
       return (<div><h1>This is Angular</h1></div>)

       else if (this.state.activeTab===2){
        return (<div><h1>This is VueuJs</h1></div>) 
            }
            else{
                return(<div><h1>This is MongoDB</h1></div>)
            }
    }
    render() {
        return (
            <div className='category-tabs'>
                <Tabs activeTab ={this.state.activeTab} onChange={(tabId)=> this.setState({activeTab:tabId})} ripple>
                <Tab>JavaScript</Tab>
                    <Tab>React</Tab>
                    <Tab>Angular</Tab>
                    <Tab>ViuJs</Tab>
                    <Tab>MongoDB</Tab>
                </Tabs>
            <section className= 'project-grid'>
                  <Grid className='proyect-grid'>
                         <Cell col={12}>
                         <div>{this.toggleCategories()}</div>
                         </Cell>
                    </Grid>                 
                </section>
                
            </div>
        )
    }
}
