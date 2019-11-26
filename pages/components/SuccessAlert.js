import React from 'react'
import Router  from 'next/router';

class Alert extends React.Component{
    constructor(props) {
      super(props);
      this.state={
        isClosed: "block"
      };
      this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
  
      this.setState ({
        isClosed: "none",
      });
      if(this.state.isClosed=='block'){
        Router.push({
          pathname:this.props.url
        })
      }
    }

    render(){
      return(
      <div style={{left: '20%',position: 'fixed',bottom: 0,width:'60%',zIndex: 1}}>
          
        <div className="alert alert-dismissible alert-warning" style={{display:this.state.isClosed}}>
          
          <strong>{this.props.title}</strong><br/>
          {this.props.content}
          <button type="button" className="btn btn-info" style={{position:"relative",right:"-35%",borderRadius:"3px"}} onClick={this.handleClick}>{this.props.button}</button>
        </div>
          
    
      </div>
      )
    }
}
 
export default Alert