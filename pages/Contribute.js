import Layout from './components/myLayoutAfter';
import ReactTooltip from 'react-tooltip'
import { IoMdInformationCircleOutline } from "react-icons/io";
import React from 'react';
import css from './style.css' 
import Relations from "./components/Relations"
import Grid from '@material-ui/core/Grid';
import {BasicInput} from "./components/BasicInput.js"
import Publish from "./components/Publish"
import './util/config'
import Alert1 from './components/SuccessAlert'
import {LeftCon} from "./components/LeftCon"
import {Alert} from './components/warnAlert';
import {FormGroup} from './components/Form-group';
import  Router  from 'next/router';

const background= {
    background:"url(../static/bg.jpg)  no-repeat center center",
    backgroundSize:"cover",
    backgroundAttachment:"fixed",
    backgroundColor:"#CCCCCC"
}


class C extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                type:'',
                submitSuccess: 'none',
                submitSuccess1: 'none',
                submitError: 'none',
                submitError1: 'none',
                date:'',
                occ:'',
                eTitle:'',
                name: '',
                title: '',
                alterName: '',
                alterType: '',
                sDate: '',
                eDate:'',
                bPlace:'',
                dPlace:'',
                ePrepared: '',
                relations:[],
                relations1:[],
                relations2:[],
                relations3:[],
                sumNote:'',
                fullNote:'',
                ePrepared: '',
                relNum: 1,
                ogNum:1,
                dNum: 1,
                pNum:1,readOnly:false,
                disableBtn: "block",showAlert:"none",
                image:'',
                resources:'',uId:''
            };
            this.flag = "0"
            this.relJson = [],
            this.relJson1 = [],
            this.reId = [],
            this.relPair = []
            this.reId1 = [],
            this.relPair1 = []
            this.props.data.map((item)=>{
                const value = item.eId
                const label = item.eName
                const rel = {}
                rel.label = label;
                rel.value = value;
                if(item.eType =="Person"){
                    this.relJson.push(rel)
                }else if(item.eType == "Organisation"){
                    this.relJson1.push(rel)
                }
            })
            this.relation = []
            this.relation1 = []
            this.relation2 = []
            this.relation3 = []
            this.fRelation = [],this.fRelation1 = [],
            this.fRelation2 = [],this.fRelation3 = [],this.dTitle =[],this.dType=[],
            this.dUrl=[],this.pTitle =[],this.pType=[],this.pUrl=[]
            this.handleChange = this.handleChange.bind(this);
            this.handleChange1 = this.handleChange1.bind(this);
            this.handleChange2 = this.handleChange2.bind(this);
            this.handleClick = this.handleClick.bind(this);
            this.handleClick1 = this.handleClick1.bind(this);
            this.handleClick2 = this.handleClick2.bind(this);
            this.handleClick3 = this.handleClick3.bind(this);
            this.handleSelect = this.handleSelect.bind(this);
            this.handleSelect1 = this.handleSelect1.bind(this);
            this.handleMutiSelect = this.handleMutiSelect.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
            this.handleClose = this.handleClose.bind(this);
            this.handleSave = this.handleSave.bind(this)
            
        }
        componentDidMount(){
            const type = localStorage.getItem('type')
            const ePrepared = localStorage.getItem('userName')
            const uId = localStorage.getItem('uId')
            this.setState({
                type, ePrepared,uId
            })
        }
        handleClose(name){
            if(name=="err"){
                this.setState({
                    showAlert:"none"
                })
            }else if(name=="err1"){
                Router.push({
                    pathname:`/./myEntity/${this.state.uId}`
                })
            }
           
        }
        handleChange(e){
            let name = e.target.name
            let val = e.target.value
            this.setState({[name]: val});
        }
        handleChange2(name,val){
            this.setState({[name]: val});
        }
        handleChange1(name,val){
            let aa = {};
            aa.name = name;
            aa.value = val;
            let arr = name[0]
            if(arr =="p"){
                if(this.relation3.length !==0){
                    this.relation3.map((item,index)=>{
                        if(item.name==name){
                            this.relation3.splice(index,1)     
                        }    
                    })
                    this.relation3.push(aa)
                }else{
                    this.relation3.push(aa)
                }
            }else{
                if(this.relation2.length !==0){
                    this.relation2.map((item,index)=>{
                        if(item.name==name){
                            this.relation2.splice(index,1)  
                        }
                    })
                    this.relation2.push(aa)
                }else{
                    this.relation2.push(aa)
                }
            }
        }
        handleMutiSelect(selectOption){
            if(selectOption!==null){
                let option = [];
                selectOption.forEach(element => {
                    option.push(element.label)
                });
                this.setState({
                    occ: option
                })
            }else{
                this.setState({
                    occ: ''
                })
            }
           
        }
        handleSelect(name, val){
            let aa = {};
            aa.name = name;
            aa.value = val;
            if(this.relation.length !==0){
                this.relation.map((item,index)=>{
                    if(item.name==name){
                        this.relation.splice(index,1)  
                    }
                })
                this.relation.push(aa)
            }else{
                this.relation.push(aa)
            }
        }
        handleSelect1(name, val){
            let aa = {};
            aa.name = name;
            aa.value = val;
            if(this.relation1.length !==0){
                this.relation1.map((item,index)=>{
                    if(item.name==name){
                        this.relation1.splice(index,1)  
                    }
                })
                this.relation1.push(aa)
            }else{
                this.relation1.push(aa)
            }
        }
        handleClick = (e)=>{
            let l = e.length
            let arr = e.slice(0,l-1)
            let arr1 = e[l-1] 
            if(arr=='add'){
                let num = this.state.relNum
                this.setState({
                    relNum: num+1
                });
            }else if(arr =='delete'){
                let num = this.state.relNum
                if(this.relation.length === 0){
                    this.setState({
                        relNum: num-1
                    });
                }else{
                    this.relation.map((item,index)=>{
                        if(item.name.indexOf(arr1)>-1){
                            this.relation.splice(index,1)
                        }
                    })
                     this.relation.map((item,index)=>{
                        if(item.name.indexOf(arr1)>-1){
                            this.relation.splice(index,1)
                        }
                    })
                    this.setState({
                        relNum: num-1
                    });
                }
               
            }
        }
        handleClick1=(e)=>{
            let l = e.length
            let arr = e.slice(0,l-1)
            let arr1 = e[l-1] 
            if(arr=='add'){
                let num = this.state.ogNum
                this.setState({
                    ogNum: num+1
                });
            }else if(arr =='delete'){
                let num = this.state.ogNum
                if(this.relation1.length === 0){
                    this.setState({
                        ogNum: num-1
                    });
                }else{
                    this.relation1.map((item,index)=>{
                        if(item.name.indexOf(arr1)>-1){
                            this.relation1.splice(index,1)
                        }
                    })
                    this.relation1.map((item,index)=>{
                        if(item.name.indexOf(arr1)>-1){
                            this.relation1.splice(index,1)
                        }
                    })
                    this.setState({
                        ogNum: num-1
                    });
                }
            }
        }
        handleClick2=(e)=>{
            let l = e.length
            let arr = e.slice(0,l-1)
            let arr1 = e[l-1] 
            let num = this.state.dNum
            if(arr=='add'){
                this.setState({
                    dNum: num+1
                });
            }else if(arr =='delete'){
                
                if(this.relation2 == false){
                    this.setState({
                        dNum: num-1
                    });
                }else{
                    this.relation2.map((item,index)=>{
                        if(item.name.indexOf(arr1)>-1){
                            this.relation2.splice(index,1)
                        }
                    })
                    this.relation2.map((item,index)=>{
                        if(item.name.indexOf(arr1)>-1){
                            this.relation2.splice(index,1)
                        }
                    })
                    this.setState({
                        dNum: num-1
                    });
                }
            }
        }
        handleClick3=(e)=>{
            let l = e.length
            let arr = e.slice(0,l-1)
            let arr1 = e[l-1]
            if(arr=='add'){        
                let num = this.state.pNum
                this.setState({
                    pNum: num+1
                });
            }else if(arr =='delete'){
                let num = this.state.pNum
                if(this.relation3.length == 0){
                    this.setState({
                        pNum: num-1
                    });
                }else{
                    this.relation3.map((item,index)=>{
                        if(item.name.indexOf(arr1)>-1){
                            this.relation3.splice(index,1)
                        }
                    })
                      this.relation3.map((item,index)=>{
                        if(item.name.indexOf(arr1)>-1){
                            this.relation3.splice(index,1)
                        }
                    })
                    this.setState({
                        pNum: num-1
                    });
                }
            }
        }
        getData(){
            let uId = localStorage.getItem('uId')
            for(var i=0;i<this.relation.length;i++){
                let l = this.relation[i].name.length
                let arr = this.relation[i].name.slice(0,l-1)
                let arr1 = this.relation[i].name[l-1]
                let bb= {}
                bb.id = arr1
                bb.value = this.relation[i].value
                if(arr == "reId"){              
                    this.reId.push(bb)
                }else{
                    this.relPair.push(bb)
                }
            }
            this.reId.map((item,index)=>{
               item.id = index
            })
             this.relPair.map((item,index)=>{
               item.id = index
            })
            for(var j=0;j< Math.max(this.reId.length, this.relPair.length);j++){
                let cc ={}
                cc.reId = '',
                cc.relPair = ''
                if(this.reId.length !==0){
                    const reId = this.reId.filter(item=> item.id == JSON.stringify(j))
                    if(reId.length !== 0){
                        cc.reId = reId[0].value
                    }else{
                        cc.reId = ''
                    }
                }
                if(this.relPair.length !==0){
                    const relPair = this.relPair.filter(item=> item.id == JSON.stringify(j))
                    if(relPair.length !== 0){
                        cc.relPair = relPair[0].value
                    }else{
                        cc.relPair = ''
                    }
                }
                this.fRelation.push(cc)
            }
            
            for(var i=0;i<this.relation1.length;i++){
                let l = this.relation1[i].name.length
                let arr = this.relation1[i].name.slice(0,l-1)
                let arr1 = this.relation1[i].name[l-1]
                let bb= {}
                bb.id = arr1
                bb.value = this.relation1[i].value
                if(arr == "reId"){              
                    this.reId1.push(bb)
                }else{
                    this.relPair1.push(bb)
                }
                 
            }
            this.reId1.map((item,index)=>{
               item.id = index
            })
             this.relPair1.map((item,index)=>{
               item.id = index
            })
            for(var j=0;j< Math.max(this.reId1.length, this.relPair1.length);j++){
                let cc ={}
                cc.reId = '',
                cc.relPair = ''
                if(this.reId1.length !==0){
                    const reId = this.reId1.filter(item=> item.id == JSON.stringify(j))
                    if(reId.length !== 0){
                        cc.reId = reId[0].value
                    }else{
                        cc.reId = ''
                    }
                    
                }
                if(this.relPair1.length !==0){
                    const relPair = this.relPair1.filter(item=> item.id == JSON.stringify(j))
                    if(relPair.length !== 0){
                        cc.relPair = relPair[0].value
                    }else{
                        cc.relPair = ''
                    }
                    
                }
                this.fRelation1.push(cc)
            }
            for(var i=0;i<this.relation2.length;i++){
                let l = this.relation2[i].name.length
                let arr = this.relation2[i].name.slice(0,l-1)
                let arr1 = this.relation2[i].name[l-1]    
                let bb= {}
                bb.id = arr1
                bb.value = this.relation2[i].value
                if(arr == "dTitle"){              
                    this.dTitle.push(bb)
                }
                else if(arr == "dType"){
                    this.dType.push(bb)
                }
                else if(arr == "dUrl")
                {
                    this.dUrl.push(bb)
                }
            }
            this.dTitle.map((item,index)=>{
               item.id = index
            })
             this.dType.map((item,index)=>{
               item.id = index
            })
             this.dUrl.map((item,index)=>{
               item.id = index
            })
            for(var j=0;j<Math.max(this.dTitle.length,this.dType.length,this.dUrl.length);j++){
                let cc ={}
                cc.dTitle ='',
                cc.dType ='',
                cc.dUrl = ''
                if(this.dTitle.length !==0){
                    const dTitle = this.dTitle.filter(item=> item.id == JSON.stringify(j))
                    if(dTitle.length !==0){
                        cc.dTitle = dTitle[0].value
                    }else{
                        cc.dTitle = ''
                    }
                    
                }
                if(this.dType.length !==0){
                    const dType = this.dType.filter(item=> item.id == JSON.stringify(j)) 
                    if(dType.length !==0){
                        cc.dType = dType[0].value
                    }else{
                        cc.dType = ''
                    }
                }
                if(this.dUrl.length !==0){
                    const dUrl = this.dUrl.filter(item=> item.id == JSON.stringify(j))
                    if(dUrl.length !==0){
                        cc.dUrl = dUrl[0].value
                    }else{
                        cc.dUrl = ''
                    }
                }
                this.fRelation2.push(cc)
            } 
            for(var i=0;i<this.relation3.length;i++){
                let l = this.relation3[i].name.length
                let arr = this.relation3[i].name.slice(0,l-1)
                let arr1 = this.relation3[i].name[l-1]
                let bb= {}
                bb.id = arr1
                bb.value = this.relation3[i].value
                if(arr == "pTitle"){           
                    this.pTitle.push(bb)
                }
                else if(arr == "pType"){
                    this.pType.push(bb)
                }
                else if(arr == "pUrl"){
                    this.pUrl.push(bb)
                }
            }
            this.pTitle.map((item,index)=>{
               item.id = index
            })
             this.pType.map((item,index)=>{
               item.id = index
            })
             this.pUrl.map((item,index)=>{
               item.id = index
            })
            for(var j=0;j< Math.max(this.pTitle.length,this.pType.length,this.pUrl.length);j++){
                let cc ={}
                cc.pTitle ='',
                cc.pType ='',
                cc.pUrl = ''
                if(this.pTitle.length !==0){
                    const pTitle = this.pTitle.filter(item=> item.id == JSON.stringify(j))
                    if(pTitle.length!==0){
                        cc.pTitle = pTitle[0].value
                    }
                   
                }
                if(this.pType.length !==0){
                    const pType = this.pType.filter(item=> item.id == JSON.stringify(j))
                    if(pType.length!==0){
                        cc.pType = pType[0].value
                    }
                }
                if(this.pUrl.length !==0){
                    const pUrl = this.pUrl.filter(item=> item.id == JSON.stringify(j))
                    if(pUrl.length!==0){
                        cc.pUrl = pUrl[0].value
                    }
                }
                this.fRelation3.push(cc)
            }
            const formdata = new FormData()
           
            if(this.state.image !== ''){
                this.flag = "1"
            }
            let aa= []
            let alternation = {}
            alternation.alterName = this.state.alterName
            alternation.alterType = this.state.alterType
            aa.push(alternation)
            const data = {
                eType:this.state.type,
                eName : this.state.name,
                eTitle: this.state.eTitle,
                alternation: aa,
                function: this.state.occ,
                sDate: this.state.sDate,
                eDate: this.state.eDate,
                bPlace: this.state.bPlace,
                dPlace: this.state.dPlace,
                sumNote: this.state.sumNote,
                fullNote: this.state.fullNote,
                ePrepared: this.state.ePrepared,
                eId: 'none',
                aId:'none',
                euId : uId, 
                individual: this.fRelation,
                orgnaisation: this.fRelation1,
                digital: this.fRelation2,
                publish: this.fRelation3,
                resources: this.state.resources,
                ePrepared: this.state.ePrepared
            }
            formdata.append("flag",this.flag)
            formdata.append("file",this.state.image)
            formdata.append("data",JSON.stringify(data))
            return formdata
        }
        errCheck=()=>{
            let err = 0
            if(this.state.name==''){
                err = 1
            }
            return err
        }
        handleSave(e){
            e.preventDefault()
            const formdata = this.getData()
            if(e.target.name == "save"){
                let err = this.errCheck()
                if(err==0){
                    const url = global.url+"save_entity"
                    fetch(url, {
                        method: 'POST',
                        body: formdata,
                    }).then(res => {
                        if(res.ok == true){
                            this.setState({
                                submitSuccess1: 'block',
                                disableBtn: "none",
                                readOnly: true
                            })
                        }
                    }).catch(err=>{
                        if(err!==null){
                            this.setState({
                                submitError: 'block',
                                disableBtn: "none",
                                readOnly: true
                            })
                        }
                    })
                }else{
                    this.relation = []
                    this.relation1 = []
                    this.relation2 = []
                    this.relation3 = []
                    this.setState({showAlert:"block"})
                }
            }

        }
        handleSubmit(e){
            e.preventDefault()
            const formdata = this.getData()
                // this.errCheck()
                const url = global.url+"submit_entity"
                fetch(url, {
                    method: 'POST',
                    body: formdata,
                }).then(res => {
                    if(res.ok == true){
                        this.setState({
                            submitSuccess: 'block',
                            disableBtn: "none",
                            readOnly: true
                        })
                    }
                }).catch(err=>{
                    if(err!==null){
                        this.setState({
                            submiError1: 'block',
                            readOnly: true,
                            disableBtn: "none",
                        })
                    }
                })
            
        }
    
    render() {
        return (
        <div>
            <Layout />
        <div style={background}>
            <form onSubmit={this.handleSubmit}>
            <div style= {{display: this.state.showAlert}}>
                <Alert title="Warning!" content="If you want to save entity, you need to at least provide entity's name!" 
                onClick={this.handleClose} name="err"/>
            </div>
            <div style= {{display: this.state.submitSuccess1}}>
                <Alert1 title="Congratulations!" content="Your draft has been saved!" 
                button="Ok" url='/' />
            </div>
            <div style= {{display: this.state.submitSuccess}}>
                <Alert1 title="Congratulations!" content="Your contribution has been submitted!" 
                button="Ok" url='/' />
            </div>
            <div style= {{display: this.state.submitError}}>
                <Alert title="Oops~" content="Something goes wrong! Please try later." 
                onClick={this.handleClose} name="err1" />
            </div>

            <Grid container spacing={3}
            direction="row"
            justify="flex-end"
            alignItems="flex-start">
            <Grid item sm={4}>
                <div>
                    <LeftCon value={this.state.value} onChange={this.handleChange2} onChange1={this.handleChange1}
                    readOnly={this.state.readOnly} onAdd = {this.handleClick2} onDelete={this.handleClick2}
                    num = {this.state.dNum} image={this.state.image}/>
                </div>
            </Grid>
                <Grid item sm={7} style={{marginRight:"10px"}}>
                    <Grid container spacing={3}
                    direction="column"
                    justify="flex-end"
                    alignItems="flex-start">
                        <Grid item style={{width:"100%"}}>
                            <BasicInput type = {this.state.type} value={this.state.value} handleMutiSelect={this.handleMutiSelect}
                            onChange={this.handleChange} onChange1={this.handleChange2} readOnly = {false} display="inline-block" />
                        </Grid>
                        <Grid item style={{width:"100%",height:"100%"}}>
                        <div className={css.banner}>
                            <span>Related entities</span>
                            <a data-tip="Choose the related entities' name and relationships between them" className={css.tipStyle} data-for="rel"><IoMdInformationCircleOutline/></a>
                            <ReactTooltip id="rel" type="dark" effect="solid" place={"right"} multiline={true}/>
                        </div>
                        <div className={css.box}>
                            <div className={css.banner}>
                                <span>Women</span>
                            </div>
                            <div>
                                <Relations num = {this.state.relNum} relJson={this.relJson} readOnly={this.state.readOnly}
                                handleSelect={this.handleSelect} onAdd = {this.handleClick} onDelete={this.handleClick}/>
                            </div>
                       
                       
                            <div className={css.banner} style={{marginTop:"300px"}}>
                                <span>Organisations</span>
                            </div>
                            <div>
                                <Relations num = {this.state.ogNum} relJson={this.relJson1} readOnly={this.state.readOnly}
                                handleSelect={this.handleSelect1} onAdd = {this.handleClick1} onDelete={this.handleClick1}/>
                            </div>
                        
                        </div>
                        </Grid>
                        <Grid item xs={12} style={{width:"100%"}}>
                            <Publish value={this.state.value} onChange={this.handleChange1} readOnly={this.state.readOnly} onAdd={this.handleClick3}
                            label="Published resources" tip="Add Published resources here" onDelete={this.handleClick3} id="Publish" num={this.state.pNum} />
                        </Grid>
                        
                        <Grid item style={{width:"100%"}}>
                            <div className={css.box}>     
                                <FormGroup label="Prepared by" type='dark' tip="Type the full name of who prepares this contribution. in full, no initials" id="name"
                                name="ePrepared" value={this.state.ePrepared} onChange={this.handleChange} readOnly={false} display="block" required = {true}
                                />
                                </div>
                        </Grid>
                        
                    </Grid>
                </Grid>
                
            </Grid>
            
                <div style ={{textAlign:'center',marginBottom:'20px',display:this.state.disableBtn}}>
                    <button type="submit" name="submit" onSubmit={this.handleSubmit} className={css.btn_info} style={{borderRadius:"4px",marginTop:"20px",width:"15%"}} >Submit entity</button>
                    <button type="button" onClick={this.handleSave} name="save" className={css.btn_primary} style={{borderRadius:"4px",marginTop:"20px",width:"15%",marginLeft:"50px"}}>Save entity</button>
                </div>
            </form>
            
        </div>
        </div>
        )
    }
}

C.getInitialProps = async function() {
    var url = global.url
    var method = 'get_all_rel'

    const res = await fetch(url+method);
    const data = await res.json();
    return {
        data
    };
  };
export default C;

