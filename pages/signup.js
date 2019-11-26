import Layout from "./components/myLayoutBefore";
import React from 'react';
import {Alert} from './components/warnAlert';
import Alert1 from './components/SuccessAlert';
import {Post} from "./components/http";
import css from './style.css'  
import { Privacy } from "./components/Privacy";
import bcrypt from "bcryptjs";
import {Loading} from "./components/loading"

var salt = bcrypt.genSaltSync(10);

function ErrAlert1(props){
        switch(props.errStatus){
            case "-1":
                return(
                    <div>
                        <Alert title="Warning!" content="Your email has already applicated, please sign in!" onClick={props.onClick}/>
                    </div>
                ) 
            case "-2":
                return(
                    <div>
                        <Alert title="Warning!" content="Username has already been token, please change!" onClick={props.onClick} />
                    </div>
                )
            case "-3":
                return(
                    <div>
                        <Alert title="Warning!" content="Please enter the same password!" onClick={props.onClick} />
                    </div>
                )
            case "-4":
                return(
                    <div>
                        <Alert title="Warning!" content="Please enter the valid phone format!" onClick={props.onClick} />
                    </div>
                )
            case "-5":
                return(
                    <div>
                        <Alert title="Warning!" content="Please enter 6-20 digital password!" onClick={props.onClick} />
                    </div>
                )
            case 0:
                return(
                    <div></div>
                )
        }
}

class accountInfo extends React.Component{
        constructor(props) {
            super(props);
            this.state = {errMsg:'',
                        email:'',
                        psw:'',
                        cfm:'',
                        phone:'',
                        address:'',
                        motivation:'',
                        experience:'',
                        errAlert:'none',
                        successAlert: "none",
                        name: '',
                        showP:'none',
                        errStatus:0,
                        loading:"none",
                        showBtn:"block"
                        };
            this.pswInput = React.createRef();
            this.cfmInput = React.createRef();
            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
            this.handleClose = this.handleClose.bind(this);
            this.handleClick = this.handleClick.bind(this);
            this.handleshow = this.handleshow.bind(this)
    }
    handleClick=(e)=>{
        e.preventDefault()
        this.setState({showP:'block'})
    }
    handleshow=()=>{
        this.setState({showP:'none'})
    }
    handleClose(){
        this.setState({
            errAlert: 'none',
            showBtn:"block",
        })
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
                    err = 'Different password'
                   
                }
            }
            this.setState({
                psw: this.pswInput.current.value,
                errMsg:err,
            },function(){
                console.log(this.state.errMsg)
            })
           
        }
        checkPhone(phone){
            let err =0
            var pattern = new RegExp("[+-?]")
            var q = /[0-9]/
            if(pattern.test(phone)){    
                err = 1
            }else if(phone.indexOf(" ")>-1){
                err = 1
            }else if(q.test(phone)){
                err = 1
            }
              
            return err
        }
        handleSubmit(e) {
            e.preventDefault();
            let err = this.checkPhone(this.state.phone)
            let l = this.pswInput.current.value.length
            if(this.pswInput.current.value !== this.cfmInput.current.value){
                this.setState({
                    errAlert:'block',
                    showBtn:"none",
                    errStatus: '-3'
                })
            }else if(err==0){
                this.setState({
                    errAlert:'block',
                    showBtn:"none",
                    errStatus: '-4'
                })
            }else if(l<6||l>20){
                this.setState({
                    errAlert:'block',
                    showBtn:"none",
                    errStatus: '-5'
                })
            }
            else{
                this.setState({
                    loading:"block"
                })
                var psw = bcrypt.hashSync(this.state.password, salt);
                const data = {
                    email: this.state.email,
                    psw: psw,
                    userName: this.state.userName,
                    name: this.state.name,
                    phone: this.state.phone,
                    address: this.state.address,
                    motivation: this.state.motivation,
                    experience: this.state.experience
                }
                Post('signup',data).then(res=>{
                    this.setState({
                        loading:"none"
                    })
                    if(res == 'true'){
                        this.setState({
                            successAlert: "block"
                        })
                     }else if(res=='-1'){
                        this.setState({
                            errAlert: "block",
                            showBtn:"none",
                            errStatus: res
                        })
                     }else if(res=='-2'){
                        this.setState({
                            errAlert: "block",
                            showBtn:"none",
                            errStatus: res
                        })
                     }
                })
                
               
            }
        }
        render(){
            
            return(
                <div>
                   <Layout/>
                   <div style={{display: this.state.errAlert}}>
                        <ErrAlert1 errStatus={this.state.errStatus} onClick={this.handleClose} />
                    </div>
                    <div style={{display: this.state.successAlert}}>
                        <Alert1 title = "Success" content = "Your application has been successfully submitted! Please wait for approving."
                        url="/signin" button="Ok" />
                    </div>
                    <div style={{display: this.state.loading}}>              
                        <Loading title="Processing!" content="......" />
                    </div>

                    <Privacy show={this.state.showP} finish={this.handleshow}/>
                    
                    <div className = {css.banner1}>
                        <span style={{fontWeight:"bold",color:'#ba6c00',fontSize:'20px'}}>Account Info</span>
                    </div> 
                    <form onSubmit={this.handleSubmit}>
                    <div className = {css.boxStyle1}>
                        <div className="form-group" style={{marginTop:'15px'}}>
                            <label className={css.labelStyle1}>Email</label>
                            <input className={css.inputStyle1} type="email" name= "email" placeholder="Input you Email address" value={this.state.value} 
                        onChange={this.handleChange} required="required"/>
                        </div>
                        <div className="form-group">
                            <label className={css.labelStyle1}>Password</label>
                            <input className = {css.inputStyle1} type="password" name = "password" 
                        placeholder="Create your password"  ref={this.pswInput} value={this.state.value}
                        onChange={this.handleChange} required="required" title="Create 6-20 digital password"/>
                        </div>
                        <div className="form-group">
                            <label className={css.labelStyle1}>Confirm</label>
                            <input className = {css.inputStyle1} type="password" name = "confirm" 
                            placeholder="Enter your password again"  ref={this.cfmInput} title="Input the same password"
                            onChange={this.handleChange} required="required"/><br/>
                            <span style={{color:'red'}}>{this.state.errMsg}</span>
                        </div>
                        <div className="form-group">
                            <label className={css.labelStyle1}>TrueName</label>
                            <input className = {css.inputStyle1} type="text" name = "name" 
                        placeholder="Enter your real name" value={this.state.value}
                        onChange={this.handleChange} required="required"/>
                        </div>
                    </div> 
                   
                    <div className = {css.banner1}>
                        <span style={{fontWeight:"bold",color:'#ba6c00',fontSize:'20px'}}>Personal Info</span>
                    </div> 
                    <div className = {css.boxStyle1}>
                        <div className="form-group" style={{marginTop:'15px'}}>
                            <label className={css.labelStyle1}>Name</label>  
                            <input className = {css.inputStyle1} type="text" name = "userName" 
                        placeholder="Input your userName"  value={this.state.value}
                        onChange={this.handleChange} required="required"/>
                        </div>
                        <div className="form-group">
                            <label className={css.labelStyle1}>Phone</label>  
                            <input className = {css.inputStyle1} type="phone" name = "phone" required="required" title="Input 9-10 digital phone number"
                        placeholder="Input your phone number" value={this.state.value} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label className={css.labelStyle1}>Address</label> 
                            <input className = {css.inputStyle1} type="text" name = "address" title="Input address" 
                        placeholder="Input your address you live now" value={this.state.value}
                        onChange={this.handleChange} required="required"/>
                        </div>
                    </div>        


                    <div className = {css.banner2}>
                        <span style={{fontWeight:"bold",color:'#ba6c00',fontSize:'20px'}}>Motivation</span>
                    </div> 
                    <div className = {css.banner2} style={{marginLeft:'2%'}}>
                        <span style={{fontWeight:"bold",color:'#ba6c00',fontSize:'20px'}}>Experience</span>
                    </div>

                    <div className = {css.boxStyle2}>
                        <div className="form-group">
                            <textarea style={{marginBottom:'40px',position:'relative'}} className="form-control" name="motivation" onChange={this.handleChange} value={this.state.value} 
                            id="Textarea1" rows="10" placeholder='Please specify the reason why you want to contribute.' required="required"/>
                        </div>
                    </div>
                    <div className = {css.boxStyle2} style={{marginLeft:'2%'}}>
                        <div className="form-group">
                            <textarea style={{marginBottom:'40px',position:'relative'}} className="form-control" name="experience" onChange={this.handleChange} value={this.state.value} 
                            id="Textarea2" rows="10" placeholder='Please indicate your academic background, occupation and skills that you have.' required="required"/>
                        </div>
                    </div>
                    
                    <div className = {css.boxStyle1} style={{borderStyle:'none'}}>
                            <input type="checkbox" className={css.check_input} name="privacy" checked={this.state.value} onChange={this.handleChange} required="required"/>
                            <button onClick={this.handleClick} className={css.btn_none}> 
                            I have read the privacy policy statement in this link, and agree with it by selecting this check box.  
                            </button>
                    </div>
                    <div style ={{textAlign:'center',marginBottom:'20px',display:this.state.showBtn}}>
                            <button type="submit" className="btn btn-primary btn-lg" style={{borderRadius:"4px",marginTop:"5px",backgroundColor:'red',borderColor:'red'}}>Cancel</button>
                            <button type="submit" className="btn btn-primary btn-lg" style={{borderRadius:"4px",marginTop:"5px",marginLeft:"100px",backgroundColor:'green',borderColor:'green'}}>Submit</button>
                    </div>
                     
                </form>
            </div> 
                
            );
          }
    }

export default accountInfo;