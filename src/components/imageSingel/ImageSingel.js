import React, { Component } from 'react';
import './imageSingel.css'
import image1 from '../../assets/imageSingel/_24A8316.jpg';

export default class ImageSingel extends Component {
    

    render () {
        return (
            <div>

                <img className="img-fluid top-50" src={image1} alt="guacamayos"/>

            </div>
        );
    }
}