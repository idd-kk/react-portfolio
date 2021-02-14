import React from 'react';
//IMG//
import about from '../IMG/about-tag.svg';
import krisImg from '../IMG/kris-img-round.png';
import contact from '../IMG/contact-tag.svg'


class About extends React.Component {
  render() {
    return(
      <div className="grid">
      
        <div className="title">
          <img
            src={about}
            alt="avatar"
            className="tag"
          />
        </div>
        
        <img
          src={krisImg}
          alt="avatar"
          className="avatar-img pic"
        />

        <div className="content banner-box">
          <p><strong>I'm a front-end developer trained in interaction design.</strong>
            <br></br>
            Continuously upgrading my skills, learning new software, and playing with cutting-edge technology are the most delightful uses of my time.
          </p>
        </div>

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
      </div>
    )
  }
}

export default About;