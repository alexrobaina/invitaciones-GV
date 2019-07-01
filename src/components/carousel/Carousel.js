import React, { Component } from "react"; 


import aleSeba from '../../assets/carrousel/_24A7966.jpg'

import img2 from '../../assets/carrousel/_24A8080.jpg'
import img3 from '../../assets/carrousel/_24A8181.jpg'
import img4 from '../../assets/carrousel/_24A8222.jpg'
import img5 from '../../assets/carrousel/_24A8352.jpg'
import img6 from '../../assets/carrousel/_24A8359.jpg'
import img7 from '../../assets/carrousel/_24A8424.jpg'
import img8 from '../../assets/carrousel/_24A8441.jpg'



import "./carousel.css";

const ellos = [
 
    {img: img2},
    {img: img3},
    {img: img4},
    {img: img5},
    {img: img6},
    {img: img7},
    {img: img8}
 
]
    
    export default class Carousel extends Component {
 

    render() {
       
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 top-150 center-flex">
                        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                            <div className="carousel-inner">

                                <div className="carousel-item active">
                                    <img src={aleSeba} className="d-block w-100" alt="..." />
                                </div>
                            {
                                ellos.map(imagenes => {
                                    return (
                                <div className="carousel-item">
                                    <img src={imagenes.img} className="d-block w-100" alt="..." />
                                </div>
                                    )
                            })}

                            

                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>


    );
  }
}
