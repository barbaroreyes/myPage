import React from 'react';
import {Grid,Cell} from 'react-mdl';
import './resume.scss'


export default function resume() {
    return (
        <div>
            <Grid >
                <Cell  col={4}>
                    <div style={{textAlign:'center'}}>
                        <img src='https://5.imimg.com/data5/MB/HI/OK/SELLER-35014352/desktop-and-laptop-computer-repair-services-500x500.png' alt=''
                           style={{height:'200px'}}
                           />
                <div style={{paddingTop:'20vh',color:'grey'}}><h2 >Barbaro Reyes</h2>
                <h3 >Software Developer </h3></div>
                <hr style={{borderTop:'3px solid black',opacity:'0.1'}}/>
                </div>
               
                </Cell>
                <Cell className='resume-right-col' col={4}>
                <h1>IT SCHOOL FULGENCIO OROZ </h1>
                <p>Sep 2002 to Junio 2006 HABANA CUBA </p>
                <hr style={{borderTop:'3px solid #fff',opacity:''}}/>
                <h1>ThinkFull</h1>
                <p>Oct 2020  to March 2021 </p>
                </Cell>
               

            </Grid>
            
        </div>
    )
}
