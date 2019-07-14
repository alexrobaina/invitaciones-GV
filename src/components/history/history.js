import React, { Component } from 'react';
import './history.css'

const history = [
    {
        title: 'NUESTRA HISTORIA',
        Text: '12 años atrás comenzamos esta historia de amor. Muchos de ustedes nos acompañan desde el inicio, otros se fueron sumando en el camino. Todos fueron parte de los momentos mas hermosos, de las idas y vueltas, de los aprendizajes y del continuo crecimiento. Queremos celebrar nuestro amor junto a ustedes, porque creemos que el amor hay que festejarlo y compartirlo.'
    }
]
export default class History extends Component {
    
   
    render () {
    
        return (
            <div>

        {
            history.map(love => {
                return (
                    <div>
                        <div className="title-history">
                            <p>{love.title}</p>
                        </div>
                        <div className="text-p">
                            <p className="text">{love.Text}</p>
                        </div>
                    </div>

                );
            })
        }           

        </div>
      );
    }
  }