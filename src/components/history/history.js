import React, { Component } from 'react';
import './history.css'

const history = [
    {
        title: 'Nuestra Historia',
        Text: 'és un text de farciment usat per la indústria de la tipografia i la impremta. Lorem Ipsum ha estat el text estàndard de la indústria des de lany 1500, quan un impressor desconegut va fer servir una galerada de text i la va mesclar per crear un llibre de mostres tipogràfiques. és un text de farciment usat per la indústria de la tipografia i la impremta. Lorem Ipsum ha estat el text estàndard de la indústria des de lany 1500, quan un impressor desconegut va fer servir una galerada de text i la va mesclar per crear un llibre de mostres tipogràfiques.'   
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
                        <div className="history">
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