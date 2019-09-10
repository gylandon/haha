import Header from './Header';
import Navi from './navigation';
import Router from 'next/router'




class Layout extends React.Component{
  constructor(props){
    super(props);
    this.state={
      role:''
    }
     
  }
  
  componentDidMount() {
    const name = localStorage.getItem('email')
    console.log(name)
    const url = 'http://localhost:80/'
    if(name==null){
      Router.push({
        pathname: '/signin'
      })
    }else{
      fetch(url+'checkRole', {
        method: 'GET', // or 'PUT',
                headers:{
                    'Content-Type': 'application/json; charset=utf-8'
                },
      }).then(function(response) {
        return response.json().then(function(json) {
            if(json.role == 'manager'){
              this.setstate({
                role:'manager'
              })
            }else if(json.role == 'curator'){
              this.setstate({
                role:'curator'
              })
            }else{
              this.setstate({
                role:'contributor'
              })
            }
        })
    })
  }
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