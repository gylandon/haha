import Layout from './components/myLayoutAfter';
import fetch from 'isomorphic-unfetch';
import { useRouter } from 'next/router';
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

class message extends React.Component{
    constructor(props){
        super(props);
        this.state={
            role:''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e){
        this.setState({
            role: e.target.value
        })
    }
    handleSubmit(e){
        e.preventDefault();
        const router = useRouter();
        const id = router.query.id
        const url = 'http://localhost:80/'
        if(e.target.name =='approve'){
            const data1 = {
                role: this.state.role,
                applicationId: id
            }
            for(var k in data1){
                if(str != "?"){
                    str += "&";
                }
                str += k + "=" + data1[k];
            }
            fetch(url+e.target.name, {
                method: 'GET', // or 'PUT',
               
                headers:{
                    'Content-Type': 'application/json; charset=utf-8'
                },
                })
                .then(res => res.json())
                .catch(error => console.error('Error:', error))
                .then(response => 
                    console.log('Success:', response),
                ); 
        }else{
            const data1 = {
                applicationId: id
            }
            for(var k in data1){
                if(str != "?"){
                    str += "&";
                }
                str += k + "=" + data1[k];
            }
            fetch(url+e.target.name, {
                method: 'GET', // or 'PUT',
               
                headers:{
                    'Content-Type': 'application/json; charset=utf-8'
                },
                })
                .then(res => res.json())
                .catch(error => console.error('Error:', error))
                .then(response => 
                    console.log('Success:', response),
                ); 
        }
        Router.push({
            pathname:'/message'
        })
    }
    render(){
        return(
                <div>
                    <Layout/>
                    <div style={bannerStyle}>
                        <span>Account info</span>
                    </div> 
                    <div style={boxStyle}>
                        <span>{data.email}</span>
                        <span>{data.psw}</span>
                    </div> 
                    <div style={bannerStyle}>
                        <span>Personal info</span>
                    </div> 
                    <div style={boxStyle}>
                        <span>{data.userName}</span>
                        <span>{data.phone}</span>
                        <span>{data.address}</span>
                    </div> 
                    <div style={boxStyle}>
                        <span>{data.motivation}</span>
                        <span>{data.experience}</span>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <label>Assign a role to this applicant</label>
                        <div className="form-group">
                            <select className="custom-select" name='role' value={this.state.value} onChange={this.handleChange}>
                                <option>Choose a role</option>
                                <option value="contributor">Contributor</option>
                                <option value="curator">Curator</option>
                            </select>
                        </div>
                        <button name='approve_application' type="submit" className="btn btn-primary btn-lg" style={{borderRadius:"4px",marginTop:"20px"}}>Approve</button>
                        <button name='reject_application' type="submit" className="btn btn-primary btn-lg" style={{borderRadius:"4px",marginTop:"20px"}}>reject</button>
                    </form>
                    
                
                </div>
            )
    }
   
}

message.getInitialProps = async function () {
    const router = useRouter();
    const id = router.query.id
    var str = "?";
    const data1={
        applicationId : id
    }
    for(var k in data1){
        if(str != "?"){
            str += "&";
        }
        str += k + "=" + data1[k];
    }
    var url ='http://localhost:80/check_application'
    var requestURL = url  + encodeURI(str);
    const res = await fetch(requestURL);
    const data = await res.json();

  
    return {
        data
    };
}

export default message;

