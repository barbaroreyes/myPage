import React, { Component } from 'react';
import{} from 'react-mdl';
import './contact-style.scss';
import work from '../../work.jpg';
import{Grid,Cell,ListItem,List,ListItemContent} from 'react-mdl'


    export default class Contact extends Component {
        render() {
            return (
         <div className='contact-body'>
                <Grid className='contact-grid'>
                        <Cell col={6}>
                            <div>
                            <h1>Barbaro Reyes</h1>
                            <img className='pict' src={work}
                            alt='avatar'
                            style={{height:'250px'}}
                            />
                            <div> <p style={{width:'75%',margin:'auto',paddingTop:'1em'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, consequatur optio voluptate aspernatur ab modi soluta animi maiores similique debitis eius omnis, suscipit est placeat iusto recusandae nihil earum ex? Doloremque, eligendi. Adipisci expedita est, at deserunt eaque maxime nesciunt.</p></div>
         </div>    
                        </Cell>
                   <Cell col={6}>
                            <h4>Contact me</h4>
                            <hr/>
                    <div className='contact-list'>
                        <List>
                             <ListItem>
                                <ListItemContent style={{fontSize:'25px',fontFamily:'Averia Gruesa Libre'}} >
                                <i className="fas fa-phone-square">(512)6086054</i></ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize:'25px',fontFamily:'Averia Gruesa Libre'}} >
                                <i class="fas fa-envelope-square">barbarotrabajo@gmail.com</i>
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent 
                                 style={{fontSize:'25px',fontFamily:'Averia Gruesa Libre'}} >
                                <i class="fab fa-github">https://github.com/barbaroreyes</i>
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent 
                                 style={{fontSize:'25px',fontFamily:'Averia Gruesa Libre'}} >
                                 <i className=" fab fa-linkedin">https://www.linkedin.com/in/barbaro-reyes-b023aa1a7/</i>
                                </ListItemContent>
                            </ListItem>
                            <div className='socials-liks'>
                              {/* linkedIn */}
                                    <a  className ='link' href="https://www.linkedin.com/in/barbaro-reyes" rel='noopener noreferrer' target='_black'>
                                     <i className=" fab fa-linkedin"></i>
                                    </a>
                                      {/* Gihub */}
                                      <a href="https://github.com/barbaroreyes" rel='noopener noreferrer' target='_black'>
                                      <i className="fab fa-github-square"></i>
                                    </a>
                                    

                         </div>
                            
                            
                            
                        </List>
                    </div>
                   </Cell>  
                </Grid>
            </div>
            )
        }
    }
