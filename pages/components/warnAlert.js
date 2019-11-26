
export class Alert extends React.Component{
    constructor(props) {
      super(props);
      this.state={
        isClosed: "block"
      };
    
      this.handleClick = this.handleClick.bind(this)
    }

  handleClick(e){
      const name = e.target.name
      this.props.onClick(name)
  }

    render(){
      return(
      <div style={{left: '20%',position: 'fixed',bottom:0,width:'60%',zIndex: 1}}>
        <div className="alert alert-dismissible alert-warning">
          <button type="button" className="close" data-dismiss="alert" name={this.props.name} onClick={this.handleClick}>&times;</button>
          <h4 className="alert-heading">{this.props.title}</h4>
          <p className="mb-0">{this.props.content}</p>
        </div>
        
      </div>
      )
    }
}
 
