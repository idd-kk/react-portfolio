import React from 'react';

import contact from '../IMG/contact-tag.svg'

class Contact extends React.Component {
  render() {
    return(
      <div className="grid">

        <div className="title">
          <img
            src={contact}
            alt="contact"
            className="tag"
          />
        </div>

        <div className="content contact-box">

          <h2>Make contact via:</h2>
          <h1 id="mail">kris.kay.design@gmail.com</h1>

          <div className="social-links">
    
            <h4>Follow the links to see more of my work</h4>

            {/* LinkedIn */}
            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-linkedin-square" aria-hidden="true" />
            </a>

            {/* Github */}
            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-github-square" aria-hidden="true" />
            </a>

            {/* Freecodecamp */}
            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-free-code-camp" aria-hidden="true" />
            </a>

            </div>
        </div>

      </div>
    )
  }
}

export default Contact;