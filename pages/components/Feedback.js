import React, { Component } from 'react'
import { IoMdCheckmark, IoMdClose } from "react-icons/io";

const checkStyle ={
    position:'relative',
    left: "90%",
    top: '-70px'
   
}
export class Feedback extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
        <div style={{display:this.props.showFeedback}}>
            {this.props.feedback== true?
            <div style={checkStyle}>
                <IoMdCheckmark color="#6DB65B" size="30px"/>
            </div>:
            <div style={checkStyle}>
                <IoMdClose color="#d40f0f" size="30px" />
            </div>}
        </div>
        )
    }
}
