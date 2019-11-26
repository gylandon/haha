import Grid from '@material-ui/core/Grid';
import {ShowInfo1,ShowInfoBView, ShowInfoNView} from "./Verify"
import css from "../style.css"
import {FormGroupRead} from './Form-group';
import { ShowResource } from "../components/ShowResource"
import '../util/config'

export class ViewLeft extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            src: "/../../static/image_u3.png"
        }
    }
    componentDidUpdate(prevProps){
        if(this.props.image!==prevProps.image){
            let src = global.url+this.props.image
            this.setState({
                src
            })
        }
    }

    render(){
        return(
            <div>
                <Grid container spacing={2}
                direction = "column"
                justify="flex-start"
                alignItems="flex-start">
                    <Grid item xs={12} style={{width:"100%"}}>
                        <div className={css.box}>
                            {
                                this.props.verify=="true"?
                                <div>
                                    <img src={this.state.src} style={{width:"100%"}}/>
                                    <FormGroupRead value={this.props.value.resources} label="Resources" display={this.props.display} />
                                   
                                </div>
                                :
                                <div>
                                    <img src={this.state.src} style={{width:"100%"}}/>
                                    <FormGroupRead label="Resource" value={this.props.value.resources} display={this.props.display}/>            
                                </div>
                            }
                        </div>
                       
                    </Grid>
                    <Grid item xs={12} style={{width:"100%"}}>
                        <div className={css.banner} style = {{display:"inline-block",width:"100%"}}>
                        <Grid container spacing={2}
                        justify="flex-start"
                        alignItems="flex-start">
                        <Grid item xs={5}>
                            <span>Summary</span>
                        </Grid>
                        <Grid item xs={5}>
                            {
                                this.props.verify=="true"?
                                <ShowInfo1 onClick={this.props.onChange} all={this.props.all} name="sumNote" />
                                :
                                <div>
                                {
                                    this.props.display=="none"?
                                    <div style={{width:"60%",background:"#fff"}}>
                                    
                                    </div>
                                    :
                                    <div style={{position:"relative",left:"40%"}}>
                                        <ShowInfoBView pass={this.props.feedback.sumNote}/>
                                    </div>
                                }
                                </div>    
                            }
                        </Grid>
                        </Grid>
                        </div>
                        <div className={css.box}>
                            <div>
                                <textarea rows="5" className = {css.textareaInput} type="text"
                                value={this.props.value.sumNote} readOnly={true}/>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} style={{width:"100%"}}>
                    <div className={css.banner} style = {{display:"inline-block",width:"100%"}}>
                        <Grid container spacing={2}
                        justify="flex-start"
                        alignItems="flex-start">
                        <Grid item xs={5}>
                            <span>Full Note</span>
                        </Grid>
                        <Grid item xs={5}>
                            {
                                this.props.verify=="true"?
                                <ShowInfo1 onClick={this.props.onChange} all={this.props.all} name="fullNote" />
                                :
                                <div>
                                {
                                    this.props.display=="none"?
                                    <div style={{width:"60%",background:"#fff"}}>
                                    
                                    </div>
                                    :
                                    <div style={{position:"relative",left:"40%"}}>
                                        <ShowInfoBView pass={this.props.feedback.fullNote}/>
                                    </div>
                                }
                                </div>    
                            }
                        </Grid>
                    </Grid>
                    </div>
                    <div className={css.box}>
                        <div>
                            <textarea rows="20" className = {css.textareaInput} type="text"
                            value={this.props.value.fullNote} readOnly={true}/>
                        </div>
                    </div>
                    </Grid>
                    <Grid xs={12} item style={{width:"100%"}}>
                        <div className={css.box}>
                            <div className={css.banner} style = {{display:"inline-block",width:"100%"}}>  
                            <Grid container spacing={2}
                                justify="flex-start"
                                alignItems="flex-start">  
                                <Grid item xs={5}>                
                                <span>Digital resources</span>
                                </Grid>
                                <Grid item xs={5}>
                                {
                                    this.props.verify=="true"?
                                    <div style={{position:"relative",left:"-4%",width:"117%"}}>
                                        <ShowInfo1 onClick={this.props.onChange} all={this.props.all} name="Digital" />
                                    </div>
                                    :
                                    <div>
                                    {
                                        this.props.display=="none"?null:
                                        <div style={{position:"relative",left:"40%",width:"117%"}}>
                                            <ShowInfoBView pass={this.props.feedback.Digital}/>
                                        </div>
                                    }
                                    </div>    
                                }
                                </Grid>
                                </Grid>
                            </div>
                            <Grid item xs={12} style={{width:"100%"}}>
                            <div className={css.box}>
                            <ShowResource Title={this.props.dTitle} Type={this.props.dType} Url={this.props.dUrl} verify="true" />
                            </div>            
                            </Grid>
                        </div>
                        </Grid>
                    
                </Grid>
            </div>
        )
    }
    
}