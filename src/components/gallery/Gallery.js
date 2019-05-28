import React, { Component } from "react";

import "./gallery.css";

const galleryImage = [
  {
    img:
      "https://images.unsplash.com/photo-1558897559-906655523183?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
  },
  {
    img:
      "https://images.unsplash.com/photo-1558942548-89bf85600e32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
  },
  {
    img:
      "https://images.unsplash.com/photo-1558904862-a276b092585c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    img:
      "https://images.unsplash.com/photo-1558855818-c43af5318faa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
  },
  {
    img:
      "https://images.unsplash.com/photo-1558897559-906655523183?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
  },
  {
    img:
      "https://images.unsplash.com/photo-1558942548-89bf85600e32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
  },
  {
    img:
      "https://images.unsplash.com/photo-1558904862-a276b092585c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    img:
      "https://images.unsplash.com/photo-1558855818-c43af5318faa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
  },
  {
    img:
      "https://images.unsplash.com/photo-1558897559-906655523183?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
  },
  {
    img:
      "https://images.unsplash.com/photo-1558942548-89bf85600e32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
  },
  {
    img:
      "https://images.unsplash.com/photo-1558904862-a276b092585c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    img:
      "https://images.unsplash.com/photo-1558855818-c43af5318faa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
  }
  
];

export default class Gallery extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            {galleryImage.map(imagenes => {
              return (
                <div className="col-md-3 top-50">
                  <div class="card">
                    <img
                      className="img-fluid"
                      src={imagenes.img}
                      class="card-img-top"
                      alt="guacamayosvisual"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
