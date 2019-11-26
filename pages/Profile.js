import Layout from './components/myLayoutAfter';
import Router from 'next/router';
import { Get } from './components/Http'
import css from "./style.css"
import Switch from '@material-ui/core/Switch';


class message extends React.Component{
    constructor(props){
        super(props);
        this.state={
            role:'',
            address:'',
            name:'',
            email:'',
            experience:'',
            motivation:'',
            phone:'',
            userName:'',
            switch:'',
            readOnly: true,
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleChange1 = this.handleChange1.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount(){
        const uId = localStorage.getItem('uId')
        const role = localStorage.getItem('role')  
        
        this.setState({role})
        const data1 = {
            uId: uId
        }
        Get("check_application",data1).then(res=>{
            Object.keys(res).forEach(key=>{
                this.setState({
                    [key]:  res[key]
                })
            })
        })
    }
    handleChange1= name =>e=>{
        this.setState({
            switch : e.target.checked
        })
    }
    handleChange(e){
        let name = e.target.name
        let val = e.target.value
        this.setState({
            [name]: val
        })
    }
    handleClick(e){
        e.preventDefault();
        let name = e.target.name
        if(name == "update"){
            Router.push({
                pathname: '/UpdateProfile'
            })
        }
       
        
       
            
    }
    render(){
        return(
                <div>
                    <Layout/>
                    <div className = {css.banner1}>
                        <span style={{fontWeight:"bold",color:'#ba6c00',fontSize:'20px'}}>Account Info</span>
                    </div>  
                    <div className={css.boxStyle1}>
                        <div className="form-group" style={{marginTop:'15px'}}>
                            <label className={css.labelStyle1}>Email</label>
                            <input className={css.inputStyle1} type="email" name= "email" value={this.state.email}  readOnly={true}/>
                        </div>
                        <div className="form-group">
                            <label className={css.labelStyle1}>UserName</label>
                            <input className={css.inputStyle1} type="text" name = "name" value={this.state.userName} readOnly={true}/>
                        </div>
                        <div className="form-group">
                            <label className={css.labelStyle1}>Role</label>
                            <input className={css.inputStyle1} type="text" name = "role" value={this.state.role} readOnly={this.state.readOnly}/>
                        </div>
                    </div> 

                    <div className = {css.banner1}>
                        <span style={{fontWeight:"bold",color:'#ba6c00',fontSize:'20px'}}>Personal Info</span>
                    </div> 
                    <div className={css.boxStyle1}>
                        <div className="form-group" style={{marginTop:'15px'}}>
                            <label className={css.labelStyle1}>Name</label>
                            <input className={css.inputStyle1} type="text" name= "name" 
                        value={this.state.name} readOnly={this.state.readOnly} />
                        </div>
                        <div className="form-group">
                            <label className={css.labelStyle1}>Phone</label>
                            <input className={css.inputStyle1} type="phone" name = "phone" value={this.state.phone}
                        readOnly={this.state.readOnly}/>
                        </div>
                        <div className="form-group">
                            <label className={css.labelStyle1}>Address</label>
                            <input className={css.inputStyle1} type="phone" name = "phone" value={this.state.address}
                        readOnly={this.state.readOnly}/>
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
                            <textarea className={css.textareaInput} type="text"value={this.state.motivation}
                        readOnly={this.state.readOnly} rows="10"/>
                        </div>
                    </div>
                    <div className = {css.boxStyle2} style={{marginLeft:'2%'}}>
                        <div className="form-group">
                        <textarea className={css.textareaInput} type="text" value={this.state.experience}
                        readOnly={this.state.readOnly} rows="10"/>
                        </div>
                    </div>

                    <div style={{textAlign:"center"}}>
                        <Switch
                            checked={this.state.switch}
                            onChange={this.handleChange1('switch')}
                            value="switch"
                            color= "primary"
                        />
                        <label>Select for receiving Email</label>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                    
                   
                        <div style ={{textAlign:"center"}}>
                            <button name='update' type="button" onClick={this.handleClick} className="btn btn-info btn-lg" style={{borderRadius:"4px",marginTop:"20px",marginRight:'20px'}}>Update Profile</button>
                        </div>  
                    
                       
                        
                  
                    </form>
                
                </div>
            )
    }
   
}


export default message;

