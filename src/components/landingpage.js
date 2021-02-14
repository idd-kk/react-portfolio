import React from 'react';

import neuron from '../IMG/neuron.jpg'


class Landing extends React.Component {
    render() {
      return(
        <div className="land-grid">

          <div className="neuron-img">    
            <img
              src={neuron}
              alt="3D printed neuron"
              className="neuron"
            />
          </div>
            
          <div className="banner-box intro">
            <h1>Interaction Designer & Front-end Developer for Web and iOS</h1>
            <br></br>
            <br></br>
            <h4>Interface Design | UX | JavaScript | CSS | Unity | Xcode | ARkit
            </h4>
          </div>

        </div>
      )
    }
  }
  
  export default Landing;
  