import Layout from '../components/myLayoutAfter';
import  Router  from 'next/router';
import { Get } from '../components/http'
import ReactTable from "react-table";
import '../util/config'


class entityTable extends React.Component{
    constructor(props){
        super(props)
        this.state={
        
            uId: " ",
            showAlert:"none",
            myEntities:[]
        
        }
        this.data= [];
        this.handleVerify = this.handleVerify.bind(this)
        this.handleView = this.handleView.bind(this)
    }
    componentDidMount(){
        const uId = localStorage.getItem("uId")
        const data={
            uId: uId
        }
        Get('view_all_submissions',data).then(res=>{
            this.setState({
                myEntities: res
            })
        })
    }
    handleView(e){
        let index = e.target.name
        let id = this.state.myEntities.myEntities[index].eId
        localStorage.setItem("eId",id)
        Router.push({
            pathname: `/../viewEntity/${id}`
        })
    }
    handleVerify(e){
        let index = e.target.name
        let id = this.state.myEntities.myEntities[index].eId
        localStorage.setItem("eId",id)
        Router.push({
            pathname: `/../verifyEntity/${id}`
        })
    }
   
    
 
    render(){
        return(
            <div>
        
                <Layout />               
                <div style={{textAlign:'center', width:'80%',left:'10%', position:'relative'}}>
                    <div>
                       
                        <ReactTable
                            
                            data={this.state.myEntities.myEntities}
                          
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
                                  Header: "Entity Name",
                                  accessor: "eName",
                                  width:150
                                },
                           
                                {
                                  Header: "Update date",
                                  accessor: "date",
                                },
                                {
                                    Header: "Status",
                                    accessor: "status",
                                },
                                {
                                    Header: "Operation",
                                    accessor: "verify",
                                    width:150,
                                    Cell: row =>(
                                        <div>
                                        {
                                            this.state.myEntities.myEntities[row.index].status=="Submitted"&&
                                            <button className='btn btn-info' style={{borderRadius:"3px"}} name= {row.index} 
                                            onClick={this.handleVerify}>
                                                Verify
                                            </button>
                                        }
                                        {
                                            this.state.myEntities.myEntities[row.index].status=="Curator Approved."&&
                                            <button className='btn btn-info' style={{borderRadius:"3px"}} name= {row.index} 
                                            onClick={this.handleVerify}>
                                                Verify
                                            </button>
                                        }
                                        {
                                            this.state.myEntities.myEntities[row.index].status=="Released"&&
                                            <button className='btn btn-success' style={{borderRadius:"3px"}} name= {row.index} 
                                            onClick={this.handleView}>
                                                View
                                            </button>
                                        }
                                        {
                                            this.state.myEntities.myEntities[row.index].status=="Rejected"&&
                                            <button className='btn btn-secondary' style={{borderRadius:"3px"}} name= {row.index} 
                                            onClick={this.handleView}>
                                                View
                                            </button>
                                        }
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
                    <br />
                    </div>
                </div>
               
                  
            </div>
    )
    }
  
      
   
};


export default entityTable;
