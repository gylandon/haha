import Layout from "./myLayoutAfter";
import css from '../style.css'  
import { Post } from "./http"
import React, { Component } from 'react';
import Alert from "./SuccessAlert"

export class SendMessage extends Component {
        constructor(props) {
          super(props)

          this.state = {
             msg: null,
             showSuccess: "none"
          }
          this.handleChange = this.handleChange.bind(this)
        }
        handleChange=(e)=>{
            let name = e.target.name
            let val = e.target.value;
            this.setState({
                [name]:val
            })
        }
        handleSubmit = (e)=>{
            e.preventDefault();
            const uId = localStorage.getItem("uId");
            const eId = localStorage.getItem("eId");
            const data = {
                uId,
                eId,
                message: this.state.message
            }
            Post("send_message",data).then(res=>{
                if(res=="true"){
                    this.setState({
                        showSuccess:"block"
                    })
                }
            })
        }
        render(){
            return(
                <div>
                    <Layout/>
                    <div style={{display:this.state.showSuccess}}>
                        <Alert title="Congratulations!" content="Send successfully!" button="OK" url="/" />
                    </div>
                    <div className={css.banner}>
                        <span style={{color:"white"}}>Send Message</span>
                    </div>
                    <form onSubmit={this.handleSubmit} style={{textAlign: 'center'}}>
                        <div className={css.messageBoxStyle}>
                        <textarea className="form-control" name="message" onChange={this.handleChange}
                            id="Textarea2" rows="20" placeholder='Enter your message' required="required"/>
                        
                            <button type="cancel" className={css.buttonRed} style={{marginTop:"20px",marginRight:"50px"}}>Cancel</button>
                            <button type="submit" className={css.buttonGreen} style={{marginTop:"20px",marginLeft:"50px"}}>Submit</button>
                
                        </div>
                    </form> 
                       
            </div> 
            );
    }
}

export default SendMessage;