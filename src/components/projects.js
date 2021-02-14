import React from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
//IMG//
// import Background from '../IMG/bg-kris-kay.svg';
import projects from '../IMG/projects-tag.svg';
import robe from '../IMG/neuron-robe.jpg';
import close from '../IMG/neuron-robe-close-up.jpg';
import printing from '../IMG/3d-printing-neuron-land.jpg';
import github from '../IMG/github-logo-squirkle-dark-blue.svg';

class Projects extends React.Component 
{
  constructor(props) 
  {
    super(props)
    this.state = { activeTab: 0 };
  }

  toggleCategories() 
  {
    if (this.state.activeTab === 0) 
    {
      return(
        <div className="project-grid">

          {/*Project 1*/}
          <Card shadow={5} style={{width:'50%', margin: '2rem auto'}}>

            <CardTitle style={{height: '15rem', background: `url(${printing}) center / cover`}}>
            </CardTitle>
            
            <CardText style={{margin: '0.5rem'}}>
              <h2>Project 1</h2>
              <h5>web design . branding . web development</h5>
              <br></br>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
            </CardText>

            <CardActions style={{margin: '0 1rem 1rem 1rem'}}>
              <a href="#">
                  <img
                  src={github}
                  alt="GitHub logo"
                  className="icon-smol pic"
                  />
              </a>

              <a href="#">
                <button className="btn">See case study</button>
              </a>
            </CardActions>

          </Card>


          {/*Project 2*/}
          <Card shadow={5} style={{width:'50%', margin: '2rem auto'}}>

            <CardTitle style={{height: '15rem', background: `url(${printing}) center / cover`}}>
            </CardTitle>
            
            <CardText style={{margin: '0.5rem'}}>
              <h2>Project 2</h2>
              <h5>web design . branding . web development</h5>
              <br></br>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
            </CardText>

            <CardActions style={{margin: '0 1rem 1rem 1rem'}}>
              <a href="#">
                  <img
                  src={github}
                  alt="GitHub logo"
                  className="icon-smol pic"
                  />
              </a>

              <a href="#">
                <button className="btn">See case study</button>
              </a>
            </CardActions>

          </Card>


          {/*Project 3*/}
          <Card shadow={5} style={{width:'50%', margin: '2rem auto'}}>

            <CardTitle style={{height: '15rem', background: `url(${printing}) center / cover`}}>
            </CardTitle>
            
            <CardText style={{margin: '0.5rem'}}>
              <h2>Project 3</h2>
              <h5>web design . branding . web development</h5>
              <br></br>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
            </CardText>

            <CardActions style={{margin: '0 1rem 1rem 1rem'}}>
              <a href="#">
                  <img
                  src={github}
                  alt="GitHub logo"
                  className="icon-smol pic"
                  />
              </a>

              <a href="#">
                <button className="btn">See case study</button>
              </a>
            </CardActions>

          </Card>

        </div>
      )
    } 
    else if (this.state.activeTab === 1)
    {
      return(
        <div className="projects-grid">

          {/*Project 4*/}
          <Card shadow={5} style={{width:'50%', margin: '2rem auto'}}>

            <CardTitle style={{height: '15rem', background: `url(${robe}) center / cover`}}>
            </CardTitle>
            
            <CardText style={{margin: '0.5rem'}}>
              <h2>Project 4</h2>
              <h5>web design . branding . web development</h5>
              <br></br>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
            </CardText>

            <CardActions style={{margin: '0 1rem 1rem 1rem'}}>
              <a href="#">
                  <img
                  src={github}
                  alt="GitHub logo"
                  className="icon-smol pic"
                  />
              </a>

              <a href="#">
                <button className="btn">See case study</button>
              </a>
            </CardActions>

          </Card>


          {/*Project 5*/}
          <Card shadow={5} style={{width:'50%', margin: '2rem auto'}}>

            <CardTitle style={{height: '15rem', background: `url(${robe}) center / cover`}}>
            </CardTitle>
            
            <CardText style={{margin: '0.5rem'}}>
              <h2>Project 5</h2>
              <h5>web design . branding . web development</h5>
              <br></br>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
            </CardText>

            <CardActions style={{margin: '0 1rem 1rem 1rem'}}>
              <a href="#">
                  <img
                  src={github}
                  alt="GitHub logo"
                  className="icon-smol pic"
                  />
              </a>

              <a href="#">
                <button className="btn">See case study</button>
              </a>
            </CardActions>

          </Card>


          {/*Project 6*/}
          <Card shadow={5} style={{width:'50%', margin: '2rem auto'}}>

            <CardTitle style={{height: '15rem', background: `url(${robe}) center / cover`}}>
            </CardTitle>
            
            <CardText style={{margin: '0.5rem'}}>
              <h2>Project 6</h2>
              <h5>web design . branding . web development</h5>
              <br></br>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
            </CardText>

            <CardActions style={{margin: '0 1rem 1rem 1rem'}}>
              <a href="#">
                  <img
                  src={github}
                  alt="GitHub logo"
                  className="icon-smol pic"
                  />
              </a>

              <a href="#">
                <button className="btn">See case study</button>
              </a>
            </CardActions>

          </Card>

        </div>
      )
    } 
    else if (this.state.activeTab === 2)
    {
      return (
        <div className="projects-grid">

          {/*Project 7*/}
          <Card shadow={5} style={{width:'50%', margin: '2rem auto'}}>

            <CardTitle style={{height: '15rem', background: `url(${close}) center / cover`}}>
            </CardTitle>
            
            <CardText style={{margin: '0.5rem'}}>
              <h2>Project 7</h2>
              <h5>web design . branding . web development</h5>
              <br></br>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
            </CardText>

            <CardActions style={{margin: '0 1rem 1rem 1rem'}}>
              <a href="#">
                  <img
                  src={github}
                  alt="GitHub logo"
                  className="icon-smol pic"
                  />
              </a>

              <a href="#">
                <button className="btn">See case study</button>
              </a>
            </CardActions>

          </Card>


          {/*Project 8*/}
          <Card shadow={5} style={{width:'50%', margin: '2rem auto'}}>

            <CardTitle style={{height: '15rem', background: `url(${close}) center / cover`}}>
            </CardTitle>
            
            <CardText style={{margin: '0.5rem'}}>
              <h2>Project 8</h2>
              <h5>web design . branding . web development</h5>
              <br></br>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
            </CardText>

            <CardActions style={{margin: '0 1rem 1rem 1rem'}}>
              <a href="#">
                  <img
                  src={github}
                  alt="GitHub logo"
                  className="icon-smol pic"
                  />
              </a>

              <a href="#">
                <button className="btn">See case study</button>
              </a>
            </CardActions>

          </Card>


          {/*Project 9*/}
          <Card shadow={5} style={{width:'50%', margin: '2rem auto'}}>

            <CardTitle style={{height: '15rem', background: `url(${close}) center / cover`}}>
            </CardTitle>
            
            <CardText style={{margin: '0.5rem'}}>
              <h2>Project 9</h2>
              <h5>web design . branding . web development</h5>
              <br></br>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
            </CardText>

            <CardActions style={{margin: '0 1rem 1rem 1rem'}}>
              <a href="#">
                  <img
                  src={github}
                  alt="GitHub logo"
                  className="icon-smol pic"
                  />
              </a>

              <a href="#">
                <button className="btn">See case study</button>
              </a>
            </CardActions>

          </Card>

        </div>
      )
    }
  }

  render () {
    return (
      <div className="grid">

        <div className="title">
          <img
            src={projects}
            alt="tag"
            className="tag"
          />
        </div>

        <div className="content">

          <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
              <Tab>Branding</Tab>
              <Tab>iOS</Tab>
              <Tab>Web</Tab>
          </Tabs>

          <div>
            {this.toggleCategories()}
          </div>

        </div>
      </div>
    )
  }
}

export default Projects;

// class Projects extends React.Component {
//   render() {
//     return(
//       <div className="grid">

//         <div className="title">
//           <img
//             src={projects}
//             alt="projects"
//             className="tag"
//           />
//         </div>
     
//         <div className="content project-grid">
//           <img
//             src={printing}
//             alt="portfolio img"
//             className="port-img"
//           />
//           <img
//             src={close}
//             alt="portfolio img"
//             className="port-img"
//           />
//           <img
//             src={robe}
//             alt="portfolio img"
//             className="port-img"
//           />
//         </div>

//       </div>
//     )
//   }
// }
