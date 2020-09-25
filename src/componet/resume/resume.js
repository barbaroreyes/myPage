import React from 'react';
import {Grid,Cell} from 'react-mdl';
import './resume.scss'


export default function resume() {
    return (
        <div>
            <Grid >
                <Cell  col={4}>
                    <div style={{textAlign:'center'}}>
                        <img src='http://www.shareicon.net/download/2015/0918/103157_man_512X512.png' alt=''/>
                    </div>
                <h1>Resume Page</h1>
                </Cell>
                <Cell className='resume-right-col' col={4}>
                <h1>Resume Page</h1>
                </Cell>
               

            </Grid>
            
        </div>
    )
}
