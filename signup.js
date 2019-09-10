import Layout from "./components/myLayoutBefore";
import React from 'react';
import Alert from './components/warningAlert';
import Alert1 from './components/successAlert';
import Router from 'next/router';

const inputStyle ={
    margin: 20,
    outlineStyle: 'none' ,
    border: '1px solid #ccc',
    borderRadius: '3px',
    padding: '10px 10px',
    width: '60%',
    fontFamily: "Microsoft soft",
}
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



class accountInfo extends React.Component{
        constructor(props) {
            super(props);
            this.state = {errMsg:'',
                        email:'',
                        psw:'',
                        cfm:'',
                        role:'',
                        phone:'',
                        address:'',
                        motivtion:'',
                        experience:'',
                        errAlert:false,
                        successAlert: false};
            this.pswInput = React.createRef();
            this.cfmInput = React.createRef();
            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
      }
    
        handleChange(event){
            let err = '';
            let name = event.target.name;
            let val = event.target.value;
            let psw = this.pswInput.current.value;
            let cfm = this.cfmInput.current.value;
          
            this.setState({
                [name]:val,
            })
            if(psw !==''&&cfm !==''){
                
                if(psw == cfm){
                    err = ''
                }else{
                    err = 'Please enter the same password'
                   
                }
            }
            this.setState({
                psw: this.pswInput.current.value,
                errMsg:err,
            })
           
        }
        handleSubmit(event) {
            event.preventDefault();
           
            if(this.state.email==''){
                this.setState({
                    errAlert:true
                })
            }else{
                this.setState({
                    successAlert:true
                })
                const data = {
                    email: this.state.email,
                    psw: this.state.psw,
                    userName: this.state.userName,
                    phone: this.state.phone,
                    address: this.state.address,
                    motivation: this.state.motivation,
                 
                    experience: this.state.experience
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
                fetch(url+'signup', {
                    method: 'POST', // or 'PUT',
                    body: JSON.stringify(data),
                    headers:{
                        'Content-Type': 'application/json; charset=utf-8'
                    },
                    })
                    .then(res => res.json())
                    .catch(error => console.error('Error:', error))
                    .then(response => console.log('Success:', response),
                        Router.push({
                            pathname:'/signin'
                        })
                    ); 
                }
           
        }
        render(){
            
            return(
                <div>
                   <Layout/>
                    {this.state.errAlert&&
                    <Alert title='Warning!' content = 'You need to fill all the fields'/>}
                    {this.state.successAlert&&
                    <Alert1 title='Well done!' content = 'You application is successfully submitted'/>}
                    <div style={bannerStyle}>
                        <span>Account info</span>
                    </div> 
                    <form onSubmit={this.handleSubmit} >
                    <div style={boxStyle}>
                        <input style = {inputStyle} type="text" name= "email" 
                        placeholder="Enter your email" value={this.state.value} 
                        onChange={this.handleChange} /><br/>

                        <input style = {inputStyle} type="password" name = "password" 
                        placeholder="Enter your password"  ref={this.pswInput} value={this.state.value}
                        onChange={this.handleChange}/><br/>

                        <input style = {inputStyle} type="password" name = "confirm" 
                        placeholder="Enter your password again"  ref={this.cfmInput} 
                        onChange={this.handleChange}/><span style={{color:'red'}}>{this.state.errMsg}</span><br/>
                        
                    </div> 
                   
                    <div style={bannerStyle}>
                        <span>Personal info</span>
                    </div> 
                    <div style={boxStyle}>
                        <input style = {inputStyle} type="text" name = "userName" 
                        placeholder="Enter your userName"  value={this.state.value}
                        onChange={this.handleChange}/><br/>
                    
                        <input style = {inputStyle} type="number" name = "phone" 
                        placeholder="Enter your phone here" value={this.state.value} onChange={this.handleChange}/><br/>

                        <input style = {inputStyle} type="text" name = "address" 
                        placeholder="Enter your address" value={this.state.value}
                        onChange={this.handleChange}/><br/>
                    </div> 
                    <div style={boxStyle}>
                  
                    
                        <div className="form-group">
                            <textarea className="form-control" name="motivation" onChange={this.handleChange} value={this.state.value} id="Textarea1" rows="3" placeholder='Enter your motivation'/>
                        </div>
                        <div className="form-group">
                            <textarea className="form-control" name="experience" onChange={this.handleChange} value={this.state.value} id="Textarea2" rows="3" placeholder='Enter your experience'/>
                        </div>
                        <div style ={{textAlign:'center',marginBottom:'20px'}}>
                            <button type="submit" className="btn btn-primary btn-lg" style={{borderRadius:"4px",marginTop:"20px"}}>Send application</button>
                        </div>
                    </div> 
                </form>

                    <style jsx>{`
                    input:focus{
                        border-color: #66afe9;
                        outline: 0;
                        -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
                        box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)
                    }
                `}</style>
                </div> 
                
            );
          }
    }

export default accountInfo;