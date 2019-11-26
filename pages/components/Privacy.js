import React, { Component } from 'react'

const bannerStyle ={
    position:'relative',

    textAlign:'center',
    marginTop:"20px",
    padding: '10px 10px',
    border:'2px solid  #ffd633',
    backgroundColor:"#ffd633",
    borderRadius:'2px',
   
}
const boxStyle={
    position:'relative',
    height: '70%',
    marginBottom:'20px',
    padding:'30px',
    border:'2px solid  #ffd633',
    borderRadius:'2px',
    background:"#d5e0d8"
}
export class Privacy extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick=(e)=>{
        this.props.finish()
    }
    render() {
        return (
        <div style={{display : this.props.show}} className="position">
            <div style={bannerStyle}>
                <span>Privacy Policy Statement</span>
            </div>
            <div style={boxStyle}>
                <span>               
                This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.<br/>
                <br/>
                We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Conditions.<br/>
                <br/>
                Privacy is of great concern to most users of the Internet, and is a critical part of an enjoyable and satisfactory user experience. We are sensitive to the privacy concerns of our subscribers and other visitors to our Service. Whether you are a subscriber or a visitor, we assure you that we do not collect personal information from you unless you provide it to us. Please note, however, that we are asking for this information for the limited purposes of managing your account.<br/>
                </span>
                <div style={{textAlign:"center"}} className="button">    
                    <button className="btn btn-info" type="button" onClick={this.handleClick} >Finish reading</button>
                </div>  
            </div>
            <style jsx>
            {
                `
                .position{
                    position:fixed;
                    bottom:-15%;
                    height:80%;
                    z-index:1;
                    width:80%;
                    left:10%; 
                }
                .button{
                    position:relative;
                    bottom:-15%;
                }
                button{
                    border-radius: 4px;
                    margin-top:30px
                }
                `
            }</style>
        </div>
        )
    }
}
