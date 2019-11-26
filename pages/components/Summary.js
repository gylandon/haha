import React, { Component } from 'react'
import css from '../style.css'
import ReactTooltip from 'react-tooltip'
import { IoMdInformationCircleOutline } from "react-icons/io";


export class Summary extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this)
}
handleChange(e){
    let name = e.target.name
    let val = e.target.value
    this.props.onChange(name,val)
}
  
  render() {
    return (
      <div>
        <div className={css.banner}>
          <span>{this.props.label}</span>
          <a data-tip={this.props.tip} className={css.tipStyle} data-for={this.props.id}><IoMdInformationCircleOutline/></a>
          <ReactTooltip id={this.props.id} type={this.props.type} effect="solid" place="right" multiline={true}/>
        </div>
        <div className={css.box}>
            <div className="form-group">
                <textarea rows={this.props.row} className = {css.textareaInput} type="text" name ={this.props.name} required ={this.props.required}
                placeholder={this.props.placeholder} value={this.props.value} readOnly={this.props.readOnly} style={{height:"100%"}}
                onChange={this.handleChange}/>
            </div>
        </div>
      </div>
    )
  }
}
