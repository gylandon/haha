import React, { Component } from 'react'
import css from '../style.css'  
import Grid from '@material-ui/core/Grid';

export class ShowRel extends Component {
  render() {
    return (
      <div>
      
      {
        this.props.relJson.map((item,index) =>(
            <div className={css.boxView} key ={index}>  
                <Grid container
                spacing={2}
                direction="row"
                justify="flex-start"
                alignItems="flex-start">
                    <Grid item xs={1} className={css.labelStyle}>
                        <span className ={css.font}>Name</span>
                    </Grid>
                    <Grid item xs={4} style={{paddingLeft:"0px",paddingTop:"0px"}}>                    
                        <input type="text" className={css.inputView} readOnly={true} value={item}/>
                    </Grid>
                    <Grid item xs={2} className={css.labelStyle}>
                        <span className ={css.font}>Relationship</span>
                    </Grid>
                    <Grid item xs={5} style={{paddingLeft:"0px",paddingTop:"0px"}}>                    
                        <input type="text" className={css.inputView} readOnly={true} value={this.props.relPairJson[index]}/>
                    </Grid>
                </Grid> 
            </div>
        ))
    }
      </div>
    )
  }
}
