import React, { Component } from "react"; 

import "./infoCard.css";
    
    export default class InfoCard extends Component {
 
    render() {
 
        return (

        <div className="container-fluid">
            <div className="row">
                <div className="text-center container-card col-sm-6">
                    <div className="feature">
                        <div className="text-center">
                        <i class="material-icons">favorite_border</i>
                            <h4 className="uppercase">Ceremonia</h4>
                        </div>
                        <p>La ceremonia es a las 19 hs. en la Parroquia Santa Rita. Es un momento importante para nosotros y nos gustaría que estés ahí para acompañarnos. ¡Te esperamos temprano! Sólo tenés que tocar el botón para recibir todas las indicaciones.</p>
                        <div>
                        <a target="_blank" className="btn btn-info" href="https://goo.gl/maps/oGdK2qJvUzwZAaYL7">Llegar a la ceremonia</a>
                        </div>
                    </div>
                </div>
                <div className="text-center container-card col-sm-6">
                    <div className="feature">
                        <div className="text-center">
                        <i class="material-icons">edit_location</i>
                            <h4 className="uppercase">Fiesta</h4>
                        </div>
                        <p>La ceremonia es a las 19 hs. en la Parroquia Santa Rita. Es un momento importante para nosotros y nos gustaría que estés ahí para acompañarnos. ¡Te esperamos temprano! Sólo tenés que tocar el botón para recibir todas las indicaciones.</p>
                        <div>
                        <a target="_blank" className="btn btn-info" href="https://goo.gl/maps/oGdK2qJvUzwZAaYL7">Llegar a la fiesta</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}
