import ReactTooltip from 'react-tooltip'
import React, { Component } from 'react'
import { IoMdInformationCircleOutline } from "react-icons/io";

const labelStyle={   
    position:'relative',
    left:"15%"
};
const tipStyle={
    position: 'absolute',
    left: "83%"
}

export class Tooltip extends Component {
    constructor(props) {
        super(props);
        
    }
        
    render() {
        return (
        <div>
            <label style={labelStyle}>{this.props.label}</label>
            <a style={tipStyle} data-tip={this.props.tip} data-for={this.props.id}><IoMdInformationCircleOutline/></a>
            <ReactTooltip id={this.props.id} type={this.props.type} effect="solid" place="right" multiline={true}/>
        </div>
        )
    }
}


