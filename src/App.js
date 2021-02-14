import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

import logo from './IMG/mid-only-kris-kay-logo-dark-04.svg';

class App extends React.Component {
    render() {
        return (
            <div className="demo-big-content">
                <Layout>

                    <Header className="header-color" title={
                        <Link style={{textDecoration: 'none', color: '#f74902'}} to="/"> 
                            <img
                                src={logo}
                                alt="logo"
                                className="logo"
                                />
                        </Link>} scroll>

                        <Navigation>
                            <Link className="nav-link" to="/aboutme">About
                            </Link>

                            <Link className="nav-link" to="/resume">Resume
                            </Link>

                            <Link className="nav-link" to="/projects">Projects
                            </Link>
                        </Navigation>
                    </Header>
                    
                    <Content>
                        <div className="page-content"> </div>
                        <Main />
                    </Content>

                </Layout>
            </div>

        );
    }
}
  
  export default App;
