import React, { Component } from 'react'
import { Get } from './http'
import { FaUserCircle } from 'react-icons/fa'
import { IoIosArrowForward,IoIosArrowDown } from "react-icons/io";

// const manager = [
//     {
//         uId: 111, userName:'gyprodeve@gmail.com'
//     },
//     {
//         uId: 222, userName:'555@gmail.com'
//     },
//     {
//         uId: 333,userName: 'weili'
//     },
// ]
// const contributor = [
//     {
//         uId: '3',userName: 'weili'
//     },
//     {
//         uId: '4', userName:'luWang'
//     }
// ]
// const curator = [
//     {
//         uId: '5',userName: 'jing'
//     },
//     {
//         uId:' 6', userName:'xueling'
//     }
// ]
class ShowList extends Component{
    constructor(props) {
       super(props)
      
       this.handleClick = this.handleClick.bind(this)
       this.handleClick1 = this.handleClick1.bind(this)
    }
    handleClick(e){
        this.props.onClick(e.target.name)
       
    }
    handleClick1(e){
        this.props.onChat(e.target.name,e.target.value)
    }
    render(){
        return(
            <div style={{ marginBottom:'10px'}}>
                <button type="button" className="btn btn-info" name={this.props.btnName} onClick={this.handleClick} style={{background:'#593196',height:"100%",width:"100%",padding:"5px",border:'none'}}>
                    {!this.props.disabled?<IoIosArrowForward style={{position:"relative",left:'-30%'}}/>:
                        <IoIosArrowDown style={{position:"relative",left:'-30%'}}/>}{this.props.role}
                    </button>
                    <div className = "show">
                   
                        {this.props.data.map(item => (
                            <div key={item.uId} style={{position:"relative",height:'20px',marginBottom:'10px',marginTop:'10px'}}>
                                <button type="button" onClick={this.handleClick1} name={item.userName} value={item.uId} className="btn-none">
                                    <FaUserCircle /> {item.userName}
                                </button><br/> 
                            </div>                     
                        ))}
                    </div>
                    <style jsx>{`
                    .show{
                        display: ${this.props.play};
                    },
                    .btn-none{
                        border:none;
                        background: #fff;
                        width:100%;
                      
                    }
                `}</style>
            </div>
        )
    }
    
}
export default class showChatList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            manager: [],
            curator: [],
            contributor: [],
            disableManager: false,
            disableCurator: false,
            disableContributor: false,
            showMana: 'none',
            showCon: 'none',
            showCur: 'none',
        }
     
        this.handleClick = this.handleClick.bind(this)
        this.handleClick1 = this.handleClick1.bind(this)
        this.handleChat = this.handleChat.bind(this)
    }
    componentDidMount(){
        const uId = localStorage.getItem('uId')
        const role = localStorage.getItem("role")
        const data = {
            uId : uId,
            role
        }
        // this.setState({
        //     manager: manager,
        //     contributor: contributor,
        //     curator
        // })
        // this.manager = manager
        this.initList(data)
       
    }

    initList=(data)=>{
        Get('get_chat_list',data).then(res=>{
            res.map(item =>{
                const { manager,contributor,curator } = this.state
                if(item.role == 'Contributor'){
                    this.setState({contributor:{contributor}.push(item)})
                }else if(item.role == 'Curator'){
                    this.setState({curator:{curator}.push(item)})
                }else{
                    this.setState({manager:{manager}.push(item)})
                }
            })
        })
    }
    handleClick=(e)=>{
       
        if(e =="showMana"){
            const val = !this.state.disableManager
            if(val ==true){
                this.setState({
                    showMana:"block",
                    disableManager: true
                })
            }else{
                this.setState({
                    showMana:"none",
                    disableManager: false
                })
            }
          
        }else if(e == 'showCur'){
            const val = !this.state.disableCurator
            if(val ==true){
                this.setState({
                    showCur:"block",
                    disableCurator: true
                })
            }else{
                this.setState({
                    showCur:"none",
                    disableCurator: false
                })
            }
        }else if(e == "showCon"){
            const val = !this.state.disableContributor
            if(val ==true){
                this.setState({
                    showCon:"block",
                    disableContributor: true
                })
            }else{
                this.setState({
                    showCon:"none",
                    disableContributor: false
                })
            }
        }
    }
    handleClick1 =(e)=>{
        var name = e.target.name
        if(name == 'close'){
            this.props.onClick()
        }
    }
    handleChat =(e,a)=>{
        this.props.showChat(e,a)
    }
    render() {
        return (
            <div >
                <div>
                    <div style={{textAlign:"center",marginBottom:'10px'}}>
                        <h5>Chat List</h5>
                    </div>
                    <div>
                        {
                            this.state.manager !==[]?
                            <ShowList play={this.state.showMana} role="Manager" btnName="showMana" onChat={this.handleChat}
                            disabled={this.state.disableManager} onClick={this.handleClick} data={this.state.manager} />
                            :null
                        }
                        {   
                            this.state.curator !== []?
                            <ShowList play={this.state.showCur} role="Curator" btnName="showCur"
                            disabled={this.state.disableCurator} onClick={this.handleClick} data={this.state.curator} />
                            :null
                        }
                        {   
                            this.state.contributor !== []?
                            <ShowList play={this.state.showCon} role="Contributor" btnName="showCon"
                            disabled={this.state.disableContributor} onClick={this.handleClick} data={this.state.contributor}/>
                            :null
                        }
                        <div style={{textAlign:'center'}}>
                            <button name="close" className="btn btn-info" style={{borderRadius:'3px',margin:'15px'}} type="button" onClick={this.handleClick1}>close</button>
                        </div>
                    </div>
                </div>
              
            </div>
        )
    }
}