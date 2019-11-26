import React, { Component } from 'react'
import { Post,Get } from './components/http'
import ReactTable from "react-table";
import Layout from './components/myLayoutAfter';
import Router from 'next/router';

class message extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
        this.handleClick = this.handleClick.bind(this)
    }
    componentDidMount(){
        const uId = localStorage.getItem("uId")
        const data = {
            uId
        }
        Get("view_message",data).then(res=>{
            this.setState({
                data :res 
            })
        })
    }
    handleClick = (e)=>{
        const { data } = this.state
        let name = e.target.name
        localStorage.setItem("MsgeId",data.message[name].eId)
        let mId = data.message[name].mId
        const data1 = {
            mId
        }

        Get("update_message",data1).then(res=>{
            Router.push({
                pathname: `/./message/${mId}`
            })
        })
    }
    
    render() {
        return (
    
        <div >
            <Layout />
            <ReactTable
             style={{width:"80%",position:"relative",left:"10%",textAlign:"center"}}                       
            data={this.state.data.message}
            
            columns={[                         
                {
                    Header: "#",
                    accessor: "eId",
                    width:150,
                    Cell: row=>(
                        <span>{row.index}</span>
                    )
                },
                    {
                    Header: "Message",
                    accessor: "message",
                    width:300,
                    Cell: row=>(
                        this.state.data.message[row.index].isRead == null?
                        <span>New message: {row.value}</span>
                        :
                        <span>{row.value}</span>
                    )
                    },
            
                    {
                    Header: "From",
                    accessor: "sender",
                    },
                    {
                        Header: "Date",
                        accessor: "time",
                    },
                    {
                        Header: "View",
                        accessor: "view",
                        width:100,
                        Cell: row =>(
                            <div>
                                <button className='btn btn-success' style={{borderRadius:"3px"}} name= {row.index} 
                                    onClick={this.handleClick}>
                                        View
                                </button>
                            </div>
                        
                            
                        )
                    },
            ]}
            
            defaultSorted={[
                {
                id: "status",
                desc: true
                }
            ]}
            defaultPageSize={10}
            className="-striped -highlight"
        />
        </div>
        )
    }
}

export default message;