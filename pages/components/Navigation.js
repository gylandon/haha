import Msg from './InnerMsg'
import  Router  from 'next/router';
import Link from 'next/link'
import css from "../style.css"
import { MdAccountCircle } from "react-icons/md";
import ass from 'styled-jsx/css'
import {Hiden} from "./Hiden"

const styles = ass`
    span {
        color: #fff;
        margin-left: 10px;
        postion: 
    }   
`;

const linkStyle ={
    marginRight: 100
};

const Welcome = (props)=>{
    return(
        <div className={css.msg}>
            <MdAccountCircle color="#fff" size="20px"/>
            <span>Welcome, {props.name}</span>
            <Hiden />
            <style jsx>
                {styles}
            </style>
        </div>
    )
}

class navi extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            uId :'',
            uName :null,
            // role:null
        }
       
    }
    componentDidMount(){
        const uId =  localStorage.getItem('uId')
        const uName =  localStorage.getItem('userName')
        // const role =  localStorage.getItem('role')
        console.log(uId,uName)
        this.setState({
            uId: uId,
            uName,
        })
    }
    handleClick(e){
        e.preventDefault();
        console.log('aaa')
        localStorage.removeItem('role')
        localStorage.removeItem('uId')
        Router.push({
            pathname: '/../signin'
        })
       
    }
    render(){
        const { uName } = this.state
        return(
            <div style={{marginBottom:"10px"}}>
            {this.props.role==null&&
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary" style={{height:"30px"}}>
                
                
                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a style={linkStyle} title='Home page' className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a style={linkStyle} className="nav-link" href="/signin">Sign in</a>
                        </li>
                        <li className="nav-item">
                            <a style={linkStyle} className="nav-link" href="/signup">Sign up</a>
                        </li>
                    </ul>
                   
                </div>
                </nav>
            }
            {this.props.role=='Contributor'&&
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary" style={{height:"30px"}}>                 
                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a style={linkStyle} title='Home page' className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <Link href="/myEntity/[id]" as={`/myEntity/${this.state.uId}`} >           
                                <a style={linkStyle} className="nav-link" >Contribute</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/myEntity/[id]" as={`/myEntity/${this.state.uId}`} >           
                                <a style={linkStyle} className="nav-link" >My Entities</a>
                            </Link>
                        </li>
                       
                    </ul>
                    <div> 
                        <button type="button" className={css.btn_out} onClick={this.handleClick.bind(this)}>Sign out</button>                          
                    </div>
                    <div style={{width:"15%",position:"relative",left:"3%"}}>
                            <Welcome name={uName} />
                    </div>
                </div>       
                </nav>
            }

            {this.props.role=='Curator'&&
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary" style={{height:"30px"}}>                 
            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a style={linkStyle} className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <Link href="/myEntity/[id]" as={`/myEntity/${this.state.uId}`} >           
                            <a style={linkStyle} className="nav-link" >Contribute</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/reEntity/[id]" as={`/reEntity/${this.state.uId}`} >           
                            <a style={linkStyle} className="nav-link" >Submissions</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/myEntity/[id]" as={`/myEntity/${this.state.uId}`} >           
                            <a style={linkStyle} className="nav-link" >My Entities</a>
                        </Link>
                    </li>
                   
                   
                </ul>
                <div> 
                   <button type="button" className={css.btn_out} onClick={this.handleClick.bind(this)}>Sign out</button>
                </div>
                <div style={{width:"15%",position:"relative",left:"3%"}}>
                    <Welcome name={uName} />
                </div>
            </div>       
            </nav>
        }

            {this.props.role=='Manager'&&
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary" style={{height:"30px"}}>                 
            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a style={linkStyle} className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                            <Link href="/myEntity/[id]" as={`/myEntity/${this.state.uId}`} >           
                                <a style={linkStyle} className="nav-link" >Contribute</a>
                            </Link>
                    </li>
                   
                    <li className="nav-item">
                        <Link href="/reEntity/[id]" as={`/reEntity/${this.state.uId}`} >           
                            <a style={linkStyle} className="nav-link" >Submissions</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/account" as ="/account">
                            <a style={linkStyle} className="nav-link">Accounts</a>
                        </Link>
                       
                    </li>
                    <li className="nav-item">
                        <Link href="/myEntity/[id]" as={`/myEntity/${this.state.uId}`} >           
                            <a style={linkStyle} className="nav-link" >My Entities</a>
                        </Link>
                    </li>
                   
                </ul>
                <div> 
                    <button type="button" className={css.btn_out} onClick={this.handleClick.bind(this)}>Sign out</button>
                </div>
                <div style={{width:"15%",position:"relative",left:"4%"}}>
                    <Welcome name={uName} />
                </div>
            </div>       
            </nav>
        }
            </div>
        );
      
    }
    
}

export default navi;