import React, { Component } from 'react'
import css from '../style.css'  
import ReactTooltip from 'react-tooltip'
import { IoMdInformationCircleOutline } from "react-icons/io";
import Grid from '@material-ui/core/Grid';
import { ShowInfo,ShowInfoBView } from './Verify'

export class FormGroup extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange =(e)=>{
        let name = e.target.name
        let val = e.target.value
        this.props.onChange(name,val)
    }
    render() {
        return (
            <div style={{flexGrow:"1"}}>
                <Grid container spacing={2}
                direction="row"
                justify="flex-start"
                alignItems="flex-start">
                    <Grid item xs={this.props.display==="none"?3:2} className={css.labelStyle}>                    
                        <span className ={css.font}>{this.props.label}</span>
                    </Grid>
                    <Grid item xs={this.props.display==="none"?9:8} style={{paddingLeft:"0px",paddingTop:"0px"}}>                    
                        <input type='text' className={css.inputCon} name = {this.props.name} required ={this.props.required}
                        placeholder={this.props.placeholder} value={this.props.value} readOnly={this.props.readOnly}
                        onChange={this.props.onChange}/>
                    </Grid>
                    {
                        this.props.verify=="true"? 
                        <Grid item xs={2}>
                            <ShowInfo onClick={this.props.onClick} all={this.props.all} name={this.props.name}/>
                        </Grid>
                        :
                        <Grid item xs={2}>
                            <a data-tip={this.props.tip} style={{display:this.props.display}} data-for={this.props.id}><IoMdInformationCircleOutline/></a>
                            <ReactTooltip id={this.props.id} type={this.props.type} effect="solid" place="left" multiline={true}/>
                        </Grid>
                    }
                   
                </Grid>
                
            </div>
        )
    }
}
export class FormGroupView extends Component {
    constructor(props) {
        super(props);
      
    }
  
    render() {
        return (
            <div style={{flexGrow:"1"}}>
                <Grid container spacing={2}
                direction="row"
                justify="flex-start"
                alignItems="flex-start">
                    <Grid item xs={this.props.display==="none"?3:2} className={css.labelStyle}>                    
                        <span className ={css.font}>{this.props.label}</span>
                    </Grid>
                    <Grid item xs={this.props.display==="none"?9:8} style={{paddingLeft:"0px",paddingTop:"0px"}}>                    
                        <input type='text' className={css.inputCon} value={this.props.value} readOnly={true}/>
                    </Grid>
                    <Grid item xs={2} style={{display:this.props.display}}>
                        <ShowInfoBView pass={this.props.pass}/>
                    </Grid>
                   
                   
                </Grid>
                
            </div>
        )
    }
}

export class FormGroupSm extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange =(e)=>{
        let name = e.target.name
        let val = e.target.value
        this.props.onChange(name,val)
    }
    render() {
        return (
            <div style={{marginTop:"10px",flexGrow:"1"}}>    
                    <Grid container spacing={2}
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start">
                        <Grid item xs={3} className={css.labelStyle}>                    
                            <span className ={css.font}>{this.props.label}</span>
                        </Grid>
                        <Grid item xs={9} style={{paddingLeft:"0px",paddingTop:"0px"}}>                    
                            <input type={this.props.type} className={css.inputUp} name = {this.props.name} required ={this.props.required}
                            placeholder={this.props.placeholder} value={this.props.value} readOnly={this.props.readOnly}
                            onChange={this.handleChange}/>
                        </Grid>
                        <Grid item xs={2}>

                        </Grid>
                    </Grid> 
            </div>
        )
    }
}
export class FormGroupRead extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange =(e)=>{
        let name = e.target.name
        let val = e.target.value
        this.props.onChange(name,val)
    }
    render() {
        return (
            <div style={{marginTop:"10px",flexGrow:"1"}}>    
                <Grid container
                spacing={3}
                direction="row"
                justify="flex-start"
                alignItems="flex-start">
                    <Grid item xs={3} className={css.labelStyle}>
                        <span className ={css.font}>{this.props.label}</span>
                    </Grid>
                    <Grid item xs={9} style={{paddingLeft:"0px",paddingTop:"0px"}}>                    
                        <input type="text" className={css.inputView} readOnly={true} value={this.props.value}/>
                    </Grid>
                </Grid> 
            </div>
        )
    }
}
