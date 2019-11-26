import Layout from './components/myLayoutAfter';
import {Get} from './components/http';
import ReactTable from "react-table";
import  Router  from 'next/router';

class account extends React.Component{
    constructor(props){
        super(props),
       
        this.state ={
            uId: '',
            json: [],
        }
       this.handleVerify = this.handleVerify.bind(this)
    }
    componentDidMount(){
        const uId = localStorage.getItem('uId')
        this.setState({uId: uId})
        const data = {
            uId : uId
        }
        
        Get('view_account_application', data).then(res=>{
            const l = res.length
                this.setState({
                    json: res,
                })

           
        })
       
    }
    handleVerify(e){
        let index = e.target.name
        let id = this.state.json[index].uId
        localStorage.setItem("eId",id)
        localStorage.setItem("status",e.target.value)
        Router.push({
            pathname: `/./account/${id}`
        })
    }
    render(){
        return(
            <div>
                <Layout />
                   <ReactTable style={{postion:"relative",width:"70%",left:"15%",textAlign:"center"}}     
                            data={this.state.json}
                            columns={[ 
                                {
                                    Header:()=>(
                                        <span>Account List</span>
                                    ),
                                    columns:[
                                        {
                                            Header: "#",
                                            accessor:"uId",
                                            width:150,
                                            Cell: row =>(
                                                <span>{row.index}</span>
                                            )
                                            
                                          },
                                          {
                                            Header: "UserName",
                                            accessor: "uName",
                                            width:200
                                          },
                                          {
                                              Header: "Email",
                                              accessor: "email",
                                              width:300
                                            },
                                          {
                                            Header: "Role",
                                            accessor: "role",
                                            width:200,
                                            Cell: row =>(
                                              <div>
                                              {
                                                  row.value!=="0"&&<div>{row.value}</div>
                                              }
                                              {
                                                  row.value=="0"&&<div>Unverified</div>
                                              }
                                              
                                              </div>
                                            )
                                          },
                                         
                                          {
                                              Header: "VERIFY",
                                              accessor: "verify",
                                              width:150,
                                              Cell: row =>(
                                                  <div>
                                                  {
                                                      this.state.json[row.index].role=="0"&&
                                                      <button className='btn btn-info' style={{borderRadius:"3px"}} name= {row.index} 
                                                      onClick={this.handleVerify}>
                                                          View
                                                      </button>
                                                  }
                                                  
                                                  </div>
                                               
                                                  
                                              )   
                                              
                                          },
                                    ]
                                },                        
                          ]}
                        
                        defaultSorted={[
                            {
                            id: "role",
                            desc: false
                            }
                        ]}
                        defaultPageSize={10}
                        className="-striped -highlight"
                    />
            
            </div>
        )
    }

};


export default account;
