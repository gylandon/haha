import React, { Component } from 'react'
import css from "../style.css"
import Grid from '@material-ui/core/Grid';
import { IoIosMail,IoIosMailUnread } from "react-icons/io";
import {Get} from './http';
import { MdAccountCircle } from "react-icons/md";
import Link from 'next/link'

const hideStyle={
    position: "absolute",
    background: "#F2F2F2",
    width:"120px",
    height: "100px",
    top:"100%",
    left:"-15%",
    borderRadius: "4px",
    zIndex: 1,
}
export class Hiden extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newComing : false
        }
    }
    
    // componentDidMount(){
    //     const uId = localStorage.getItem("uId")
    //     const data = {
    //         uId : uId
    //     }
    //     Get("check_unread_num",data).then(res=>{
    //         console.log(res)
    //         if(res.num >0){
    //             this.setState({
    //                 newComing: true
    //             })
    //         }
    //     })
        
    // }
    render() {
        return (
        <div style={hideStyle} className={css.hiden}>
            <Grid container spacing={2}
            direction = "column"
            justify="flex-start"
            alignItems="flex-start">
                <Grid item xs={12} style={{marginTop:"10px",marginLeft:"15px"}}>
                <Link href='/message'>
                    <a>
                        {
                            this.state.newComing?
                            <IoIosMailUnread size="20px"/>:
                            <IoIosMail size="20px"/>
                        }
                        <span style={{marginLeft:"5px"}}>message</span>
                    </a>
                   
                </Link>
                </Grid>
                <Grid item xs={12} style={{marginTop:"10px",marginLeft:"15px"}}>
                    <Link href='/Profile'>
                        <a>
                            <MdAccountCircle size="20px"/>
                            <span style={{marginLeft:"5px"}}>profile</span>
                        </a>
                    </Link>
                </Grid>
            </Grid>
        </div>
        )
    }
}
