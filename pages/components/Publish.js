import React, { Component } from 'react'
import css from '../style.css' 
import ReactTooltip from 'react-tooltip'
import { IoMdInformationCircleOutline } from "react-icons/io";
import {FormGroupSm} from './Form-group';

class PublishBox extends Component {
    constructor(props) {
        super(props);
       
        this.state = {
          display: "inline-block"
        }
      }
      componentDidMount(){
        if(this.props.num == 1){
            this.setState({
              display:"none"
            })
        }
      }
    render() {
        return (
            <div>
                <div className={css.banner}>                    
                    <span>Publish resources</span>
                    <a data-tip="Add published resources here" className={css.tipStyle} data-for="aa"><IoMdInformationCircleOutline/></a>
                    <ReactTooltip id="aa" type="dark" effect="solid" place="right" multiline={true}/>
                </div>
                <div className={css.box}>
                    <div className={css.box}>
                    <div>
                        <FormGroupSm type="text" label="Tilte" name={this.props.name1} placeholder="Input resource title" display="none"
                            onChange={this.props.onChange} readOnly={this.props.readOnly}
                        />
                    </div>    
                    <div>
                        <FormGroupSm type="text" label="Type" name={this.props.name2} placeholder="Input resource information"  display="none"
                            onChange={this.props.onChange} readOnly={this.props.readOnly}
                        />
                    </div>
                    <div>
                        <FormGroupSm type="url" label="Url" name={this.props.name3} placeholder="Input source URL of resource" display="none"
                            onChange={this.props.onChange} readOnly={this.props.readOnly}
                        />
                    </div> 
                    <div style ={{textAlign:'center',marginBottom:'20px',marginTop:'20px'}}>
                        <button name={`add${this.props.id}`} type="button" className={css.btn_info} onClick={(e)=>{this.props.onAdd(e.target.name)}}>Add</button>
                        <button name={`delete${this.props.id}`} type="button" className={css.btn_primary} style={{marginLeft:"50px",display:this.state.display}} onClick={(e)=>{this.props.onDelete(e.target.name)}}>Delete</button>                                                                           
                    </div>
                    </div>
                </div> 
            </div>
        )
    }
}
class Publish extends Component {
    constructor(props) {
      super(props);
      this.arr =[]
      for(var i=0;i<this.props.num;i++){
        this.arr[i] = i
      }
      this.state = {
        arr: this.arr,
        display:"block"
      }
      this.handleClick = this.handleClick.bind(this)
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

    render() {
      return (
        <div>
          {
            this.props.num == 0&&null
          }
          <div>
            {this.state.arr.map((item) => (
                <div key={item}>
                    <PublishBox onChange={this.props.onChange} onAdd = {this.handleClick} onDelete={this.handleClick} 
                    name1={`pTitle${item}`} name2={`pType${item}`} name3={`pUrl${item}`} num = {this.props.num} id={item} /> 
                </div>                     
            ))}
          </div>
        </div>
      )
    }
}

export default Publish