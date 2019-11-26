
export class Loading extends React.Component{
    constructor(props) {
      super(props);
    }


    render(){
      return(
      <div style={{left: '20%',position: 'fixed',bottom:0,width:'60%',zIndex: 1}}>
        <div className="alert alert-dismissible alert-warning">
          <h4 className="alert-heading">{this.props.title}</h4>
          <p className="mb-0">{this.props.content}</p>
        </div>
        
      </div>
      )
    }
}
 
