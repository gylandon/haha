import React from 'react'

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
    }

    render(){
      return(
      <div>
        <div className="alert alert-dismissible alert-warning" style={{display:this.state.isClosed}}>
          <button type="button" className="close" data-dismiss="alert" onClick={this.handleClick}>&times;</button>
          <h4 className="alert-heading">{this.props.title}</h4>
          <p className="mb-0">{this.props.content}</p>
        </div>
        
      </div>
      )
    }
}
 
export default Alert