import React, { Component } from "react"; 



import "./dataBank.css";
    
    export default class DataBack extends Component {
 

    render() {
       
        return (
            <div>
                    <div className="row">
                        <div className="col-md-12 center-flex top-190 text-regalo">
                            <p className="regalo">¿Queres hacernos un regalo?</p>
                        </div>
                        <div className="col-md-12 center-flex text-regalo">
                            <p className="text-regalo">Podes ayudarnos con la luna de miel haciendo un depósito o transferencia a  <br/> nuestra cuenta bancaria. Muchas gracias!!!</p>
                        </div>
                        <div className="col-md-12 center-flex">
                        <button type="button" class="btn btn-info" data-toggle="modal" data-target=".bd-example-modal-sm">Ver datos bancarios</button>

                            <div class="modal fade bd-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-sm">
                                    <div class="modal-content center-flex">

                                        <p>Datos bacarios</p>
                                        <p>Banco Galicia</p>
                                        <p>CBU: 2312423532645634523</p>
                                        <p>Numero de cuenta: 444023203040</p>
                                        <p>Nombre: Alejandra</p>
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


    );
  }
}
