import Layout from '../components/myLayoutAfter';
import css from "../style.css"
import { Post, Get } from '../components/http';
import { ShowInfo2, CheckBox } from '../components/Verify';
import Alert1 from '../components/SuccessAlert';
import {Alert} from '../components/warnAlert';
import { ShowRel } from "../components/ShowRel";
import { ShowResource } from "../components/ShowResource"
import Grid from '@material-ui/core/Grid';
import {BasicInput} from "../components/BasicInput.js"
import '../util/config'
import { ViewLeft } from '../components/ViewLeft';
import {Loading} from "../components/loading"
import {FormGroupView} from '../components/Form-group';


const background= {
    background:"url(../static/bg.jpg)  no-repeat center center",
    backgroundSize:"cover",
    backgroundAttachment:"fixed",
    backgroundColor:"#CCCCCC"
}

class Verify extends React.Component{
    constructor(props){
        super(props);
        this.state = {  
            all:false,
            name: "",
            eTitle:"",
            alterName:"",
            alterType:"",
            sDate:"",
            eDate:"",
            bPlace:"",
            dPlace:"",
            occ:"",
            resources:"",
            sumNote:"",
            fullNote:"",
            Digital:"",
            Publish:"",
            Individual:"",
            Organisation:"",
            feedback:'',
            vuId: '',
            eId:'',
            json: [],
            funcJson :[],
            relJson:[],
            relPairJson:[],
            relJson1:[],
            relPairJson1:[],
            dTitle:[],
            dType:[],
            dUrl:[],
            pTitle:[],
            pType:[],
            pUrl:[],
            showAlert:"none",
            showAlert1:"none",
            showErr:"none",
            showErr1:"none",
            showErr2:"none",
            showErr3:"none",
            readOnly: false,
            image: null,
            ip:null, disableBtn:"inline-block",
            loading:"none",showWarning:"none"
        }
      
        this.handleClick = this.handleClick.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleChange1 = this.handleChange1.bind(this)
        this.handleCheck = this.handleCheck.bind(this)
    }
    
    componentDidMount(){
        const router = window.location.pathname
        const vuId = localStorage.getItem("uId")
        const router1 = router.split('/')
        const eId = router1[2]
        this.setState({
            eId: eId,
            vuId: vuId
        })
        const data1={
            eId: eId
        }  
        Get('check_entity', data1).then(res=>{
            var json = []
            var json1 =[]
            var json3=[]
            var json4=[]
            var json2 =[]
            var json5=[]; var json6=[];var json7=[]
            var json8=[];var json9=[];var json10=[]
            this.setState({
                json: res,
                image: res.image,
                uId: res.uId
            })
            res.function.map(item=>{
                json.push(item.function)
                this.setState({
                    funcJson: json,
                })
            })
            res.alternation.map(item=>{
                this.setState({
                    alterName: item.alterName,
                    alterType: item.alterType,
                })
            })
            res.Individual.map(item=>{
                var a = item.eName
                    json1.push(a)
                    json2.push(item.relPairs)
                    this.setState({
                        relJson: json1,
                        relPairJson: json2
                    })
            })
            res.Organisation.map(item=>{
                var a = item.eName
                json3.push(a)
                json4.push(item.relPairs)
                this.setState({
                    relJson1: json3,
                    relPairJson1: json4
                }) 
            })
           
            res.digital.map((item)=>{
                json5.push(item.dTitle)
                json6.push(item.dType)
                json7.push(item.dUrl)
                this.setState({
                    dTitle: json5,
                    dType: json6,
                    dUrl: json7
                })
            })
            res.publish.map((item)=>{
                json8.push(item.pTitle)
                json9.push(item.pType)
                json10.push(item.pUrl)
                this.setState({
                    pTitle: json8,
                    pType: json9,
                    pUrl: json10
                })
            })
           
        })
       
    }
    
    handleCheck=(e)=>{
        let name1 = e.target.name
        let val = e.target.checked
        this.setState({
            [name1] : val
        })
        if(name1=="all"&&val== true){
            this.setState({
                name : "true",
                eTitle : "true",
                alterName : "true",
                alterType : "true",
                sDate : "true",
                eDate : "true",bPlace : "true",dPlace : "true",occ : "true",resources : "true",sumNote : "true",
                fullNote : "true",Digital :"true",Publish:"true",Individual:"true",Organisation:"true"
            })
        }else if(name1=="all"&&val== false){
            this.setState({
                name : "",
                eTitle : "",
                alterName : "",
                alterType : "",
                sDate : "",
                eDate : "",bPlace : "",dPlace : "",occ : "",resources : "",sumNote : "",
                fullNote : "",Digital :"",Publish:"",Individual:"",Organisation:""
            })
        }
    }
    handleChange(name,val){
        this.setState({
            [name] : JSON.stringify(val) 
        })
    }
    handleChange1 = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleClose(name){
        if(name=="err"){
            this.setState({
                showErr:"none"
            })
        }else if(name=="err1"){
            this.setState({
                showErr1:"none"
            })
        }
        else if(name=="err2"){
            this.setState({
                showErr2:"none"
            })
        }
        else if(name=="err3"){

            this.setState({
                showWarning:"none"
            })
        }
       
    }
    handleClick(e){
        e.preventDefault();
        var name = e.target.name
        var role = localStorage.getItem('role')
        var url = window.location.href
            const data = {
                feedback:
                {
                    Digital:this.state.Digital,
                    Publish:this.state.Publish,
                    Individual:this.state.Individual,
                    Organisation:this.state.Organisation,
                    eName: this.state.name,
                    eDate: this.state.eDate,
                    eTitle: this.state.eTitle,
                    sDate: this.state.sDate,
                    function: this.state.occ,
                    resources: this.state.resources,
                    alterName: this.state.alterName,
                    alterType: this.state.alterType,
                    sumNote: this.state.sumNote,
                    fullNote: this.state.fullNote,
                    bPlace: this.state.bPlace,
                    dPlace: this.state.dPlace,
                    feedback:this.state.feedback,   
                    
                },
                vuId : this.state.vuId,
                url:url,
                eId: this.state.eId,
                role: role
            }
            if(name == "reject_entity"){
                let i = 0
               
                Object.keys(data.feedback).forEach(key=>{
                    
                    if(data.feedback[key]== "true"){
                        i++
                    }
                })
                if(i==16){
                    this.setState({
                        showErr:"block"
                    })
                }else{
                    this.setState({
                        loading: "block"
                    })
                    Post(name,data).then(res=>{
                        this.setState({
                            loading:"none",
                            disableBtn:"none"
                        })
                        if(res == "true"){
                            this.setState({
                                showAlert:"block"
                            })
                        }else{
                            this.setState({
                                showErr2:"block"
                            })
                        }
                    })
                }
               
        }else if(name == "approve_entity"){
            let i=0
            Object.keys(data.feedback).forEach(key=>{
                if(data.feedback[key]=="false"){
                    i = 1
                }
            })
            if(i==1){
                this.setState({
                    showErr1:"block"
                })
            }else{
                this.setState({
                    loading: "block"
                })
                Post(name,data).then(res=>{
                    this.setState({
                        loading:"none",
                        disableBtn:"none"
                    })
                    if(res == "true"){
                        this.setState({
                            showAlert1:"block"
                        })
                    }else{
                        this.setState({
                            showErr2:"block"
                        })
                    }
                })    
            }
            
        }
        
    }
    
    render(){
        return(
            <div>
            <Layout />
            <div style={background}>
            <div style={{display:this.state.loading}}>
                <Loading title="Processing!" content="......" />
            </div>
            <div style={{display:this.state.showAlert}}>
                <Alert1 title="Congratulations!" content="Reject successfully!" button="Ok" url={`/../reEntity/${this.state.eId}`} />
            </div>
            <div style={{display:this.state.showAlert1}}>
                <Alert1 title="Congratulations!" content="Approve successfully!" button="Ok" url={`/../reEntity/${this.state.eId}`} />
            </div>
            <div style={{display:this.state.showErr}}>
                <Alert title="Sorry!" content="You cannot approve all the fields, then reject this entity" name="err" onClick={this.handleClose} />
            </div>
            <div style={{display:this.state.showErr1}}>
                <Alert title="Sorry!" content="You need to approve all the fields to approve entity" name="err1" onClick={this.handleClose} />
            </div>
            <div style={{display:this.state.showErr2}}>
                <Alert title="Sorry!" content="This entity has been verified by others!" name="err2" onClick={this.handleClose} />
            </div>
            <div style={{display:this.state.showWarning}}>
                <Alert title="Sorry!" content="You cannot approve information which is empty!" name="err3" onClick={this.handleClose} />
            </div>

            <Grid container spacing={3}
            direction="row"
            justify="flex-end"
            alignItems="flex-start">
            <Grid item sm={12}>
                <div className={css.box} style={{width:"100%"}}>
                    <Grid container spacing={3}
                    direction="row" style={{paddingBottom:"0px"}}
                    justify="flex-end"
                    alignItems="flex-end">
                     
                    <CheckBox label="You can approve all fields here!" onChange={this.handleCheck}
                    checked={this.state.checked} value={this.state.value} />
                    </Grid>
                </div>
            </Grid>
            <Grid item sm={3}>
                <div>
                    <ViewLeft value={this.state.json} onChange={this.handleChange} all={this.state.all} image={this.state.image}
                    verify="true" dTitle={this.state.dTitle} dType={this.state.dType} dUrl={this.state.dUrl} eId={this.state.eId}/>
                </div>
            </Grid>
                <Grid item sm={8} style={{marginRight:"10px"}}>
                    <Grid container spacing={3}
                    direction="column"
                    justify="flex-end"
                    alignItems="flex-start">
                        <Grid item style={{width:"100%"}}>
                            <BasicInput type = {this.state.type} value={this.state.json} handleMutiSelect={this.handleMutiSelect} all={this.state.all}
                            onChange={this.handleChange} verify="true" function={this.state.funcJson} alterName={this.state.alterName} alterType={this.state.alterType} />
                        </Grid>
                        <Grid item style={{width:"100%",height:"100%"}}>
                        <div className={css.banner}>
                            <span>Related entities</span>
                        </div>
                        <div className={css.box}>
                            <div className={css.banner}>
                                <span>Women</span>
                                <ShowInfo2 onChange={this.handleChange} name="Individual" all={this.state.all}/>
                            </div>
                            <div className={css.box}>
                                <ShowRel relJson={this.state.relJson} verify="true" relPairJson={this.state.relPairJson} />
                            </div>
                       
                       
                            <div className={css.banner} style={{marginTop:"300px"}}>
                                <span>Organisations</span>
                                <ShowInfo2 onChange={this.handleChange} name="Organisation" all={this.state.all} />
                            </div>
                            <div className={css.box}>
                                <ShowRel relJson={this.state.relJson1} verify="true" relPairJson={this.state.relPairJson1} />
                            </div>
                        
                        </div>
                        </Grid>
                        <Grid style={{width:"100%",marginBottom:"30px"}}>
                            <div className={css.box}>
                                <div className={css.banner}>                    
                                    <span>Publish resources</span>
                                    <div>
                                        <ShowInfo2 onChange={this.handleChange} name="Publish" all={this.state.all}/>
                                    </div>
                                    
                                </div>
                                <Grid item xs={12} style={{width:"100%"}}>
                                    <ShowResource Title={this.state.pTitle} Type={this.state.pType} Url={this.state.pUrl} verify="true" />
                                </Grid>
                            </div>
                        </Grid>
                        <Grid style={{width:"100%"}}>
                                <div className={css.box}>
                                    <FormGroupView label="Prepare by" value={this.state.json.ePrepared} display="none"/>

                                <div className={css.banner}>                    
                                    <span>Feedback</span>
                                </div>
                                <textarea rows="5" onChange={this.handleChange1} name="feedback" value={this.state.value} className={css.textareaInput}/>
                                </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            
                <div style ={{textAlign:'center',marginBottom:'20px'}}>
                    <button type="button" onClick={this.handleClick} name="approve_entity" className={css.btn_info} style={{borderRadius:"4px",marginTop:"20px",width:"15%",display:this.state.disableBtn}} >Approve entity</button>
                    <button type="button" onClick={this.handleClick} name="reject_entity" className={css.btn_primary} style={{borderRadius:"4px",marginTop:"20px",width:"15%",marginLeft:"50px",display:this.state.disableBtn}}>Reject entity</button>
                </div>
           
            
        </div>
        </div>        

        );
    }
   
}



export default Verify;

