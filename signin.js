import Layout from "./components/myLayoutBefore";
import React from 'react';
import Router from 'next/router';

const boxStyle={
    position:'relative',
    left:'20%',
    textAlign:'center',
    width:"60%",
    marginBottom:'20px',
    padding:'30px',
    border:'2px solid  #ffd633',
    borderRadius:'2px'

}   
const bannerStyle ={
    position:'relative',
    left:'20%',
    textAlign:'center',
    marginTop:"20px",
    width:"60%",
    padding: '10px 10px',
    border:'2px solid  #ffd633',
    backgroundColor:"#ffd633",
    borderRadius:'2px'
}

const inputStyle ={
    margin: 30,
    outlineStyle: 'none' ,
    border: '1px solid #ccc',
    borderRadius: '3px',
    padding: '14px 14px',
    width: '620px',
    fontSize: '24px',
    fontFamily: "Microsoft soft",
}
class signin extends React.Component{
    constructor(props) {
        super(props);
        this.state = {email: '',
                    password: ''
                };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        let name = event.target.name;
        let val = event.target.value;
        this.setState({[name]: val});
      }
    
      handleSubmit(event) {
        event.preventDefault();
        localStorage.setItem('email', this.state.email);
        var data ={
            email:this.state.email,
            password:this.state.password
        }
        var url = 'http://localhost:80/'
        // var str = "?";
        // for(var k in data){
        //     if(str != "?"){
        //         str += "&";
        //     }
        //     str += k + "=" + data[k];
        // }
       
        // var requestURL = url  + encodeURI(str);
        fetch(url+'signin', {
            method: 'POST', // or 'PUT',
                    body: JSON.stringify(data),
                    headers:{
                        'Content-Type': 'application/json; charset=utf-8'
                    },
          }).then(function(response) {
            return response.json().then(function(json) {
                console.log(json)
                if(json ==false){
                    alert('Invaild email or password')
                }else{
                    localStorage.setItem('uId',json.uId);
                    Router.push({
                        pathname:'/'
                    })
                }
              
            })
        })
    }
        
      render(){
        return(
            <div>
                <Layout/>
                <div style={bannerStyle}>
                    <span>Sign in</span>
                </div>
                <form onSubmit={this.handleSubmit} style={{textAlign: 'center'}}>
                    <div style={boxStyle}>
                    <input style = {inputStyle} type="text" name= "email" placeholder="Enter your email" value={this.state.value} onChange={this.handleChange} /><br/>
                    <input style = {inputStyle} type="password" name = "password" placeholder="Enter your password" value={this.state.value} onChange={this.handleChange}/><br/>
                   
                    <button type="submit" className="btn btn-primary btn-lg" style={{borderRadius:"4px",marginTop:"20px"}}>Sign in</button>
                    <style jsx>{`
                        input:focus{
                            border-color: #66afe9;
                            outline: 0;
                            -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
                            box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)
                        }
                    `}</style>
                    </div>
                </form> 
                
            </div> 
        );
    }

}
export default signin;