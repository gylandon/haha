import React, { Component } from 'react';
import css from '../style.css' 
import Files from 'react-files'
import {FormGroupSm} from './Form-group';
import "../util/config"


export class Uploadpicture extends Component {
    constructor(props){
        super(props)
        // const src = "/../../static/image_u3.png"
       
        this.state = {
            src: "/../../static/image_u3.png"
        };
        this.isFirst = true
        this.onFilesChange = this.onFilesChange.bind(this)
        this.onFilesError = this.onFilesError.bind(this)
    }
    componentDidUpdate(prevProps){
        if(this.props.value!==prevProps.value){
            if(this.isFirst){
                let src = global.url+this.props.value
                this.setState({
                    src
                })
                this.isFirst = false
            }
        }
    }
    onFilesChange(e) {    
        const src = e[e.length-1].preview.url
        this.setState({
            src
        })
        this.props.onChange("image",e[e.length-1])
    }
    onFilesError(error) {
        alert('error code ' + error.code + ': ' + error.message)
    }
    render() {
        return (
            <div className={css.box}>
                <div>
                    <img className={css.image} src={this.state.src} />
                </div>
                <div style={{textAlign:"center"}}>
                    <Files
                        className='files-dropzone'
                        onChange={this.onFilesChange}
                        onError={this.onFilesError}
                        accepts={['image/*']}
                        maxFiles={300}
                        maxFileSize={10000000}
                        minFileSize={0}
                        clickable
                    >
                    <button type="button" className={css.btn_pic} name="pic">Upload Picture</button>
                    </Files>
                </div>
                <FormGroupSm type="text" label="Resource" name="resources" placeholder="Photo resource" value={this.props.resources}
                    onChange={this.props.onChange} readOnly={this.props.readOnly} edit={this.props.edit} required={false}
                />
            </div>
            
        );
    }}

export default Uploadpicture;