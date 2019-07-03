import React, { Component } from 'react';

import image1 from '../../assets/imageSingel/WhatsApp Image 2019-06-21 at 12.11.00 PM (2).jpeg';

export default class ImageSingel extends Component {
    

    render () {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 top30px">
                            <img className="img-fluid" src={image1} alt="guacamayos"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}