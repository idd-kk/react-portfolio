import React from 'react';
//IMG//
import about from '../IMG/about-tag.svg';
import krisImg from '../IMG/kris-img-round.png';
import github from '../IMG/github-logo-squirkle-dark-blue.svg';
import insta from '../IMG/instagram-icon-squircle-dark-blue.svg';
import linked from '../IMG/linkedin-icon-dark-blue-01.svg';


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

        <div className="content contact contact-box">

          <h2>Get in touch via:</h2>
          <h1 id="mail">kris.kay.design@gmail.com</h1>

          <div className="social-links">

            <h4>Follow the links to see more of my work</h4>

            {/* Github */}
            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
              <img
              src={github}
              alt="GitHub logo"
              className="icon pic"
              />
            </a>

            {/* Insta */}
            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
              <img
              src={insta}
              alt="Instagram logo"
              className="icon pic"
              />
            </a>

            {/* LinkedIn */}
            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
              <img
              src={linked}
              alt="LinkedIn logo"
              className="icon pic"
              />
            </a>

        </div>
        </div>
      </div>
    )
  }
}

export default About;