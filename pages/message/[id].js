import React, { Component } from 'react'
import Layout from '../components/myLayoutAfter';
import { Get, Post } from '../components/http';
import css from '../style.css'
import Alert from "../components/SuccessAlert"

class viewMsg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            showReply:"none",
            reply:'',
            showSuccess:"none"
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    componentDidMount(){
        const router = window.location.pathname
        const router1 = router.split('/')
        const mId = router1[2]
        const data = {
            mId 
        }
        Get("message_detail",data).then(res=>{
            this.setState({
                data: res.message[0]
            })
        })
    }
    handleClick= e =>{
        if(e.target.name == "reply"){
            this.setState({
                showReply:"block"
            })
        }else if(e.target.name == "send"){
            const uId = localStorage.getItem("uId");
            const eId = localStorage.getItem("MsgeId");
            const data = {
                uId,
                eId,
                message: this.state.reply
            }
            Post("send_message",data).then(res=>{
                if(res=="true"){
                    this.setState({
                        showSuccess:"block"
                    })
                }
            })
        }
       
    }
    handleChange= e=>{
        this.setState({
            reply: e.target.value
        })
    }
    render() {
        return (
        <div>
            <Layout />
            <div style={{display:this.state.showSuccess}}>
                <Alert title="Congratulations!" content="Send successfully!" button="OK" url="/" />
            </div>
            <div className={css.banner} style={{position:"relative",left:"20%",width:"60%"}}>
                <span>Question</span>
            </div>
            <div className = {css.boxStyle1}>
                <textarea type="text" rows="5" value={this.state.data.message} className={css.textareaInput} readOnly={true}/>
                <span>Send from: {this.state.data.sender},&nbsp;&nbsp;Email:{this.state.data.senderEmail},&nbsp;&nbsp;Time: {this.state.data.time}</span>
                <div style={{marginTop:"20px"}}>
                    <a href= "https://mail.google.com/" target="_blank" rel="noopener noreferrer" >Reply him/her by Email</a>
                </div>
            </div>
            <div style={{display:this.state.showReply,textAlign:"center"}}>
                <div className={css.banner} style={{position:"relative",left:"20%",width:"60%"}}>
                    <span>Reply</span>
                </div>
                <div className = {css.boxStyle1}>
                    <textarea type="text" rows="5" name="reply" value={this.state.value} onChange={this.handleChange} className={css.textareaInput}/>
                </div>
                <button name="send" style={{marginTop:"20px",width:"150px"}} className={css.btn_info} onClick={this.handleClick} >Send Message</button>
            </div>
           
        </div>
        )
    }
}
export default viewMsg;
