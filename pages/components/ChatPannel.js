import React, { Component } from 'react'
import { IoIosArrowBack } from 'react-icons/io'


class ChatHeading extends Component {
    constructor(props) {
        super(props)
        
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick=(e)=>{
        this.props.onClick()
    }

    render() {
        return (
        <div style={{height:"10%"}}>
            <div style={{textAlign:'center',backgroundColor:'#593196',width:"100%",color:"#fff",height:"100%",padding:"7px"}}>
                {this.props.userName}
            </div>
            
            <button className="btn-close" type="button" name="closeChat" onClick = {this.handleClick}><IoIosArrowBack color= "#fff"/></button>
            
            <style jsx>
            {
                `
                    .btn-close{
                        position: relative;
                        left: 5%;
                        top:-27px;
                        background: #593196;
                        border: none;
                    }
                `
            }
            </style>
        </div>
        )
    }
}



class Message extends Component {
    constructor(props) {
      super(props)
      this.state = {
            msgComing: false,
            msg: [],
            showJoin: 'none',
            timeId:null
      }
      this.msg =[]
   
    }
   
    componentDidUpdate(prevProps){
       
        if(this.props.msg !== prevProps.msg){       
            this.msg.push(this.props.msg)
            this.setState({
                msg: this.msg
            })
            console.log(this.state.msg)
        }
        if(this.props.joinUser !==prevProps.joinUser){
            console.log(this.props.joinUser)
            this.setState({
                showJoin: 'block',  
            })
        }
        
    }
   
    render() {
        return (
        <div style={{position:'relative',top:'0%',width:'100%',height:"83%",overflowY: 'scroll' }}>
            <div>
           
                {
                    this.msg.length>0&&
                    this.state.msg.map((item,index) => (

                        <div key={index} className="msg" > 
                        {
                            item.sender == this.props.uId&&
                            item.receiver == this.props.otherUserId&&
                            <div className="right">
                                <div className = "sender">
                                    {item.sender}
                                </div>

                                <div className='data'>
                                {item.data}
                                </div>
                            </div>
                        }
                        {
                            item.receiver == this.props.uId&&
                            item.sender == this.props.otherUserId&&
                            <div className="left">
                                <div className = "sender">
                                    {item.sender}
                                </div> 
                                <div className='data'>
                                    {item.data}
                                </div>
                            </div>
                        }       
                            
                    </div>
                    
                    
                ))}
            </div>
                 
            <div>
            {
                this.msg.length==0&&
                null
            }
            </div>
            <div style={{display:this.state.showJoin,textAlign:'center'}}>
                
                {
                    this.props.joinUser == this.props.uId?
                    <span>You join in the room</span>:
                    <span>{this.props.joinUser} join in the room</span>
                }
                    
                
            </div>
                
           
            <style jsx>
            {
                `
                .msg{
                  
                    animation:.65s ease-out 0s show
                }
                @keyframes show{0%{opacity:0}100%{opacity:1}}
                .right{
                    display:flex;
                    justify-content:flex-end;
                    
                }
               .right .sender{
                    display:flex;
                    justify-content:flex-end;
                    order: 2
               }
                .msg .right .data{
                    background: #5df06c;
                    margin-top:10px;
                    margin-bottom: 10px;
                    border-radius: 10px;
                    padding: 5px 5px;
                    display: inline-block;  
                    color:#fff;
                    order:1
                }
                .left{
                    display:flex;
                    justify-content:flex-start;
                    text-align: left;
                }
              
                .msg .left .data{
                    background: #0181cc;
                    margin-top:10px;
                    margin-bottom: 10px;
                    border-radius: 10px;
                    padding: 5px 5px;
                    display: inline-block;  
                    color:#fff;
                    order:2
                }
               
                `
            }
            </style>
        </div>
        )
    }
}
class MessageInput extends Component{
    constructor(props) {
        super(props)
        this.state = {
            msg: ''
        }
    }
    
    handleClick= (e)=>{
        e.preventDefault();
        this.props.onClick(this.state.msg)
        this.setState({msg:''})
    }
    handleChange = (e)=>{
        this.setState ({
            msg: e.target.value
        })
    }
    render(){
        return(
            <div style={{position: 'relative',width:'100%',height: '10%'}}>
            <form onSubmit={this.handleClick}>
                <input name="msg" value={this.state.msg} onChange= {this.handleChange.bind(this)}/>
                <button disabled={this.state.msg.length<1} type="submit" className="btn-send">Send</button>
            </form>
                
            <style jsx>
                {
                    `
                        .btn-send{
                            border-radius: 3px;
                            background-color: #ffd633;
                            border: none;
                            width:30%;
                            height:100%
                        }
                        input{
                            height: 100%;
                            width:70%;
                            border-radius: 3px;
                            border: 2px solid #777; 
                        }
                        input:focus{
                            border-color: #66afe9;
                            outline: 0;
                            -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
                            box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)
                        }
                    `
                }
            </style>
            </div>
        )
    }
}

export default class ChatPannel extends Component {
    constructor(props) {
        super(props);
        this.state={
            msg: null,
           
        }
        
        this.handleSend = this.handleSend.bind(this)
    }
   
    handleSend =(e) =>{
        const { uId } = this.props
      
        const data = {
            sender: uId,
            receiver: this.props.otherUserId,
            data: e,
            roomId: this.props.roomId
        }
        this.props.onSend('send_msg',data)
    }
    
    render() {
        return (
            <div style={{height:'100%'}}>
                <ChatHeading userName={this.props.otherUser} onClick={this.props.onClick} />
                <Message msg={this.props.msg} uId ={this.props.uId} otherUserId={this.props.otherUserId} joinUser={this.props.joinUser}/>
                <MessageInput onClick={this.handleSend} uId ={this.props.uId}/>
            </div>
        )
    }
}
