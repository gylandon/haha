import Layout from '../components/myLayoutAfter';
import { useRouter } from 'next/router';
import Router from 'next/router';
import { Get } from '../components/http'
import {Loading} from "../components/loading"

const inputStyle ={
    margin: 20,
    outlineStyle: 'none' ,
    border: '1px solid #ccc',
    borderRadius: '3px',
    padding: '10px 10px',
    width: '70%',
    position:"relative",
    left:"15%",
    fontFamily: "Microsoft soft",
}
const labelStyle={
    
    position:'relative',
    left:"15%"
};
const boxStyle={
    position:'relative',
    left:'20%',
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

class message extends React.Component{
    constructor(props){
        super(props);
        this.state={
            role:'',
            data:'',
            showLoading:"none"
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount(){
        const router = window.location.pathname
        const router1 = router.split('/')
        const uId = router1[2]
        const data1 = {
            uId: uId
        }
        Get("check_application",data1).then(res=>{
            console.log(res)
            this.setState({
                data: res
            })
        })
    }

    handleChange(e){
        this.setState({
            role: e.target.value
        })
    }
    handleClick(e){
        e.preventDefault();
        const router = window.location.pathname
        const router1 = router.split('/')
        const uId = router1[2]
        console.log(e.target.name)
        if(e.target.name =='approve_application'){
            this.setState({
                showLoading:"block"
            })
            const data1 = {
                role: this.state.role,
                uId: uId
            }
            Get('approve_application',data1).then(res=>{
                console.log(res)
                this.setState({
                    showLoading:"none"
                })
                if(res == 'true'){
                    Router.push({
                        pathname: '/account'
                    })
                }
               
            })
            
        }else{
            const data1 = {
                uId: uId
            }
            Get("reject_application", data1).then(res=>{
                if(res == 'true'){
                    Router.push({
                        pathname:'/account'
                        })
                }
            })
           
        }
    }
    render(){
        return(
                <div>
                    <Layout/>
                    <div style={{display:this.state.showLoading}}>
                        <Loading title="Processing!" content="......" />
                    </div>
                    <div style={bannerStyle}>
                        <span>account info</span>
                    </div> 
                    <div style={boxStyle}>
                        <label style={labelStyle}>Email</label><br/>
                        <input style = {inputStyle} type="email" name= "email" 
                        value={this.state.data.email} readOnly='true'/><br/>
                        <label style={labelStyle}>UserName</label><br/>
                        <input style = {inputStyle} type="text" name = "name" value={this.state.data.userName}
                            readOnly = "true"/><br/>
                    </div> 
                    <div style={bannerStyle}>
                        <span>Personal info</span>
                    </div> 
                    <div style={boxStyle}>
                        <label style={labelStyle}>Name</label><br/>
                        <input style = {inputStyle} type="text" name= "name" 
                        value={this.state.data.name} readOnly='true'/><br/>
                        <label style={labelStyle}>Phone</label><br/>
                        <input style = {inputStyle} type="phone" name = "phone" value={this.state.data.phone}
                            readOnly = "true"/><br/>
                        <label style={labelStyle}>address</label><br/>
                        <input style = {inputStyle} type="phone" name = "phone" value={this.state.data.address}
                        readOnly = "true"/><br/>
                    </div> 
                    <div style={boxStyle}>
                    <label style={labelStyle}>motivation</label><br/>
                    <input style = {inputStyle} type="text"value={this.state.data.motivation}
                    readOnly = "true"/><br/>
                    <label style={labelStyle}>experience</label><br/>
                    <input style = {inputStyle} type="text" value={this.state.data.experience}
                    readOnly = "true"/><br/>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                    <div style={boxStyle}>
                    <label>Assign a role to this applicant</label>
                        <div className="form-group">
                            <select className="custom-select" name='role' value={this.state.value} onChange={this.handleChange}>
                                <option>Choose a role</option>
                                <option value="Contributor">Contributor</option>
                                <option value="Curator">Curator</option>
                                <option value="Manager">Manager</option>
                            </select>
                        </div>
                        <div style ={{textAlign:"center"}}>
                        <button name='approve_application' type="button" onClick={this.handleClick} className="btn btn-info btn-lg" style={{borderRadius:"4px",marginTop:"20px",marginRight:'20px'}}>Approve</button>
                        <button name='reject_application' type="button" onClick={this.handleClick} className="btn btn-secondary btn-lg" style={{borderRadius:"4px",marginTop:"20px"}}>reject</button>
                        </div>
                    </div>
                       
                       
                    </form>
                    
                
                </div>
            )
    }
   
}


export default message;

