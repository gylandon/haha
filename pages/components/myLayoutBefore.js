import Header from './Header';
import Navi from './Navigation';




class Layout extends React.Component{
  constructor(props){
    super(props);
    this.state={
        role:null
      };
  }
  
  render(){
    return(
      <div>
        <Header />
        <Navi role = {this.state.role}/>
       
      </div>
    )
   
  }
 
}
  

export default Layout;