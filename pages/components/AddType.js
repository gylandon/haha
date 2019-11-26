import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';

const position = {
    position:"relative",
    left:"15%",
    top:"10px"
}
export class AddType extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick =(e)=>{
        let name = e.target.name;
        let val = e.target.value;
        this.props.onClick(name,val)
    }

    render() {
        return (
            <Grid container spacing={3}
            direction="column"
            justify="flex-start"
            alignItems="flex-start" style={position}>
                <Grid item xs={12}>
                    <button name="Person" className="btn btn-info" style={{borderRadius:"4px"}} onClick={this.handleClick}>Add Person</button>
                </Grid>
                <Grid item xs={12} style={{marginTop:"10px"}}>
                    <button name="Organisation" className="btn btn-primary" style={{borderRadius:"4px"}} onClick={this.handleClick}>Add Organisation</button>
                </Grid>
            </Grid>
        )
    }
}
