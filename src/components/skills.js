import React from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';

class Skills extends React.Component
{
    render() 
    {
        return(
            <Grid>

                <Cell col={3}>
                    <div style={{display: 'flex'}}>
                        <h5>{this.props.skill}</h5>
                    </div>
                </Cell>

                <Cell col={9}>
                    <ProgressBar style={{margin: 'auto', width: '60%'}} progress={this.props.progress} />
                </Cell>

            </Grid>
        )
    }
}

export default Skills;