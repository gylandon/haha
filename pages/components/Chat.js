import React, { Component } from 'react'
import { Connect,Emit } from './http'
import ShowChatList from './ChatList'
import ChatPannel from './ChatPannel'
import '../util/config'
import { MdAccountCircle } from "react-icons/md";



export default class Chat extends Component {
    constructor(props) {
        super(props);
        const socket = Connect()
        this.state = {
            showIcon:1,
            showListX: '-100%',
            showChat:'-10%',
            chatUser: null,
            chatUserId: null,
            disableIcon: false,
            socket,
            msg: [],
            joinUser:null,
            chatStatus: 0,
            showNote: false,
            showNote1: false,
            sender: null,
            roomId: null

        }
        this.uId = null
        this.ready();
        this.handleShowList = this.handleShowList.bind(this)
        this.handleCloseList = this.handleCloseList.bind(this)
        this.handleShowChat = this.handleShowChat.bind(this)
    }
    componentDidMount(){
        this.uId= localStorage.getItem("uId")
    }
    handleShowList =() =>{
        this.setState({ showListX: '10%',showIcon: 0,chatStatus:1})

    }
    handleCloseList=()=>{
        this.setState({
            showListX: '-100%',
            showIcon:1,
            chatStatus: 0
        })
    }
    handleCloseChat=()=>{
        this.setState({
            showListX: '10%',
            showChat: '-10%',
            disableIcon: false,
            disableChat: false,
            chatStatus:1
        })
    }
    handleShowChat = (name,id) =>{
        console.log(name,id)
        // const { userInfo } = this.props
        const { socket } = this.state
        this.setState({
            showListX: '-100%',
            showChat: '120%',
            chatUser: name,
            chatUserId: this.uId,
            disableIcon:true,
            chatStatus: 2
        })
       
        const data = {
            joiner: this.uId,
            chater: id,
        }
        Emit('joinRoom',data,socket)
      
    }
    ready(){
        const { socket } = this.state
        socket.on('join_room',(msg)=>{
            this.joinRoom(msg)
        })

        socket.on('receive_msg',(msg)=>{
            console.log(msg)
            this.receiveMsg(msg)
        })
    }
    joinRoom = (msg)=>{ 
        this.setState({
            joinUser: msg.joiner,
            roomId: msg.roomId
        })  
    }

    receiveMsg = (msg) =>{
        const { chatStatus } = this.state
        this.setState({
            msg:msg
        })
      
        if(chatStatus ==0){
            this.setState({
                showNote: true
            })
        }else if( chatStatus == 1){
            this.setState({
                sender:msg.sender,
                showNote1: true
            })
        }else if( chatStatus==2){

        }
      
    }
    handleSend = ( method,data )=>{
        Emit(method,data,this.state.socket)
    }

    render() {
        return (
        <div style={{position: 'fixed',bottom: '0%',left: '70%',width:"28%",height:"50%",zIndex:1}}>
            <div className="showIcon" style={{opacity:this.state.showIcon}}> 
                <button type='button' disabled={this.state.disableIcon} style={{backgroundColor:'white',border:'none'}} onClick={this.handleShowList}>
                    <img src='/static/icon.png' style={{width:'60%'}}/>{this.state.showNote&&<MdAccountCircle />}
                </button>      
            </div>
            
                <div className="showList">
                    <ShowChatList onClick={this.handleCloseList} showChat={this.handleShowChat} showNote1={this.state.showNote1}
                    sender = {this.state.sender}/>
                </div>
                <div className="showChat">
                    
                    <ChatPannel msg={this.state.msg} socket={this.state.socket} onSend={this.handleSend.bind(this)} joinUser={this.state.joinUser}
                    onClick={this.handleCloseChat} otherUser={this.state.chatUser} otherUserId={this.state.chatUserId} roomId={this.state.roomId}
                    uId={this.uId}/>
                </div>
            <style jsx>{`
              
                .showIcon {
                    position: relative;
                    width: 50%;
                    left: 70%;
                    top:70%;
                }
                .showList {
                    position:relative;
            
                    width:100%;
                    height:100%;
                    bottom:${this.state.showListX};
                    border:2px solid  #ffd633;
                    border-radius:8px;
                    transition: all 1s;
                    background :#fafafa;
                    overflow-Y: scroll;      
                };
                .showChat {
                    position:relative;
                  
                    width:100%;
                    height:100%;
                    bottom:${this.state.showChat};
                    border:2px solid  #ffd633;
                    border-radius:8px;
                    transition: all 1s;
                    background :#fafafa;
                         
                };
              
            `}</style>
           
        </div>
        )
    }
}
