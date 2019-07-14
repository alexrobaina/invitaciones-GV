import React, { Component } from "react"; 
// icons
import icons1 from '../../assets/icons/400w/flor1.png'
import icons2 from '../../assets/icons/400w/flor2.png'
import icons3 from '../../assets/icons/400w/flor3.png'

// Photos
import image1 from '../../assets/carsInfo/_24A8173.jpg'
import image2 from '../../assets/carsInfo/_24A8278.jpg'
import image3 from '../../assets/carsInfo/_24A8323.jpg'

import "./infoCard.css";

const cards = [
    {
        title: 'Civil',
        text: 'Te esperamos el jueves 14 de Noviembre en el Registro Civil de Suipacha,San Martin 319. Luego compartimos todos juntos un almuerzo en Las Brisas.',
        link: 'https://goo.gl/maps/Ud2TMSH9o2K987hLA',
        icon: icons1,
        photo: image1,
        button: '¿Cómo llego?'
    },
    {
        title: 'Ceremonia',
        text: 'La ceremonia es a las 16:30 hs. en la Parroquia Nuestra Señora del Rosario, Rivadavia 268, Suipacha. Te esperamos el sábado 16 de noviembre para compartir este gran momento con nosotros.',
        link: 'https://goo.gl/maps/LKis9rLVBcMsDNu79',
        icon: icons2,
        photo: image2,
        button: '¿Cómo llego?'
    },
    {
        title: 'Fiesta',
        text: 'Después de la ceremonia seguimos festejando en la Sociedad rural de Suipacha. Queremos que vengan a bailar y celebrar el comienzo de este nuevo camino juntos.',
        link: 'https://goo.gl/maps/UKAyUFH8RXAGmjFBA',
        icon: icons3,
        photo: image3,
        button: '¿Cómo llego?'
    }
]
    
    export default class InfoCard extends Component {
 
    render() {
 
        return (
            <div>
                {
                    cards.map(locations => {
                        return(
                            <div>
                            <div className="container-fluid">
                                <div className="row">
                                    <div>
                                        <div className="text-center container-card col-md-12">
                                            <div className="feature">
                                                <div className="text-center">
                                                    <img class="iconCard" src={locations.icon} alt="guacamayos"/>
                                                    <h4 className="title-card">{locations.title}</h4>
                                                </div>
                                                <div className="text-p">
                                                    <p className="text-card">{locations.text}</p>
                                                </div>
                                                <div className="button-info">
                                                    <a target="_blank" className="btn btn-info" href={locations.link}>{locations.button}</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                <div className="image-ubications">
                                    <img className="img-fluid" src={locations.photo} alt="guacamayos"/>
                                </div>
                            
                            </div>

                        )
                    })
                }
                </div>
    );
  }
}

