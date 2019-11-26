import css from '../style.css' 

export class ConfirmAlert extends React.Component{
    constructor(props) {
      super(props);
      this.state={
        isClosed: "block"
      };
    
      this.handleClick = this.handleClick.bind(this)
      this.handleClick1 = this.handleClick1.bind(this)
    }

  handleClick(e){
      const name = e.target.name
      this.props.onClick(name)
  }
  handleClick1(e){
    const name = e.target.name
    this.props.onClick1(name)
}

    render(){
      return(
      <div style={{left: '20%',position: 'fixed',bottom:0,width:'60%',zIndex: 1}}>
        <div className="alert alert-dismissible alert-warning">
          <h4 className="alert-heading">{this.props.title}</h4>
          <p className="mb-0">{this.props.content}</p>
          <button type="button" className={css.btn_primary} data-dismiss="alert" name={this.props.name} onClick={this.handleClick}>Confirm</button>
          <button type="button" className={css.btn_info} data-dismiss="alert" name={this.props.name} onClick={this.handleClick1}>Cancel</button>
        </div>
      </div>
      )
    }
}
 
