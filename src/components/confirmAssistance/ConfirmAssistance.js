import React, { Component } from "react"; 

import './confirmAssistance.css';
    
    

export default class ConfirmAssistance extends Component {
    constructor (props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            check: ''
        }

        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    handleSubmit(event) {
        alert('An essay was submitted: ' + this.state.value);
        event.preventDefault();
      }

    render () {
        return (
        <div className="form-assistence">
            <div className="title-assistence text-center">
                <p>Confirmá tu asistencia</p>
            </div>
            

            <form onSubmit={this.handleSubmit}>
                <div class="form-group">

                <label for="exampleInputEmail1">Nombre completo</label>
                <input value={this.state.value} onChange={this.handleChange} type="text" class="form-control" id="exampleInputEmail1" placeholder="Nombre" />

            </div>

            <div class="form-group">

                <label for="exampleInputEmail1">Ingrese su email</label>
                <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email" />

            </div>

            <div class="form-group form-check">
            
                <input type="checkbox" value="civil" class="form-check-input" id="Check1" />
                <label class="form-check-label" for="Check1">Civil</label>

            </div>
            <div class="form-group form-check">
            
                <input type="checkbox" value="ceremonia" class="form-check-input" id="Check2" />
                <label class="form-check-label" for="Check2">Ceremonia</label>

            </div>
            <div class="form-group form-check">
            
                <input type="checkbox" value="fiesta" class="form-check-input" id="Check3" />
                <label class="form-check-label" for="Check3">Fiesta</label>

            </div>
            
                <button type="submit" value="Submit" class="btn btn-info">Confirmar</button>
            
            </form>

            <div className="finish"></div>

        </div>
           
    );
  }
}