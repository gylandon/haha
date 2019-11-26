import React, { Component } from 'react'
import css from '../style.css' 
import {FormGroup, FormGroupView} from './Form-group';
import Grid from '@material-ui/core/Grid';
import Select from 'react-select';
import { occOptions,Person,Organization } from '../data';
import { GroupHeading } from './Relationship';
import { IoMdInformationCircleOutline } from "react-icons/io";
import ReactTooltip from 'react-tooltip';
import { ShowInfoBView } from './Verify';
import { AlterType } from './AlterType'

export class BasicView extends Component {
    componentDidUpdate(prevProps){
        if(this.props.occ!==prevProps.occ){
            console.log(this.props.occ)
        }
    }
    render() {
        return (
        <div className={css.box}>
            <div>
                {this.props.type=='Person'?
                <div>
                    {
                        this.props.view=="true"?
                        <div>
                        {
                            this.props.display=="none"?
                            <FormGroupView label="Name" value={this.props.value.eName} display={this.props.display}/>
                            :
                            <FormGroupView label="Name" value={this.props.value.eName} display={this.props.display} pass={this.props.feedback.eName}/>
                        }
                        </div>
                        : 
                        <FormGroup label="Name" type='dark' tip="Type the right name format as:<br />Surname, Firstname, Secondname, Thirdname, etc. in full, no initials" id="name"
                        name="eName" placeholder="Surname, Firstname, Secondname, Thirdname, etc. in full, no initials" value={this.props.eName} verify ="false"
                        onChange={this.props.onChange} readOnly={this.props.readOnly} display={this.props.display} required = {true} onClick={this.props.onClick}
                    />
                    }
                   
                </div>
               :
               <div>
               {
                   this.props.view=="true"?
                   <div>
                        {
                            this.props.display=="none"?
                            <FormGroupView label="Name" value={this.props.value.eName} display={this.props.display}/>
                            :
                            <FormGroupView label="Name" value={this.props.value.eName} display={this.props.display} pass={this.props.feedback.eName}/>
                        }
                   </div>
                
                   : 
                   <FormGroup label="Name" type='dark' tip="Type the right name format in full, no initials" id="name"
                   name="eName" placeholder="Type the full name of organisation. in full, no initials" value={this.props.eName} verify ="false"
                   onChange={this.props.onChange} readOnly={this.props.readOnly} display={this.props.display} required = {true} onClick={this.props.onClick}
                    />
                }
                </div>
            }
 
            </div>
            <div>
                {
                    this.props.view=="true"?
                    <div>
                        {
                            this.props.display=="none"?
                            <FormGroupView label="Subname of Entity" value={this.props.value.eTitle} display={this.props.display}/>
                            :
                            <FormGroupView label="Subname of Entity" value={this.props.value.eTitle} display={this.props.display} pass={this.props.feedback.eTitle}/>
                        }
                   </div>
                    : 
                    <FormGroup label="Subname of Entity" type='dark' tip="Person: Titles and honours;<br/> Organisation: binomial name" id="eTitle"
                        name="eTitle" placeholder="Type title or honor of entity" value={this.props.eTitle}
                        onChange={this.props.onChange} readOnly={this.props.readOnly} display={this.props.display} required = {false}
                    />
                }
            </div>
            <div>
                {
                    this.props.view=="true"?
                    <div>
                        {
                            this.props.display=="none"?
                            <FormGroupView label="Alternative Name" value={this.props.alterName} display={this.props.display}/>
                            :
                            <FormGroupView label="Alternative Name" value={this.props.alterName} display={this.props.display} pass={this.props.feedback.alterName}/>
                        }
                   </div>
                    : 
                    <FormGroup label="Alternative Name" type='dark' tip="Previous name of entity" id="alterName"
                        name="alterName" placeholder="Type alternative name here" value={this.props.alterName}
                        onChange={this.props.onChange} readOnly={this.props.readOnly} display={this.props.display} required = {false}
                    />
                }
            </div>
            <div>
                {
                    this.props.view=="true"?
                    <div>
                        {
                            this.props.display=="none"?
                            <FormGroupView label="Alternative Type" value={this.props.alterType} display={this.props.display}/>
                            :
                            <FormGroupView label="Alternative Type" value={this.props.alterType} display={this.props.display} pass={this.props.feedback.alterType}/>
                        }
                   </div>
                    : 
                    <div style={{flexGrow:"1",marginBottom:"30px"}}>
                        <Grid container spacing={2}
                        direction="row"
                        justify="flex-start"
                        alignItems="flex-start">
                            <Grid item xs={2} className={css.labelStyle}>                    
                                <span className ={css.font}>Alternative Type</span>
                            </Grid>
                            <Grid item xs={8} style={{paddingLeft:"0px",paddingTop:"0px"}}>
                                <AlterType name ="alterType" placeholder = {this.props.alterType} onChange={this.props.onChange1} options={this.props.type==="Person"?Person:Organization}/>
                            </Grid>
                            <Grid item xs={2}>
                                <a data-tip="Choose non-preferable name type of entity." style={{display:this.props.display}} data-for="type"><IoMdInformationCircleOutline/></a>
                                <ReactTooltip id="type" type="dark" effect="solid" place="left" multiline={true}/>
                            </Grid>
                        </Grid>
                    </div>
                }
            </div>
           
            <div>
                {this.props.type=='Person'?
                <div>
                    {
                        this.props.view=="true"?
                        <div>
                        {
                            this.props.display=="none"?
                            <FormGroupView label="Birth Date" value={this.props.value.sDate} display={this.props.display}/>
                            :
                            <FormGroupView label="Birth Date" value={this.props.value.sDate} display={this.props.display} pass={this.props.feedback.sDate}/>
                        }
                        </div>
                        : 
                        <FormGroup label="Birth Date" type='dark' tip="If you don't know the exact date or year, use ? instead.<br/> e.g. mm/?/yyyy or mm/dd/?" id="bDate"
                            name="sDate" placeholder="type as mm/dd/yyyy or follow as hint mark" value={this.props.sDate}
                            onChange={this.props.onChange} readOnly={this.props.readOnly} display={this.props.display} required = {false}
                        />
                    }
                </div>
                
                :
                <div>
                {
                    this.props.view=="true"?
                    <div>
                        {
                            this.props.display=="none"?
                            <FormGroupView label="Date From" value={this.props.value.sDate} display={this.props.display}/>
                            :
                            <FormGroupView label="Date From" value={this.props.value.sDate} display={this.props.display} pass={this.props.feedback.sDate}/>
                        }
                        </div>
                    : 
                    <FormGroup label="Date From" type='dark' tip="If you don't know the exact date or year, use ? instead.<br/> e.g. mm/?/yyyy or mm/dd/?" id="bDate"
                        name="sDate" placeholder="type as mm/dd/yyyy or follow as hint mark" value={this.props.sDate}
                        onChange={this.props.onChange} readOnly={this.props.readOnly} display={this.props.display} required = {false}
                    />
                }
                </div>
                
                }
            </div>
        <div>
            {this.props.type=='Person'?
            <div>
            {
                this.props.view=="true"?
                <div>
                {
                    this.props.display=="none"?
                    <FormGroupView label="Death Date" value={this.props.value.eDate} display={this.props.display}/>
                    :
                    <FormGroupView label="Death Date" value={this.props.value.eDate} display={this.props.display} pass={this.props.feedback.eDate}/>
                }
                </div>
                : 
                <FormGroup label="Death Date" type='dark' tip="If you don't know the exact date or year, use ? instead.<br/> e.g. mm/?/yyyy or mm/dd/?" id="eDate"
                    name="eDate" placeholder="type as mm/dd/yyyy or follow as hint mark" value={this.props.eDate}
                    onChange={this.props.onChange} readOnly={false} display={this.props.display} required = {false}
                />
            }
            </div>
            :
            <div>
            {
                this.props.view=="true"?
                <div>
                {
                    this.props.display=="none"?
                    <FormGroupView label="To" value={this.props.value.eDate} display={this.props.display}/>
                    :
                    <FormGroupView label="To" value={this.props.value.eDate} display={this.props.display} pass={this.props.feedback.eDate}/>
                }
                </div>
                : 
                <FormGroup label="To" type='dark' tip="If you don't know the exact date or year, use ? instead.<br/> e.g. mm/?/yyyy or mm/dd/?" id="eDate"
                name="eDate" placeholder="type as mm/dd/yyyy or follow as hint mark" value={this.props.eDate}
                onChange={this.props.onChange} readOnly={this.props.readOnly} display={this.props.display} required = {false}
                />
            }
            </div>
        }
        </div>
       
            {this.props.type=='Person'?
                <div style={{flexGrow:"1"}}>
                    <Grid container spacing={2}
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start">
                        <Grid item xs={this.props.display==="none"?3:2} className={css.labelStyle}>                    
                            <span className ={css.font}>Birth Place</span>
                        </Grid>
                        <Grid item xs={this.props.display==="none"?9:8} style={{paddingLeft:"0px",paddingTop:"0px"}}>  
                        {
                            this.props.view=="true"?
                            <textarea className = {css.textareaStyle} type="text" value={this.props.value.bPlace} readOnly={true}
                            />
                            :
                            <textarea rows= "1" className = {css.textareaStyle} type="text" name ="bPlace"
                            placeholder="Type birth place as hint" value={this.props.bPlace} readOnly={false}
                            onChange={this.props.onChange}/>
                        }                  
                            
                        </Grid>
                        {
                            this.props.view=="true"? 
                            <Grid item xs={2}>
                          
                            {
                                this.props.display=="none"?null:
                                <div>
                                    <ShowInfoBView pass={this.props.feedback.bPlace}/>
                                </div>
                            }
                           
                            </Grid>
                            :
                            <Grid item xs={2}>
                                <a data-tip="Type birth place as:<br />District, City, State, Country. in full, no initials" 
                                style={{display:this.props.display}} data-for="bPlace"><IoMdInformationCircleOutline/></a>
                                <ReactTooltip id="bPlace" type="dark" effect="solid" place="top" multiline={true}/>
                            </Grid>
                        }
                    </Grid>
                </div>
                :
                <div style={{flexGrow:"1"}}>
                    <Grid container spacing={2}
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start">
                        <Grid item xs={this.props.display==="none"?3:2} className={css.labelStyle}>                    
                            <span className ={css.font}>Place of Existence</span>
                        </Grid>
                        <Grid item xs={this.props.display==="none"?9:8} style={{paddingLeft:"0px",paddingTop:"0px"}}>  
                        {
                            this.props.view=="true"?
                            <textarea className = {css.textareaStyle} type="text" value={this.props.value.bPlace} readOnly={true} 
                            />
                            :
                            <textarea rows= "1" className = {css.textareaStyle} type="text" name ="bPlace"
                            placeholder="Type Place of Existence as hint" value={this.props.bPlace} readOnly={false}
                            onChange={this.props.onChange}/>
                        }                  
                            
                        </Grid>
                        {
                            this.props.view =="true"? 
                            <Grid item xs={2}>
                            {
                                this.props.display=="none"?null:
                                <div>
                                    <ShowInfoBView pass={this.props.feedback.bPlace}/>
                                </div>
                            }
                            </Grid>   
                           
                            :
                            <Grid item xs={2}>
                                <a data-tip="Type birth place as:<br />District, City, State, Country. in full, no initials" 
                                style={{display:this.props.display}} data-for="bPlace"><IoMdInformationCircleOutline/></a>
                                <ReactTooltip id="bPlace" type="dark" effect="solid" place="top" multiline={true}/>
                            </Grid>
                        }
                    </Grid>
                </div>
            }
            {this.props.type=='Person'?
            <div style={{flexGrow:"1"}}>
                <Grid container spacing={2}
                direction="row"
                justify="flex-start"
                alignItems="flex-start">
                    <Grid item xs={this.props.display==="none"?3:2} className={css.labelStyle}>                    
                        <span className ={css.font}>Death Place</span>
                    </Grid>
                    <Grid item xs={this.props.display==="none"?9:8} style={{paddingLeft:"0px",paddingTop:"0px"}}>  
                    {
                        this.props.view=="true"?
                        <textarea className = {css.textareaStyle} type="text" value={this.props.value.dPlace} readOnly={true} />
                        :
                        <textarea rows= "1" className = {css.textareaStyle} type="text" name ="dPlace"
                        placeholder="Type death place as hint" value={this.props.dPlace} readOnly={false}
                        onChange={this.props.onChange}/>
                    }                  
                        
                    </Grid>
                    {
                        this.props.view == "true"? 
                        <Grid item xs={2}>
                        {
                            this.props.display=="none"?null:
                            <div>
                                <ShowInfoBView pass={this.props.feedback.dPlace}/>
                            </div>
                        }
                        </Grid>   
                        :
                        <Grid item xs={2}>
                            <a data-tip="Type death place as:<br />District, City, State, Country. in full, no initials" 
                            style={{display:this.props.display}} data-for="bPlace"><IoMdInformationCircleOutline/></a>
                            <ReactTooltip id="dPlace" type="dark" effect="solid" place="top" multiline={true}/>
                        </Grid>
                    }
                </Grid>
            </div>
            :
            <div style={{flexGrow:"1"}}>
                <Grid container spacing={2}
                direction="row"
                justify="flex-start"
                alignItems="flex-start">
                    <Grid item xs={this.props.display==="none"?3:2} className={css.labelStyle}>                    
                        <span className ={css.font}>Last Existence Place</span>
                    </Grid>
                    <Grid item xs={this.props.display==="none"?9:8} style={{paddingLeft:"0px",paddingTop:"0px"}}>  
                    {
                        this.props.view=="true"?
                        <textarea rows= "1"
                        className = {css.textareaStyle} type="text" name = "dPlace"
                        value={this.props.value.dPlace} readOnly={true}
                        />
                        :
                        <textarea rows= "1" className = {css.textareaStyle} type="text" name ="dPlace"
                        placeholder="Type Place of Last Existence as hint" value={this.props.dPlace}
                        onChange={this.props.onChange}/>
                    }                  
                        
                    </Grid>
                    {
                        this.props.view=="true"? 
                        <Grid item xs={2}>
                        {
                            this.props.display=="none"?null:
                            <div>
                                <ShowInfoBView pass={this.props.feedback.dPlace}/>
                            </div>
                        }
                        </Grid>   
                        :
                        <Grid item xs={2}>
                            <a data-tip="Type birth place as:<br />District, City, State, Country. in full, no initials" 
                            style={{display:this.props.display}} data-for="dPlace"><IoMdInformationCircleOutline/></a>
                            <ReactTooltip id="dPlace" type="dark" effect="solid" place="top" multiline={true}/>
                        </Grid>
                    }
                </Grid>
            </div>
        }
            <Grid container spacing={2}
                direction="row"
                justify="flex-start"
                alignItems="flex-start">
                    <Grid item xs={this.props.display==="none"?3:2} className={css.labelStyle}>                    
                        <span className ={css.font}>Occupation</span>
                    </Grid>
                    {
                        this.props.view=="true"?
                        <Grid item xs={this.props.display==="none"?9:8} style={{paddingLeft:"0px",paddingTop:"0px"}}>
                            <input type="text" className={css.inputCon} value={this.props.function} readOnly={true}/>
                        </Grid>
                        :
                        <Grid item xs={this.props.display==="none"?9:8} style={{paddingLeft:"0px",paddingTop:"0px"}}>                    
                        <Select                                      
                            classNamePrefix="select"
                            required ={true}
                            isClearable="true"                            
                            isSearchable="true"
                            isMulti= "true"
                            name="occupation"
                            onChange = {this.props.handleMutiSelect}
                            options={occOptions}
                            readOnly={this.props.readOnly}
                            value={this.props.occ}
                            components={{ GroupHeading }}  
                            styles={{
                                container: ()=>({
                                    border:"1px solid #ffcc99"
                                }),
                               
                                menu:()=>({
                                    position:"relative",
                                }),
                                groupHeading: base => ({
                                    ...base,
                                    flex: '1 1',
                                    color: 'white',
                                    margin: 0,
                                }),
                               
                            }}
                        /> 
                    </Grid>
                    }
                    
                    {
                        this.props.view=="true"? 
                        <Grid item xs={2}>
                        {
                            this.props.display=="none"?null:
                            <div>
                                <ShowInfoBView pass={this.props.feedback.function}/>
                            </div>
                        }
                        </Grid> 
                        :
                        <Grid item xs={2}>
                            <a data-tip="Choose as many as occupations" 
                            style={{display:this.props.display}} data-for="occ"><IoMdInformationCircleOutline/></a>
                            <ReactTooltip id="occ" type="dark" effect="solid" place="top" multiline={true}/>
                        </Grid>
                    }
            </Grid>

        </div> 
        )
    }
}


