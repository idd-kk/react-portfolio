import React from 'react';
import { Grid, Cell } from 'react-mdl';

class Education extends React.Component 
{
    render()
    {
        return(
            <Grid>

                <Cell col={3}>
                    <p>{this.props.startYear} - {this.props.endYear}</p>
                </Cell>

                <Cell col={9}>
                    <h3>{this.props.schoolDescription}</h3>
                    <h4>{this.props.schoolName}</h4>
                </Cell>

            </Grid>
        )
    }
}

export default Education;