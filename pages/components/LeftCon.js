import {Summary} from './Summary'
import Digital from "./Digital"
import {Uploadpicture} from "./Uploadpicture"
import Grid from '@material-ui/core/Grid';
import ResourceRW from "./ResourceRW"

export class LeftCon extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div>
                <Grid container spacing={2}
                direction = "column"
                justify="flex-start"
                alignItems="flex-start">
                    <Grid item xs={12} style={{width:"100%"}}>
                    {
                        this.props.edit=="true"?
                        <Uploadpicture value={this.props.image} onChange={this.props.onChange} readOnly={this.props.readOnly} 
                        name="resources" edit="true" resources={this.props.resources}/>
                        :
                        <Uploadpicture value={this.props.value} onChange={this.props.onChange} readOnly={this.props.readOnly} 
                        name="resources" edit="false"/>
                    }
                       
                    </Grid>
                    <Grid item xs={12} style={{width:"100%"}}>
                    {
                        this.props.edit=="true"?
                        <Summary value={this.props.sumNote} onChange={this.props.onChange} readOnly={this.props.readOnly} 
                        label="Summary Note" tip="Type entity's brief summary" id="summary" name="sumNote" row="5"
                        required={true} />
                        :
                        <Summary value={this.props.value} onChange={this.props.onChange} readOnly={this.props.readOnly} 
                        label="Summary Note" tip="Type entity's brief summary" id="summary" name="sumNote" row="5"
                        required={true} />
                    }
                       
                    </Grid>
                    <Grid item xs={12} style={{width:"100%"}}>
                    {
                        this.props.edit=="true"?
                        <Summary value={this.props.fullNote} onChange={this.props.onChange} readOnly={this.props.readOnly} 
                        label="Full Note" tip="Type entity's detail information here" id="summary1" name="fullNote" row="20"
                        required={false} />
                        :
                        <Summary value={this.props.value} onChange={this.props.onChange} readOnly={this.props.readOnly} 
                        label="Full Note" tip="Type entity's detail information here" id="summary1" name="fullNote" row ="20"
                        required={false} />
                    }
                       
                    </Grid>
                    <Grid item xs={12} style={{width:"100%"}}>
                    {
                        this.props.edit=="true"?
                        <ResourceRW value={this.props.value} Title={this.props.dTitle} Type={this.props.dType} Url={this.props.dUrl} onChange={this.props.onChange1} 
                        readOnly={this.props.readOnly} onDelete={this.props.onDelete} label="Digital resources" tip="Add Digital resources here" id="Digital" 
                        onAdd={this.props.onAdd} num={this.props.num} />
                        :
                        <Digital value={this.props.value} onChange={this.props.onChange1} readOnly={this.props.readOnly} onDelete={this.props.onDelete}
                        label="Digital resources" tip="Add Digital resources here" id="Digital" onAdd={this.props.onAdd} num={this.props.num} />
                    }
                      
                    </Grid>
                    
                </Grid>
            </div>
        )
    }
    
}