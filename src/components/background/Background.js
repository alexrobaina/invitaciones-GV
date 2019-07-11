import React, { Component } from 'react';
import background from '../../assets/_24A8284.jpg'
import NameWedding from '../../components/nameWedding/NameWedding';

import './background.css'

export default class Background extends Component {
    

    render () {
        return (
            <div>
                <div>
                    <img  className="img-fluid" src={background} alt=""/>
                        <NameWedding />         
                    <div className="container-fluid">    
                        <div className="row">
                            <div className="col-md-12 center title">        
                                <p>NOS CASAMOS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}