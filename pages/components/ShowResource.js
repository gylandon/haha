import React, { Component } from 'react'
import css from '../style.css'  
import {FormGroupRead} from './Form-group';

export class ShowResource extends Component {
  render() {
    return (
      <div>
      {
        this.props.Title.map((item,index) =>(
            <div className={css.boxView} key ={index}>  
                <div>
                    <FormGroupRead value={this.props.Title[index]} label="Title" />        
                </div>
                <div>
                    <FormGroupRead value={this.props.Type[index]} label="Type" />
                </div>
                <div>
                    <FormGroupRead value={this.props.Url[index]} label="Url" />
                </div>
            </div>
        ))
    }
      </div>
    )
  }
}
