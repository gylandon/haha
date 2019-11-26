import Layout from '../components/myLayoutAfter';
import css from "../style.css"
import Router from 'next/router';
import { Get } from '../components/http';
import { ShowInfoBView,ShowInfoGView } from '../components/Verify';
import { ShowRel } from "../components/ShowRel";
import { ShowResource } from "../components/ShowResource"
import Grid from '@material-ui/core/Grid';
import {BasicView} from "../components/BasicView.js"
import '../util/config'
import { ViewLeft } from '../components/ViewLeft';
import {FormGroupView} from '../components/Form-group';

const background= {
    background:"url(../static/bg.jpg)  no-repeat center center",
    backgroundSize:"cover",
    backgroundAttachment:"fixed",
    backgroundColor:"#CCCCCC"
}
class ViewEntity extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            uId: '',
            eId:'',
            feedback:[],
            json: [],
            funcJson :[],
            relJson:[],
            relPairJson:[],
            showFeedback: 'none',
            relJson1:[],
            relPairJson1:[],
            dTitle:[],
            dType:[],
            dUrl:[],
            pTitle:[],
            pType:[],
            pUrl:[],
            image:null,
            type:"Person",
            alterName: null,
            alterType:null,
            status: ''
        }
        this.handleClick = this.handleClick.bind(this)

    }
    
    componentDidMount(){
        const uId = localStorage.getItem('uId')
        const status = localStorage.getItem('status')
        const router = window.location.pathname
        const router1 = router.split('/')
        const eId = router1[2]
        this.setState({
            uId: uId,
            eId: eId,
            status
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
            Object.keys(res).forEach(key=>{
                if(key == 'feedback'){
                    this.setState({
                        showFeedback: "inline-block",
                    })
                }
            })
            this.setState({
                json: res, 
                feedback: res.feedback,
                image:res.image
            })
            res.alternation.map(item=>{
                this.setState({
                    alterName: item.alterName,
                    alterType: item.alterType,
                })
            })
            res.function.map(item=>{
                json.push(item.function)
                this.setState({
                    funcJson: json,
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
        });
    }
    
    handleClick(e){
        e.preventDefault();
        name = e.target.name
        if(name == "edit_entity"){
            Router.push({
                pathname:`/../editEntity/${this.state.eId}`
            })
        }else if(name=="Contact"){
            localStorage.setItem("eId",this.state.eId)
            Router.push({
                pathname: '/../components/SendMessage'
            })
        }
    }
    
    render(){
        return(
            <div>
            <Layout />
            <div style={background}>
            <Grid container spacing={3}
            direction="row"
            justify="flex-end"
            alignItems="flex-start">

            <Grid item sm={4}>
                <div>
                    <ViewLeft value={this.state.json} image={this.state.image} verify="false" display={this.state.showFeedback}
                    dTitle={this.state.dTitle} dType={this.state.dType} dUrl={this.state.dUrl} feedback={this.state.feedback}
                    eId={this.state.eId} />
                </div>
            </Grid>
                <Grid item sm={7} style={{marginRight:"10px"}}>
                    <Grid container spacing={3}
                    direction="column"
                    justify="flex-end"
                    alignItems="flex-start">
                        <Grid item style={{width:"100%"}}>
                            <BasicView type = {this.state.type} value={this.state.json} feedback={this.state.feedback} alterType={this.state.alterType}
                            view="true" function={this.state.funcJson} display={this.state.showFeedback} alterName={this.state.alterName}/>
                        </Grid>
                        <Grid item style={{width:"100%",height:"100%"}}>
                        <div className={css.banner}>
                            <span>Related entities</span>
                        </div>
                        <div className={css.box}>
                            <div className={css.banner}>
                            <Grid container spacing={3}
                                direction="row"
                                justify="flex-start"
                                alignItems="flex-start">
                                <Grid item xs={5}>
                                    <span>Women</span>
                                </Grid>
                                <Grid item xs={5}>
                                {
                                    this.state.showFeedback=="inline-block"?
                                    <ShowInfoGView pass={this.state.feedback.Individual}/>
                                    :
                                    null
                                }
                                </Grid>
                            </Grid>
                            </div>
                            <div className={css.box}>
                                <ShowRel relJson={this.state.relJson} relPairJson={this.state.relPairJson} />
                            </div>
                       
                       
                            <div className={css.banner} style={{marginTop:"300px"}}>
                            <Grid container spacing={3}
                                direction="row"
                                justify="flex-start"
                                alignItems="flex-start">
                                <Grid item xs={5}>
                                    <span>Organisations</span>
                                </Grid>
                                <Grid item xs={5}>
                                {
                                    this.state.showFeedback=="inline-block"?
                                    <ShowInfoGView pass={this.state.feedback.Organisation}/>
                                    :
                                    null
                                }
                                </Grid>
                            </Grid>
                            </div>
                            <div className={css.box}>
                                <ShowRel relJson={this.state.relJson1} relPairJson={this.state.relPairJson1} />
                            </div>
                        
                        </div>
                        </Grid>
                        <Grid style={{width:"100%"}}>
                        <div className={css.box}>
                            <div className={css.banner}>                    
                                <span>Publish resources</span>
                                {
                                    this.state.showFeedback=="inline-block"?
                                    <div style={{position:"relative",left:"84%",width:"15%"}}>
                                        <ShowInfoBView pass={this.state.feedback.Publish}/>
                                    </div>:
                                    null

                                }   
                            </div>
                            <Grid item xs={12} style={{width:"100%"}}>
                                <ShowResource Title={this.state.pTitle} Type={this.state.pType} Url={this.state.pUrl} />
                            </Grid>

                        </div>
                        </Grid>
                        <Grid style={{width:"100%"}}>
                            <div className={css.box}>
                            <Grid item xs={12} style={{width:"100%"}}>
                                <div className={css.box}>
                                    <FormGroupView label="Prepare by" value={this.state.json.ePrepared} display="none"/>
                                </div>
                            </Grid>
                            {
                                this.state.showFeedback=="none"?null:
                                <Grid item xs={12} style={{marginTop:"30px"}}>
                                    <div className={css.banner}>                    
                                        <span>Feedback</span>
                                    </div>
                                    <div className="form-group">
                                        <textarea rows="6" className = {css.textareaInput} type="text" name ="feedbackInput"
                                        readOnly={true} style={{height:"100%"}} value={this.state.feedback.feedback}/>
                                    </div>
                                </Grid>
                              
                            }
                            
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
                
            </Grid>
            {
                this.state.status =="Rejected"&&
                <div style ={{textAlign:'center',marginTop:'20px'}}>
                    <button type="button" onClick={this.handleClick} name="Contact" className={css.btn_primary} style={{borderRadius:"4px",marginTop:"20px",width:"20%",display:this.state.disableBtn}} >Questions?Ask</button>
                </div>
            }
            
           
            
        </div>
        </div>        

        );
    }
   
}



export default ViewEntity;

