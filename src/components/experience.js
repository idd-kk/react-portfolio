import React from 'react';
import { Grid, Cell } from 'react-mdl';

class Experience extends React.Component 
{
    render()
    {
        return(

            <Grid>

                <Cell col={3}>
                    <p>{this.props.startYear} - {this.props.endYear}</p>
                </Cell>

                <Cell col={9}>
                    <h3>{this.props.jobName}</h3>
                    <h4>{this.props.jobplace}</h4>
                    <p><strong>+</strong>{this.props.jobDescription0}</p>
                    <br></br>
                    <p><strong>+</strong>{this.props.jobDescription1}</p>
                    <br></br>
                    <p><strong>+</strong>{this.props.jobDescription2}</p>
                </Cell>

            </Grid>
        )
    }
}

export default Experience;