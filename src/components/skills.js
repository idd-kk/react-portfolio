import React from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';

class Skills extends React.Component
{
    render() 
    {
        return(
            <Grid>

                <Cell  col={12} >
                    <div style={{display: 'flex'}}>
                        <h5>{this.props.skill}</h5>
                    </div>
                    <div style={{padding: '0.5em'}}>
                        <ProgressBar style={{margin: 'auto', width: '60%'}} progress={this.props.progress} />
                    </div>
                </Cell>

            </Grid>
        )
    }
}

export default Skills;