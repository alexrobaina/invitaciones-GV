import React, { Component } from "react"; 
import Countdown from "../../components/countdown/Countdown";
import Background from "../../components/background/Background";
import History from "../../components/history/history";
import InfoCard from "../../components/infoCard/InfoCard";


import "./invitacionOne.css";
import Parallax from "../../components/parallax/Parallax";
import Carousel from "../../components/carousel/Carousel";
import ConfirmAssistance from "../../components/confirmAssistance/ConfirmAssistance";
    
export default class InvitacionOne extends Component {


    render() {
        const currentDate = new Date();
        const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();
 
        return (
    <div>

        <Background />

        <History />

        {/* Timer */}
        
        <div>
            <div className="count">
                <p className="timer">Faltan:</p>
                <Countdown date={`${year}-11-16T12:30:00`} />
            </div>
        </div>
    
        {/* END */}

        <InfoCard />

        <Parallax />

        <Carousel />
        
        <ConfirmAssistance />

    </div>

    );
  }
}
