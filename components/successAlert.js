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
          pathname:'/signin'
        })
      }
    }

    render(){
      return(
      <div>
          
        <div className="alert alert-dismissible alert-warning" style={{display:this.state.isClosed}}>
          
          <strong>{this.props.title}</strong><br/>
          {this.props.content}
          <button type="button" className="btn btn-info" style={{marginLeft:'100px'}} onClick={this.handleClick}>Sign in</button>
        </div>
          
    
      </div>
      )
    }
}
 
export default Alert