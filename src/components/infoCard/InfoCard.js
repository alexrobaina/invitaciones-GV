import React, { Component } from "react"; 

import "./infoCard.css";

const cards = [
    {
        title: 'Ceremonia',
        text: 'La ceremonia es a las 12 hs. en la Parroquia Santa Rita en Suipacha. Es un momento importante para nosotros y nos gustaría que estés ahí para acompañarnos. ¡Te esperamos temprano! Sólo tenés que tocar el botón para recibir todas las indicaciones.'   ,
        link: 'https://goo.gl/maps/oGdK2qJvUzwZAaYL7',
        icon: 'favorite_border'
    },
    {
        title: 'Fiesta',
        text: 'La Fiesta es a las 16:30 hs. en la algun lugar de Suipacha. Es un momento importante para nosotros y nos gustaría que estés ahí para acompañarnos. ¡Te esperamos temprano! Sólo tenés que tocar el botón para recibir todas las indicaciones.',
        link: 'https://goo.gl/maps/oGdK2qJvUzwZAaYL7',
        icon: 'favorite_border'
    }
]
    
    export default class InfoCard extends Component {
 
    render() {
 
        return (

        <div className="container-fluid">
            <div className="row">
                {
                    cards.map(locations => {
                        return(

                    <div className="text-center container-card col-sm-6">
                        <div className="feature">
                            <div className="text-center">
                            <i class="material-icons">{locations.icon}</i>
                                <h4 className="uppercase">{locations.title}</h4>
                            </div>
                            <p>{locations.text}</p>
                            <div>
                            <a target="_blank" className="btn btn-info" href={locations.link}>Llegar a la ceremonia</a>
                            </div>
                        </div>
                    </div>
                        )
                    })
                }
            </div>
        </div>
    );
  }
}
