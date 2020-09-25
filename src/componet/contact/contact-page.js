import React, { Component } from 'react';
import{Grid,Cell} from 'react-mdl';
import './contact-styles.scss'

export default class Contact extends Component {
    render() {
        return (
            <div className='contact-body'>
                <Grid className='cotact-grid'>
                    <Cell col={6}>Half Page</Cell>
                    <Cell col={6}>Half Page</Cell>  
                </Grid>
                <h1>Hello</h1>
            </div>
        )
    }
}
