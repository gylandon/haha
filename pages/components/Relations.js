import React, { Component } from 'react'
import { Relationship } from './Relationship'
import Grid from '@material-ui/core/Grid';
import { pairOptions } from '../data'
import css from "../style.css"
import { AlterType } from './AlterType';

class RelationBox extends Component{
  constructor(props) {
    super(props);
   
    this.state = {
      display: "inline-block"
    }
    this.handleSelect = this.handleSelect.bind(this)
  }
  componentDidMount(){
    if(this.props.num == 1){
        this.setState({
          display:"none"
        })
    }
  }
  handleSelect =(name,option)=>{

    this.props.handleSelect(name,option)
  }
 
  render(){
    return(
      <div>
        <div className={css.box}>
          <Grid container spacing={3}
              direction="row"
              justify="flex-start"
              alignItems="flex-start">
              <Grid item xs={1} className={css.labelStyle}>                    
                <span className ={css.font}>Name</span>
              </Grid>
              <Grid item xs={4} style={{paddingLeft:"0px",paddingTop:"0px"}}>                    
                <Relationship name = {this.props.idName} placeholder = "select..." defaultValue={this.props.defaultId} onChange={this.handleSelect} options={this.props.relJson}/>
              </Grid>
                
              <Grid item xs={2} className={css.labelStyle}>                    
                <span className ={css.font}>Relationship</span>
              </Grid>
              <Grid item xs={4} style={{paddingLeft:"0px",paddingTop:"0px"}}>                    
                <Relationship name = {this.props.pairName} placeholder = "select as related entity - entity" defaultValue={this.props.defaultPair} onChange={this.handleSelect} options={pairOptions}/>
              </Grid> 
          </Grid>
          <div style ={{textAlign:'center',marginBottom:'20px',marginTop:'20px'}}>
              <button name={`add${this.props.id}`} type="button" className={css.btn_info} onClick={(e)=>{this.props.onAdd(e.target.name)}}>Add</button>
              <button name={`delete${this.props.id}`} type="button" className={css.btn_primary} style={{marginLeft:"50px",display:this.state.display}} onClick={(e)=>{this.props.onDelete(e.target.name)}}>Delete</button>                                                                           
          </div>
        </div>
      </div>
    )
  }
 
}
class RelationEdit extends Component{
  constructor(props) {
    super(props);
   
    this.state = {
      display: "inline-block"
    }
    this.handleSelect = this.handleSelect.bind(this)
  }
  componentDidMount(){
    if(this.props.id == "0"){
        this.setState({
          display:"none"
        })
    }
  }
  handleSelect =(name,option)=>{

    this.props.handleSelect(name,option)
  }
 
  render(){
    return(
      <div>
        <div className={css.box}>
          <Grid container spacing={3}
              direction="row"
              justify="flex-start"
              alignItems="flex-start">
              <Grid item xs={1} className={css.labelStyle}>                    
                <span className ={css.font}>Name</span>
              </Grid>
              <Grid item xs={4} style={{paddingLeft:"0px",paddingTop:"0px"}}>                    
                <AlterType name = {this.props.idName} value={this.props.rId} placeholder = {this.props.reId} onChange={this.handleSelect} options={this.props.relJson}/>
              </Grid>
                
              <Grid item xs={2} className={css.labelStyle}>                    
                <span className ={css.font}>Relationship</span>
              </Grid>
              <Grid item xs={4} style={{paddingLeft:"0px",paddingTop:"0px"}}>                    
                <AlterType name = {this.props.pairName} value={this.props.rPair} placeholder = {this.props.relPair} onChange={this.handleSelect} options={pairOptions}/>
              </Grid> 
          </Grid>
          <div style ={{textAlign:'center',marginBottom:'20px',marginTop:'20px'}}>
              <button name={`add${this.props.id}`} type="button" className={css.btn_info} onClick={(e)=>{this.props.onAdd(e.target.name)}}>Add</button>
              <button name={`delete${this.props.id}`} type="button" className={css.btn_primary} style={{marginLeft:"50px",display:this.state.display}} onClick={(e)=>{this.props.onDelete(e.target.name)}}>Delete</button>                                                                           
          </div>
        </div>
      </div>
    )
  }
 
}

class Relations extends Component {
    constructor(props) {
      super(props);
      this.arr =[]
      for(var i=0;i<this.props.num;i++){
        this.arr[i] = i
      }
      this.state = {
        arr: this.arr,
        showArr: true
      }
      this.handleClick = this.handleClick.bind(this)
      this.handleSelect = this.handleSelect.bind(this)
    }
    componentDidUpdate(prevProps){
      if(prevProps.defaultPair!== this.props.defaultPair){
        console.log(this.props.defaultPair)
      }
      if(this.props.edit=="true"&&this.state.showArr){
        if(prevProps.num !== this.props.num){
          for(var i=0;i<this.props.num;i++){
            this.arr[i] = i
          }
          this.setState({arr: this.arr,showArr:false})
      }
      }
     
    }
    handleClick =(e)=>{
      let l = e.length; let i =0;
      let arr = e.slice(0,l-1)
      let arr1 = e[l-1] 
      let num = parseInt(arr1)
      if(arr == "add"){
        this.arr.map(item=>{
          if(item > num){
            i = 1
          }
        })
        let max = Math.max.apply(null,this.arr)
        this.arr.push(max+1)
        this.props.onAdd(e)
      }else{
        let index = this.arr.indexOf(num)
        this.arr.splice(index,1)
        this.props.onDelete(e)
      }
      this.setState({
         arr: this.arr
      })
    }
    handleSelect =(name,option)=>{
      this.props.handleSelect(name,option)
    }
    render() {
      return (
        <div>
          <div>
          {
            this.props.edit=="true"?
            <div>
            {
              this.state.arr.map((item,index)=>(
                <div key={item}>
                  <RelationEdit relJson={this.props.relJson} handleSelect={this.handleSelect} id1={`a${item}`}
                    onAdd = {this.handleClick} onDelete={this.handleClick} idName={`reId${item}`} id={`${item}`}
                    pairName={`relPair${item}`} num={this.props.num} reId={this.props.defaultId[index]} value={this.props.value} 
                    relPair={this.props.defaultPair[index]}/>
                </div>
              ))
            }
            </div>
            :
            <div>
             {
              this.state.arr.map((item)=>(
                <div key={item}>
                   <RelationBox relJson={this.props.relJson} handleSelect={this.handleSelect} id1={`a${item}`}
                  onAdd = {this.handleClick} onDelete={this.handleClick} idName={`reId${item}`} id={`${item}`} 
                  pairName={`relPair${item}`} num={this.props.num} />
                </div>
              ))
            }
               
            </div>
          }
          </div>
        </div>
      )
    }
}

export default Relations