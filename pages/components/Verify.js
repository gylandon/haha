import React, { Component } from 'react'
import css from "../style.css"
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

export class ShowInfo extends Component {
    constructor(props) {
      super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.state={
            showTrue: this.props.all,
            showFalse: this.props.all
        }
    }
    componentDidUpdate=(prevProps)=>{
        if(this.props.all !== prevProps.all){
            if(this.props.all){
                this.setState({
                    showTrue: this.props.all,
                    showFalse: !this.props.all
                })
            }else{
                this.setState({
                    showTrue: '',
                    showFalse: ''
                })
            }
           
        }
    }
    handleChange = (e)=>{
        const val = e.target.checked
        const name1 = e.target.name
        this.props.onChecked(name1,val)
    }
    handleClick =(e)=>{
        let name = e.target.name
        let val = e.target.value
    
        if(name=="True" && val == "true"){
            this.setState({
                showTrue:false,
            })
            this.props.onClick(this.props.name,'')
        }else if((name=="True" && val == "false")){
            if(this.state.showFalse){
                this.setState({
                    showTrue:true,
                    showFalse: false
                })
            }else{
                this.setState({
                    showTrue:true,
                })
            }
            this.props.onClick(this.props.name,true)
        }
        else if(name=="False" && val == "true"){
            this.setState({
                showFalse:false
            })
            this.props.onClick(this.props.name,'')
        }else if((name=="False" && val == "false")){
            if(this.state.showTrue){
                this.setState({
                    showFalse:true,
                    showTrue: false
                })
            }else{
                this.setState({
                    showFalse:true
                })
            }
            this.props.onClick(this.props.name,false)
        }
    }

    render() {
        const { showTrue,showFalse } = this.state
        return (
        <div>
            <Grid container spacing={3}
            direction="row"
            justify="flex-end"
            alignItems="flex-start">
            <Grid item xs={5}>
                    {
                        showTrue?
                        <input type="image" src="/static/tick2.png" className={css.checkRight}
                        onClick={this.handleClick} name="True" value="true"/>:
                        <input type="image" src="/static/tick1.png" className={css.checkRight}
                        onClick={this.handleClick} name="True" value="false"/>
                    }
            </Grid>
            <Grid item xs={5}>
            {
                showFalse?
                <input type="image" src="/static/cross2.png" className={css.checkRight}
                onClick={this.handleClick} name="False" value="true"/>:
                <input type="image" src="/static/cross1.png" className={css.checkRight}
                onClick={this.handleClick} name="False" value="false"/>
            }
            </Grid>
            </Grid>
        </div>
        )
    }
}
export class ShowInfo1 extends Component {
    constructor(props) {
        super(props)
          this.handleChange = this.handleChange.bind(this)
          this.handleClick = this.handleClick.bind(this)
          this.state={
              showTrue: this.props.all,
              showFalse: this.props.all
          }
      }
      componentDidUpdate=(prevProps)=>{
        if(this.props.all !== prevProps.all){
            if(this.props.all){
                this.setState({
                    showTrue: this.props.all,
                    showFalse: !this.props.all
                })
            }else{
                this.setState({
                    showTrue: '',
                    showFalse: ''
                })
            }
           
        }
      }
    handleChange = (e)=>{
        const val = e.target.checked
        const name1 = e.target.name
        this.props.onChecked(name1,val)
    }
    handleClick =(e)=>{
        let name = e.target.name
        let val = e.target.value
    
        if(name=="True" && val == "true"){
            this.setState({
                showTrue:false,
            })
            this.props.onClick(this.props.name,'')
        }else if((name=="True" && val == "false")){
            if(this.state.showFalse){
                this.setState({
                    showTrue:true,
                    showFalse: false
                })
            }else{
                this.setState({
                    showTrue:true,
                })
            }
            this.props.onClick(this.props.name,true)
        }
        else if(name=="False" && val == "true"){
            this.setState({
                showFalse:false
            })
            this.props.onClick(this.props.name,'')
        }else if((name=="False" && val == "false")){
            if(this.state.showTrue){
                this.setState({
                    showFalse:true,
                    showTrue: false
                })
            }else{
                this.setState({
                    showFalse:true
                })
            }
            this.props.onClick(this.props.name,false)
        }
    }

    render() {
        const { showTrue,showFalse } = this.state
        return (
        <div style={{position:"relative",top:"18px",left:"20%"}}>
            <Grid container spacing={3}
            direction="row"
            justify="flex-end"
            alignItems="flex-start">
            <Grid item xs={5}>
                    {
                        showTrue?
                        <input type="image" src="/static/tick2.png" className={css.checkWrong}
                        onClick={this.handleClick} name="True" value="true"/>:
                        <input type="image" src="/static/tick1.png" className={css.checkWrong}
                        onClick={this.handleClick} name="True" value="false"/>
                    }
            </Grid>
            <Grid item xs={5}>
            {
                showFalse?
                <input type="image" src="/static/cross2.png" className={css.checkWrong}
                onClick={this.handleClick} name="False" value="true"/>:
                <input type="image" src="/static/cross1.png" className={css.checkWrong}
                onClick={this.handleClick} name="False" value="false"/>
            }
            </Grid>
            </Grid>
        </div>
        )
    }
}
export class ShowInfoBView extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
        <div style={{width:"100%"}} >
            <Grid container spacing={3}
            direction="row"
            justify="flex-end"
            alignItems="flex-start">
            <Grid item xs={5}>
                {
                    this.props.pass=="true"?
                    <input type="image" src="/static/tick2.png" className={css.checkView}/>:
                    <input type="image" src="/static/tick1.png" className={css.checkView}/>
                }
            </Grid>
            <Grid item xs={5}>
            {
                this.props.pass=="false"||this.props.pass==`""false""`?
                <input type="image" src="/static/cross2.png" className={css.checkView}/>:
                <input type="image" src="/static/cross1.png" className={css.checkView}/>
            }
            </Grid>
            </Grid>
        </div>
        )
    }
}
export class ShowInfoGView extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
        <div style={{width:"100%"}} >
            <Grid container spacing={3}
            direction="row"
            justify="flex-end"
            alignItems="flex-start" style={{position:"relative",width:"46%",left:"63%"}}>
            <Grid item xs={5} >
                {
                    this.props.pass=="true"?
                    <input type="image" src="/static/tick2.png" className={css.checkView}/>:
                    <input type="image" src="/static/tick1.png" className={css.checkView}/>
                }
            </Grid>
            <Grid item xs={5}>
            {
                this.props.pass=="false"?
                <input type="image" src="/static/cross2.png" className={css.checkView}/>:
                <input type="image" src="/static/cross1.png" className={css.checkView}/>
            }
            </Grid>
            </Grid>
        </div>
        )
    }
}
export class ShowInfoNView extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
        <div style={{width:"100%"}}>
            <Grid container spacing={2}
            direction="row"
            justify="center"
            alignItems="flex-start">
            <Grid item lg={2}>
                {
                    this.props.pass=="true"?
                    <input type="image" src="/static/tick2.png" className={css.checkView}/>:
                    <input type="image" src="/static/tick1.png" className={css.checkView}/>
                }
            </Grid>
            <Grid item lg={2}>
            {
                this.props.pass=="false"?
                <input type="image" src="/static/cross2.png" className={css.checkView}/>:
                <input type="image" src="/static/cross1.png" className={css.checkView}/>
            }
            </Grid>
            </Grid>
        </div>
        )
    }
}
export class ShowInfo2 extends Component {
    constructor(props) {
        super(props)
          this.handleChange = this.handleChange.bind(this)
          this.handleClick = this.handleClick.bind(this)
          this.state={
              showTrue: this.props.all,
              showFalse: this.props.all
          }
      }
      componentDidUpdate=(prevProps)=>{
        if(this.props.all !== prevProps.all){
            if(this.props.all){
                this.setState({
                    showTrue: this.props.all,
                    showFalse: !this.props.all
                })
            }else{
                this.setState({
                    showTrue: '',
                    showFalse: ''
                })
            }
           
        }
      }
    handleChange = (e)=>{
        const val = e.target.checked
        const name1 = e.target.name
        this.props.onChecked(name1,val)
    }
    handleClick =(e)=>{
        let name = e.target.name
        let val = e.target.value
    
        if(name=="True" && val == "true"){
            this.setState({
                showTrue:false,
            })
            this.props.onChange(this.props.name,'')
        }else if((name=="True" && val == "false")){
            if(this.state.showFalse){
                this.setState({
                    showTrue:true,
                    showFalse: false
                })
            }else{
                this.setState({
                    showTrue:true,
                })
            }
            this.props.onChange(this.props.name,true)
        }
        else if(name=="False" && val == "true"){
            this.setState({
                showFalse:false
            })
            this.props.onChange(this.props.name,'')
        }else if((name=="False" && val == "false")){
            if(this.state.showTrue){
                this.setState({
                    showFalse:true,
                    showTrue: false
                })
            }else{
                this.setState({
                    showFalse:true
                })
            }
            this.props.onChange(this.props.name,false)
        }
    }

    render() {
        const { showTrue,showFalse } = this.state
        return (
       
            <Grid container spacing={1}
            direction="row"
            justify="flex-end"
            alignItems="flex-start" style={{width:"100%",position:"relative",left:"-6px"}}>
            <Grid item xs={1}>
                    {
                        showTrue?
                        <input type="image" src="/static/tick2.png" className={css.checkNima}
                        onClick={this.handleClick} name="True" value="true"/>:
                        <input type="image" src="/static/tick1.png" className={css.checkNima}
                        onClick={this.handleClick} name="True" value="false"/>
                    }
            </Grid>
            <Grid item xs={1}>
            {
                showFalse?
                <input type="image" src="/static/cross2.png" className={css.checkNima}
                onClick={this.handleClick} name="False" value="true"/>:
                <input type="image" src="/static/cross1.png" className={css.checkNima}
                onClick={this.handleClick} name="False" value="false"/>
            }
            </Grid>
            </Grid>
        
        )
    }
}

export const CheckBox = (props)=>{
    return(
        <FormGroup >         
            <FormControlLabel
            label={props.label}
            control={
                <Switch
                checked={props.checked}
                onChange={props.onChange}
                value={props.value}
                name= "all"
                color= "primary"
                />
            } 
            />
        </FormGroup>
    )

}
export const SwitchAll = withStyles(theme => ({
    root: {
      width: 42,
      height: 26,
      padding: 0,
      margin: theme.spacing(1),
    },
    switchBase: {
      padding: 1,
      '&$checked': {
        transform: 'translateX(16px)',
        color: theme.palette.common.white,
        '& + $track': {
          backgroundColor: '#52d869',
          opacity: 1,
          border: 'none',
        },
      },
      '&$focusVisible $thumb': {
        color: '#52d869',
        border: '6px solid #fff',
      },
    },
    thumb: {
      width: 24,
      height: 24,
    },
    track: {
      borderRadius: 26 / 2,
      border: `1px solid ${theme.palette.grey[50]}`,
      backgroundColor: theme.palette.grey[400],
      opacity: 1,
      transition: theme.transitions.create(['background-color', 'border']),
    },
    checked: {},
    focusVisible: {},
  }))(({ classes, ...props }) => {
    return (
        <FormGroup >         
            <FormControlLabel
            label={props.label}
            control={
                <Switch
                focusVisibleClassName={classes.focusVisible}
                onChange={props.onChange}
                value={props.value}
                name= "all"
                classes={{
                  root: classes.root,
                  switchBase: classes.switchBase,
                  thumb: classes.thumb,
                  track: classes.track,
                  checked: classes.checked,
                }}
                {...props}
              />
            } 
            />
        </FormGroup>
      
    );
  });
