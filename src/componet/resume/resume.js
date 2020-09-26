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
                <h1>Resume Page</h1>
                <p>Lorerkniogsicp 9dgc[dg[8d8 98fdtf8</p>
                <hr style={{borderTop:'3px solid #fff',opacity:''}}/>
                <h1>Resume Page</h1>
                <p>Lorerkniogsicp 9dgc[dg[8d8 98fdtf8</p>
                <hr style={{borderTop:'3px solid #fff',opacity:''}}/>
                <h1>Resume Page</h1>
                <p>Lorerkniogsicp 9dgc[dg[8d8 98fdtf8</p>
                </Cell>
               

            </Grid>
            
        </div>
    )
}
