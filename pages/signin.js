import Layout from "./components/myLayoutBefore";
import bcrypt from "bcryptjs";
import Router from 'next/router';
import {Alert} from './components/warnAlert';
import { Post } from "./components/http";
import css from './style.css'  
import { MdPerson } from "react-icons/md";
import { MdHttps } from "react-icons/md";
 


var salt = bcrypt.genSaltSync(10);
class signin extends React.Component{
    constructor(props) {
        super(props);
        this.state = {email: '',
                    password: '',
                    showAlert: 'none',
                    err: '',
                    data:''
                };
      
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClose = this.handleClose.bind(this)
      }
    
    handleChange(event) {
        let name = event.target.name;
        let val = event.target.value;
        this.setState({[name]: val});
       
    }

    handleClose(){
        this.setState({
            showAlert:'none'
        })
    }
    handleSubmit(event) {
        event.preventDefault();
        var psw = bcrypt.hashSync(this.state.password, salt);
        const psw1 = JSON.stringify(psw)
        var data ={
            email:this.state.email,
            password:psw1
        }
      
        Post('signin', data).then(res=>{
            if(res=='-1'|| res == '-2'){
                this.setState({showAlert: ' block'})
                this.setState({err: res})
            }else{
                localStorage.setItem('uId',res.uId);
                localStorage.setItem('role',res.role);
                localStorage.setItem('userName',res.name);
                const same = bcrypt.compareSync(this.state.password,res.password)
                if(same){
                  
                    Router.push({
                        pathname:'/./index',

                    })
                }else{
                    this.setState({showAlert: ' block'})
                    this.setState({err: '-1'})
                } 
            }
        })
       
    
    }
        
      render(){
        return(
            <div>
                <Layout/>
                <div>
                
                <div style={{display: this.state.showAlert}}>
                    {this.state.err=='-1'?<Alert title ='warning!' content = 'Invalid email or password!' onClick={this.handleClose}/>:
                    <Alert title ='warning!' content = 'Your application has not been approved! Please wait approval.' onClick={this.handleClose}/>}
                </div>
                <form onSubmit={this.handleSubmit} >
                    <div>
                        <div className = {css.inputSignIn1}>
                            <i style={{marginLeft:'10%s'}}><MdPerson /></i>
                            <input style={{borderStyle:'none',marginLeft:'10px',width:'90%'}} required="required" type="email" name= "email" placeholder="Enter your email" value={this.state.value} onChange={this.handleChange}></input><br/>
                        </div>
                        <div className = {css.inputSignIn2}>
                            <i><MdHttps /></i>
                            <input style={{borderStyle:'none',marginLeft:'10px',width:'90%',outline:"none"}} required="required" type="password" name = "password" placeholder="Enter your password" value={this.state.value} onChange={this.handleChange}/><br/>
                        </div>
                        <button type="submit" className="btn btn-primary btn-lg" style={{borderRadius:"4px",marginLeft:"46%",marginTop:"50px",borderColor:"#693E82"}}>Sign in</button>
            
                    </div>
                </form> 
                <div style={{textAlign:'center',marginTop:'20px'}}>
                        <span style={{color:'black'}}>No account?&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <a href='/signup' style={{color:'red'}}>Sign up</a>
                </div>
            </div>
                
        </div> 
        );
    }

}
export default signin;