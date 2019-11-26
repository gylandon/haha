import React, { Component } from 'react'
import css from '../style.css' 
import {FormGroup} from './Form-group';
import Grid from '@material-ui/core/Grid';
import Select from 'react-select';
import { occOptions,Person,Organization } from '../data';
import { GroupHeading } from './Relationship';
import { IoMdInformationCircleOutline } from "react-icons/io";
import ReactTooltip from 'react-tooltip';
import { ShowInfo } from './Verify';
import { Relationship } from './Relationship'

export class BasicInput extends Component {
    render() {
        return (
        <div className={css.box}>
            <div>
                {this.props.type=='Person'?
                <div>
                    {
                        this.props.verify?
                        <FormGroup label="Name" type='dark' tip="Type the right name format as:<br />Surname, Firstname, Secondname, Thirdname, etc. in full, no initials" id="name"
                        name="name" placeholder="Surname, Firstname, Secondname, Thirdname, etc. in full, no initials" value={this.props.value.eName} verify ={this.props.verify}
                        onClick={this.props.onChange} readOnly={this.props.readOnly} display={this.props.display} all={this.props.all} onClick={this.props.onClick}
                        />
                        : 
                        <FormGroup label="Name" type='dark' tip="Type the right name format as:<br />Surname, Firstname, Secondname, Thirdname, etc. in full, no initials" id="name"
                        name="name" placeholder="Surname, Firstname, Secondname, Thirdname, etc. in full, no initials" value={this.props.value} verify ={this.props.verify}
                        onChange={this.props.onChange} readOnly={this.props.readOnly} display={this.props.display} required = "required" onClick={this.props.onClick}
                    />
                    }
                   
                </div>
               :
               <div>
                {
                    this.props.verify?
                        <FormGroup label="Name" type='dark' tip="Type the right name format as:<br />Surname, Firstname, Secondname, Thirdname, etc. in full, no initials" id="name"
                        name="name" placeholder="Type the full name of organisation. in full, no initials" value={this.props.value.eName} verify ={this.props.verify}
                        onClick={this.props.onChange} readOnly={this.props.readOnly} display={this.props.display} required = {true} all={this.props.all}
                        />
                    : 
                        <FormGroup label="Name" type='dark' tip="Type the full name of organisation. in full, no initials" id="name"
                            name="name" placeholder="Type the full name of organisation. in full, no initials" value={this.props.value}
                            onChange={this.props.onChange} readOnly={this.props.readOnly} display={this.props.display} required = {true}
                        />
                }
                    
                </div>
            }
 
            </div>
            <div>
                {
                    this.props.verify?
                        <FormGroup label="Subname of Entity" type='dark' tip="Person: Titles and honours;<br/> Organisation: binomial name" id="eTitle"
                        name="eTitle" value={this.props.value.eTitle} verify ={this.props.verify} all={this.props.all}
                        onClick={this.props.onChange} readOnly={this.props.readOnly} display={this.props.display} required = {true} 
                        />
                    : 
                        <FormGroup label="Subname of Entity" type='dark' tip="Person: Titles and honours;<br/> Organisation: binomial name" id="eTitle"
                            name="eTitle" placeholder="Type title or honor of entity" value={this.props.value}
                            onChange={this.props.onChange} readOnly={this.props.readOnly} display={this.props.display} required = {false}
                        />
                }
            </div>
            <div>
                {
                    this.props.verify?
                    <div>
                        <FormGroup label="Alternative Name" type='dark' tip="Person: Titles and honours;<br/> Organisation: binomial name" id="alterName"
                        name="alterName" value={this.props.alterName} verify ={this.props.verify} all={this.props.all}
                        onClick={this.props.onChange} readOnly={this.props.readOnly} display={this.props.display} required = {true} 
                        />
                        <FormGroup label="Alternative Type" type='dark' tip="Type of non-preferable name type of entity. e.g. Person" id="alterType"
                        name="alterType" value={this.props.alterType} verify ={this.props.verify} all={this.props.all}
                        onClick={this.props.onChange} readOnly={this.props.readOnly} display={this.props.display} required = {true} 
                        />
                    </div>
                    : 
                    <div>
                    <FormGroup label="Alternative Name" type='dark' tip="Type of non-preferable name of entity." id="alterName"
                        name="alterName" placeholder="Type alternative name here" value={this.props.value}
                        onChange={this.props.onChange} readOnly={this.props.readOnly} display={this.props.display} required = {false}
                    />
                    <div style={{flexGrow:"1",marginBottom:"30px"}}>
                        <Grid container spacing={2}
                        direction="row"
                        justify="flex-start"
                        alignItems="flex-start">
                            <Grid item xs={2} className={css.labelStyle}>                    
                                <span className ={css.font}>Alternative Type</span>
                            </Grid>
                            <Grid item xs={8} style={{paddingLeft:"0px",paddingTop:"0px"}}>
                                <Relationship name ="alterType" placeholder = "select..." onChange={this.props.onChange1} options={this.props.type==="Person"?Person:Organization}/>
                            </Grid>
                            <Grid item xs={2}>
                                <a data-tip="Choose non-preferable name of entity." style={{display:this.props.display}} data-for="type"><IoMdInformationCircleOutline/></a>
                                <ReactTooltip id="type" type="dark" effect="solid" place="left" multiline={true}/>
                            </Grid>
                        </Grid>
                        </div>
                    </div>
                }
            </div>

           
            <div>
                {this.props.type=='Person'?
                <div>
                    {
                        this.props.verify?
                            <FormGroup label="Birth Date" type='dark' tip="Type of previous name of entity. e.g. Person" id="sDate"
                            name="sDate" value={this.props.value.sDate} verify ={this.props.verify} all={this.props.all}
                            onClick={this.props.onChange} readOnly={this.props.readOnly} display={this.props.display} required = {true} 
                            />
                        : 
                        <FormGroup label="Birth Date" type='dark' tip="If you don't know the exact date or year, use ? instead.<br/> e.g. mm/?/yyyy or mm/dd/?" id="bDate"
                            name="sDate" placeholder="type as mm/dd/yyyy or follow as hint mark" value={this.props.value}
                            onChange={this.props.onChange} readOnly={this.props.readOnly} display={this.props.display} required = {false}
                        />
                    }
                </div>
                
                :
                <div>
                {
                    this.props.verify?
                        <FormGroup label="Date From" type='dark' tip="If you don't know the exact date or year, use ? instead.<br/> e.g. mm/?/yyyy or mm/dd/?" id="bDate"
                        name="sDate" value={this.props.value.sDate} verify ={this.props.verify} all={this.props.all}
                        onClick={this.props.onChange} readOnly={this.props.readOnly} display={this.props.display} required = {true} 
                        />
                    : 
                        <FormGroup label="Date From" type='dark' tip="If you don't know the exact date or year, use ? instead.<br/> e.g. mm/?/yyyy or mm/dd/?" id="bDate"
                        name="sDate" placeholder="type as mm/dd/yyyy or follow as hint mark" value={this.props.value}
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
                this.props.verify?
                    <FormGroup label="Death Date" type='dark' tip="If you don't know the exact date or year, use ? instead.<br/> e.g. mm/?/yyyy or mm/dd/?" id="eDate"
                    name="eDate" value={this.props.value.eDate} verify ={this.props.verify} all={this.props.all}
                    onClick={this.props.onChange} readOnly={this.props.readOnly} display={this.props.display} required = {true} 
                    />
                : 
                <FormGroup label="Death Date" type='dark' tip="If you don't know the exact date or year, use ? instead.<br/> e.g. mm/?/yyyy or mm/dd/?" id="eDate"
                    name="eDate" placeholder="type as mm/dd/yyyy or follow as hint mark" value={this.props.value}
                    onChange={this.props.onChange} readOnly={this.props.readOnly} display={this.props.display} required = {false}
                />
            }
            </div>
            :
            <div>
            {
                this.props.verify?
                    <FormGroup label="To" type='dark' tip="If you don't know the exact date or year, use ? instead.<br/> e.g. mm/?/yyyy or mm/dd/?" id="eDate"
                    name="eDate" value={this.props.value.eDate} verify ={this.props.verify} all={this.props.all}
                    onClick={this.props.onChange} readOnly={this.props.readOnly} display={this.props.display} required = {true} 
                    />
                : 
                <FormGroup label="To" type='dark' tip="If you don't know the exact date or year, use ? instead.<br/> e.g. mm/?/yyyy or mm/dd/?" id="eDate"
                name="eDate" placeholder="type as mm/dd/yyyy or follow as hint mark" value={this.props.value}
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
                            this.props.verify?
                            <textarea rows="1"
                            className = {css.textareaStyle} type="text" name = "bPlace"
                            value={this.props.value.bPlace} readOnly={this.props.readOnly}
                            />
                            :
                            <textarea rows="1" className = {css.textareaStyle} type="text" name ="bPlace"
                            placeholder="Type birth place as hint" value={this.props.value} readOnly={this.props.readOnly}
                            onChange={this.props.onChange}/>
                        }                  
                            
                        </Grid>
                        {
                            this.props.verify? 
                            <Grid item xs={2}>
                                <ShowInfo onClick={this.props.onChange} all={this.props.all} name="bPlace"/>
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
                            this.props.verify?
                            <textarea rows="1" 
                            className = {css.textareaStyle} type="text" name = "bPlace"
                            value={this.props.value.bPlace} readOnly={this.props.readOnly}
                            />
                            :
                            <textarea rows="1" className = {css.textareaStyle} type="text" name ="bPlace"
                            placeholder="Type birth place as hint" value={this.props.value} readOnly={this.props.readOnly}
                            onChange={this.props.onChange}/>
                        }                  
                            
                        </Grid>
                        {
                            this.props.verify? 
                            <Grid item xs={2}>
                                <ShowInfo onClick={this.props.onChange} all={this.props.all} name="bPlace"/>
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
                        this.props.verify?
                        <textarea rows= "1"
                        className = {css.textareaStyle} type="text" name = "dPlace"
                        value={this.props.value.dPlace} readOnly={this.props.readOnly}
                        />
                        :
                        <textarea rows= "1" className = {css.textareaStyle} type="text" name ="dPlace"
                        placeholder="Type death place as hint" value={this.props.value} readOnly={this.props.readOnly}
                        onChange={this.props.onChange}/>
                    }                  
                        
                    </Grid>
                    {
                        this.props.verify? 
                        <Grid item xs={2}>
                            <ShowInfo onClick={this.props.onChange} all={this.props.all} name="dPlace"/>
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
                        this.props.verify?
                        <textarea rows= "1"
                        className = {css.textareaStyle} type="text" name = "dPlace"
                        value={this.props.value.dPlace} readOnly={this.props.readOnly}
                        />
                        :
                        <textarea rows= "1" className = {css.textareaStyle} type="text" name ="dPlace"
                        placeholder="Type Place of Last Existence as hint" value={this.props.value} readOnly={this.props.readOnly}
                        onChange={this.props.onChange}/>
                    }                  
                        
                    </Grid>
                    {
                        this.props.verify? 
                        <Grid item xs={2}>
                            <ShowInfo onClick={this.props.onChange} all={this.props.all} name="dPlace"/>
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
                    <Grid item xs={2} className={css.labelStyle}>                    
                        <span className ={css.font}>Occupation</span>
                    </Grid>
                    {
                        this.props.verify?
                        <Grid item xs={8} style={{paddingLeft:"0px",paddingTop:"0px"}}>
                            <input type="text" className={css.inputCon} value={this.props.function} readOnly={true}/>
                        </Grid>
                        :
                        <Grid item xs={8} style={{paddingLeft:"0px",paddingTop:"0px"}}>                    
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
                            value={this.props.value}
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
                        this.props.verify? 
                        <Grid item xs={2}>
                            <ShowInfo onClick={this.props.onChange} all={this.props.all} name="occ"/>
                        </Grid>
                        :
                        <Grid item xs={2}>
                            <a data-tip="Choose entity's occupations" 
                            style={{display:this.props.display}} data-for="occ"><IoMdInformationCircleOutline/></a>
                            <ReactTooltip id="occ" type="dark" effect="solid" place="top" multiline={true}/>
                        </Grid>
                    }
            </Grid>

        </div> 
        )
    }
}


