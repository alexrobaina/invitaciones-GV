import React, { Component } from "react"; 
import Countdown from "../../components/countdown/Countdown";
import Background from "../../components/background/Background";
import History from "../../components/history/history";
import InfoCard from "../../components/infoCard/InfoCard";


import "./invitacionOne.css";
import ConfirmAssistance from "../../components/confirmAssistance/ConfirmAssistance";
import DataBack from "../../components/dataBank/dataBank";
import TwoImage from "../../components/twoImage/TwoImage";
import ImageSingel from "../../components/imageSingel/ImageSingel";
    
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
                <Countdown date={`${year}-11-16T12:30:00`} />
            </div>
        </div>
    
        {/* END */}

        <InfoCard />

        <TwoImage />

        <DataBack />

        <ImageSingel />
        
        {/* <ConfirmAssistance /> */}

    </div>

    );
  }
}
