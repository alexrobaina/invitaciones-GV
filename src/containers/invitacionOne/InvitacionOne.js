import React, { Component } from "react"; 
import background from '../../assets/_24A8216.jpg'
import Countdown from "../../components/countdown/Countdown";


import "./invitacionOne.css";
    
    export default class InvitacionOne extends Component {
 

    render() {
        const currentDate = new Date();
        const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();
 
        return (
    <div>
        <img  className="img-fluid" src={background} alt=""/>
        <div className="container-fluid">
            
            <div className="row">
                    <div className="col-md-12 center title">        
                    <p>Nos casamos! y queremos compartirlo con vos!</p>
                    <p>Faltan:</p>
                    <Countdown date={`${year}-11-16T12:30:00`} />
                </div>
            </div>
        </div>

    </div>

    );
  }
}
