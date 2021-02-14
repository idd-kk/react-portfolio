import React from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
//IMG//
import Background from '../IMG/bg-kris-kay.svg';
// import projects from '../IMG/projects-tag.svg';
// import robe from '../IMG/neuron-robe.jpg';
// import close from '../IMG/neuron-robe-close-up.jpg';
// import printing from '../IMG/3d-printing-neuron-land.jpg';

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
        <div className="projects-grid">

          {/*Project 1*/}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: `url(${Background}) center / cover`}}>React Project #1</CardTitle>
              <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
              </CardText>
              <CardActions butons>
                  <a href="http://www.github.com" target="_blank">
                  <Button colored>GitHub</Button>
                  </a>
                  <a href="http://www.github.com" target="_blank">
                  <Button colored>CodePen</Button>
                  </a>
                  <a href="http://www.github.com" target="_blank">
                  <Button colored>Live Demo</Button>
                  </a>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
              </CardMenu>
          </Card>


          {/*Project 2*/}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: `url(${Background}) center / cover`}}>React Project #1</CardTitle>
              <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
              </CardText>
              <CardActions butons>
                  <a href="http://www.github.com" target="_blank">
                  <Button colored>GitHub</Button>
                  </a>
                  <a href="http://www.github.com" target="_blank">
                  <Button colored>CodePen</Button>
                  </a>
                  <a href="http://www.github.com" target="_blank">
                  <Button colored>Live Demo</Button>
                  </a>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
              </CardMenu>
          </Card>


          {/*Project 3*/}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: `url(${Background}) center / cover`}}>React Project #1</CardTitle>
              <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
              </CardText>
              <CardActions butons>
                  <a href="http://www.github.com" target="_blank">
                  <Button colored>GitHub</Button>
                  </a>
                  <a href="http://www.github.com" target="_blank">
                  <Button colored>CodePen</Button>
                  </a>
                  <a href="http://www.github.com" target="_blank">
                  <Button colored>Live Demo</Button>
                  </a>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
              </CardMenu>
          </Card>
        </div>
      )
    } 
    else if (this.state.activeTab === 1)
    {
      return(
        <div className="projects-grid">

          {/*Project 1*/}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>

            <CardTitle style={{color: '#fff', height: '176px', background: `url(${Background}) center / cover`}}
            >React Project #1
            </CardTitle>

            <CardText>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
            </CardText>

            <CardActions butons>
                <a href="http://www.github.com" target="_blank">
                <Button colored>GitHub</Button>
                </a>
                <a href="http://www.github.com" target="_blank">
                <Button colored>CodePen</Button>
                </a>
                <a href="http://www.github.com" target="_blank">
                <Button colored>Live Demo</Button>
                </a>
            </CardActions>

            <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
            </CardMenu>

          </Card>


          {/*Project 2*/}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: `url(${Background}) center / cover`}}
              >React Project #1
              </CardTitle>

              <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
              </CardText>

              <CardActions butons>
                  <a href="http://www.github.com" target="_blank">
                  <Button colored>GitHub</Button>
                  </a>
                  <a href="http://www.github.com" target="_blank">
                  <Button colored>CodePen</Button>
                  </a>
                  <a href="http://www.github.com" target="_blank">
                  <Button colored>Live Demo</Button>
                  </a>
              </CardActions>

              <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
              </CardMenu>

          </Card>


          {/*Project 3*/}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: `url(${Background}) center / cover`}}
            >React Project #1
            </CardTitle>

            <CardText>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
            </CardText>

            <CardActions butons>
                <a href="http://www.github.com" target="_blank">
                <Button colored>GitHub</Button>
                </a>
                <a href="http://www.github.com" target="_blank">
                <Button colored>CodePen</Button>
                </a>
                <a href="http://www.github.com" target="_blank">
                <Button colored>Live Demo</Button>
                </a>
            </CardActions>

            <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
            </CardMenu>

          </Card>
        </div>
      )
    } 
    else if (this.state.activeTab === 2)
    {
      return (
        <div className="projects-grid">

          {/*Project 1*/}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>

            <CardTitle style={{color: '#fff', height: '176px', background: `url(${Background}) center / cover`}}
            >React Project #1
            </CardTitle>

            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
            </CardText>

            <CardActions butons>
              <a href="http://www.github.com" target="_blank">
              <Button colored>GitHub</Button>
              </a>
              <a href="http://www.github.com" target="_blank">
              <Button colored>CodePen</Button>
              </a>
              <a href="http://www.github.com" target="_blank">
              <Button colored>Live Demo</Button>
              </a>
            </CardActions>

            <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
            </CardMenu>

          </Card>


          {/*Project 2*/}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              
            <CardTitle style={{color: '#fff', height: '176px', background: `url(${Background}) center / cover`}}
            >React Project #1
            </CardTitle>

            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
            </CardText>
            
            <CardActions butons>
                <a href="http://www.github.com" target="_blank">
                <Button colored>GitHub</Button>
                </a>
                <a href="http://www.github.com" target="_blank">
                <Button colored>CodePen</Button>
                </a>
                <a href="http://www.github.com" target="_blank">
                <Button colored>Live Demo</Button>
                </a>
            </CardActions>

            <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
            </CardMenu>

          </Card>


          {/*Project 3*/}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: `url(${Background}) center / cover`}}
              >React Project #1
              </CardTitle>
              
              <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
              </CardText>

              <CardActions butons>
                <a href="http://www.github.com" target="_blank">
                <Button colored>GitHub</Button>
                </a>
                <a href="http://www.github.com" target="_blank">
                <Button colored>CodePen</Button>
                </a>
                <a href="http://www.github.com" target="_blank">
                <Button colored>Live Demo</Button>
                </a>
              </CardActions>

              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
              </CardMenu>

          </Card>
        </div>
      )
    }
  }

  render () {
    return (
      <div>
          <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
              <Tab>React</Tab>
              <Tab>Unity3D</Tab>
              <Tab>Unreal Engine 4</Tab>
          </Tabs>

          <Grid>
              <Cell col={12}>
                  <div className="content">{this.toggleCategories()}</div>
              </Cell>
          </Grid>
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
