import React, { Component } from 'react';

import './twoImage.css'

import image1 from '../../assets/twoImage/image1.jpeg'
import image2 from '../../assets/twoImage/image2.jpeg'

export default class TwoImage extends Component {
    

    render () {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-6 col-sm-6 col-md-6 top30px">
                            <img className="img-fluid" src={image1} alt="guacamayos" />
                        </div>
                        <div className="col-xs-6 col-sm-6 col-md-6 top30px">
                            <img className="img-fluid" src={image2} alt="guacamayos" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}