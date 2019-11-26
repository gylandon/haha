import Layout from '../components/myLayoutAfter';
import fetch from 'isomorphic-unfetch'; 
import  Router  from 'next/router';
import { Get } from '../components/http';
import {Alert} from '../components/warnAlert';
import Alert1 from '../components/SuccessAlert';
import ReactTable from "react-table";
import '../util/config';
import { AddType } from '../components/AddType';
import Grid from '@material-ui/core/Grid';

class myEntityTable extends React.Component{
    constructor(props){
        super(props)
        this.state={
            deleteSuccess:'none',
            deleteAlert:'none',
            deleteAlert1:'none',
        }
        this.uId = ''
        this.handleUpdate = this.handleUpdate.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleAddType = this.handleAddType.bind(this)
    }
    handleAddType=(name)=>{
        if(name=="Person"){
            localStorage.setItem("type","Person")
            Router.push({
                pathname:"/Contribute"
            })
        }else if(name=="Organisation"){
            localStorage.setItem("type","Organisation")
            Router.push({
                pathname:"/Contribute"
            })
        }
    }
    handleUpdate(e){
      
        let index = e.target.name
        let id = this.props.data.myEntities[index].eId
        localStorage.setItem("eId",id)
        Router.push({
            pathname: `/../editEntity/${id}`
        })
    }
    handleClick(e){
        let index = e.target.name
        let id = this.props.data.myEntities[index].eId
        let status = this.props.data.myEntities[index].status
        localStorage.setItem("status",status)
        localStorage.setItem("eId",id)
        localStorage.setItem("status",e.target.value)
        Router.push({
            pathname: `/../viewEntity/${id}`,
        })
    }

    handleDelete(e){
        let url = e.target.name
        let eId = this.props.data.myEntities[url].eId
        let uId = localStorage.getItem('uId')
        this.uId = uId
        let data ={
            uId : uId,
            eId : eId
        }
        Get('delete_entity',data).then(res=>{
            if(res == 'true'){
                this.setState({
                    deleteSuccess: 'block'
                })
            }else if(res == 'No such entity'){
                this.setState({
                    deleteAlert: 'block'
                })
            }
        }).catch(err=>{console.log('err:'+ err)})
    }
   
    
 
    render(){
        return(
            <div>
        
                <Layout />
                <Grid container spacing={2}
                direction = "row"
                justify="flex-start"
                alignItems="flex-start">
                <Grid item xs={2}>
                    <AddType onClick={this.handleAddType}/>
                </Grid>
                <div style= {{display: this.state.deleteSuccess}}>
                    <Alert1 title="Congratulations!" content="Entity has been deleted successfully" 
                    button="Ok" url={`/../myEntity/${this.uId} `}/>
                </div>
                <div style= {{display: this.state.deleteAlert}}>
                    <Alert title="Oops~!" content="No such entity" />
                </div>
               
                <Grid item xs ={9} >
                <div style={{textAlign:'center', width:'90%',left:"10%", position:'relative'}}>
                      
                        <ReactTable 
                            data={this.props.data.myEntities}
                          
                            columns={[
                                {
                                    Header:"My Entity List",
                                    columns:[
                                            {
                                                Header: "#",
                                                accessor: "eId",
                                                width:150,
                                                Cell: row=>(
                                                    <span>{row.index}</span>
                                                )
                                              },
                                              {
                                                Header: "Entity Name",
                                                accessor: "eName",
                                                width:150
                                              },
                                         
                                              {
                                                Header: "Update date",
                                                accessor: "date",
                                              },
                                              {
                                                  Header: "Process",
                                                  accessor: "status",
                                                  width:150,
                                              },
                                             
                                              {
                                                  Header: "Update",
                                                  accessor: "update",
                                                  width:150,
                                                  Cell: row =>(
                                                      <div>
                                                      {this.props.data.myEntities[row.index].status =="Draft"&&
                                                          <button className='btn btn-info' name= {row.index} 
                                                          onClick={this.handleUpdate} style={{borderRadius:"5px"}}>
                                                              Edit
                                                          </button>
                                                      }
                                                      {this.props.data.myEntities[row.index].status =="Rejected"&&
                                                          <button className='btn btn-info' name= {row.index} 
                                                          onClick={this.handleUpdate} style={{borderRadius:"5px"}}>
                                                              Edit
                                                          </button>
                                                      }
                                                  </div>
                                                     
                                                  )                                                                                                 
                                              },
                                              {
                                                  Header: "View",
                                                  accessor: "feedback",
                                                  width:150,
                                                  Cell: row =>(
                                                      <button className='btn btn-info' name= {row.index} value={this.props.data.myEntities[row.index].status}
                                                      onClick={this.handleClick.bind(this)} style={{borderRadius:"5px"}}>
                                                          View
                                                      </button>
                                                     
                                                  )
                                              },
                                              {
                                                  Header: "Delete",
                                                  accessor: "delete",
                                                  width:150,
                                                  Cell: row =>( 
                                                      <div>
                                                      {this.props.data.myEntities[row.index].status =="Draft"&&
                                                          <button className='btn btn-info' name= {row.index} 
                                                          onClick={this.handleDelete} style={{borderRadius:"5px"}}>
                                                              Delete
                                                          </button>
                                                      }
                                                      {this.props.data.myEntities[row.index].status =="Rejected"&&
                                                          <button className='btn btn-info' name= {row.index} 
                                                          onClick={this.handleDelete} style={{borderRadius:"5px"}}>
                                                              Delete
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
                            id: "id",
                            desc: false
                            }
                        ]}
                        defaultPageSize={10}
                        className="-striped -highlight"
                    />
                    <br />
                
                </div>
                </Grid>
                </Grid>
            </div>
    )
    }
  
      
   
};
myEntityTable.getInitialProps = async function(ctx) {
  
    var router = ctx.query
    var uId = router.id
   
    const data1={
        uId: uId
    }
    var str = "?";
    for(var k in data1){
        if(str != "?"){
            str += "&";
        }
        str += k + "=" + data1[k];
    }
    var url = global.url
    var method = 'view_my_entity'
    var requestURL = url+method  + encodeURI(str);
    const res = await fetch(requestURL);
    const data = await res.json();
  
    return {
        data
    };
  };


export default myEntityTable;
