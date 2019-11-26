import Header from './Header';
import Navi from './Navigation';
import Router from 'next/router'



class Layout extends React.Component{
  constructor(props){
    super(props);
    this.state={
      role:null
    }
  }
  
  componentDidMount() {
  
    const uId = localStorage.getItem('uId')
    const role = localStorage.getItem('role')
    this.setState({
      role
    })
    if(uId==null){
      Router.push({
        pathname: '/../signin'
      })
    }
  }
  render(){
    return(
      <div>
        <Header />
        <Navi role={this.state.role} />
      </div>
    )
   
  }
 
}
  

export default Layout;