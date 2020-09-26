import React, { Component } from 'react';
import {Tabs,Tab,Grid,Cell,Card,CardTitle,CardText,CardActions,Button}from 'react-mdl';
   




export default class Projects extends Component {
    constructor(props){
     super(props)
     this.state ={
         activeTab:0};
    }
    toggleCategories(){
        if(this.state.activeTab===0){
         return(<div>
           <Card shadow={5} style={{width:'450',margin:'auto'}}>
                <CardTitle style={{color:'#fff',height:'176px',background:'url(https://img-a.udemycdn.com/course/750x422/1199058_8435_3.jpg)center/cover'}}></CardTitle>
                <CardText className='tc'>{}</CardText>
                <CardActions border>
                   <Button colored>Github</Button>
                   <Button colored>CodePen</Button>
                   <Button colored>LiveDemo</Button>
                </CardActions>
            </Card>  
        </div> )

        }else if(this.state.activeTab ===1)
       return (<div>
        <Card  shadow={5} style={{width:'450',margin:'auto'}}>
             <CardTitle style={{color:'#fff',height:'176px',background:'url(https://img.icons8.com/clouds/2x/react.png)center/cover'}}></CardTitle>
             <CardText className='tc'>{}</CardText>
             <CardActions border>
                <Button colored>Github</Button>
                <Button colored>CodePen</Button>
                <Button colored>LiveDemo</Button>
             </CardActions>
         </Card>  
     </div>)

       else if (this.state.activeTab===2){
        return (<div>
            <Card  shadow={5} style={{width:'450',margin:'auto'}}>
                 <CardTitle style={{color:'#fff',height:'176px',background:'url(https://cdn01.alison-static.net/courses/1200/alison_courseware_intro_1200.jpg)center/cover'}}></CardTitle>
                 <CardText className='tc'>{}</CardText>
                 <CardActions border>
                    <Button colored>Github</Button>
                    <Button colored>CodePen</Button>
                    <Button colored>LiveDemo</Button>
                 </CardActions>
             </Card>  
         </div>) 
            }
            else if (this.state.activeTab===2){
                return (<div>
                    <Card  shadow={5} style={{width:'450',margin:'auto'}}>
                         <CardTitle style={{color:'#fff',height:'176px',background:'url(https://cdn01.alison-static.net/courses/1200/alison_courseware_intro_1200.jpg)center/cover'}}></CardTitle>
                         <CardText className='tc'>{}</CardText>
                         <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                         </CardActions>
                     </Card>  
                 </div>) 
                    }
            else{
                return(<div>
                    <Card  shadow={5} style={{width:'450',margin:'auto'}}>
                         <CardTitle style={{color:'#fff',height:'176px',background:'url(https://techcommunity.microsoft.com/t5/image/serverpage/image-id/184300iC067819AE50300F4/image-size/medium?v=1.0&px=400)center/cover'}}></CardTitle>
                         <CardText className='tc'>{}</CardText>
                         <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                         </CardActions>
                     </Card>  
                 </div>)
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
