import Msg from './InnerMsg'

const linkStyle ={
    marginRight: 100
}
class navi extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
            {this.props.role==''&&
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                
                
                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a style={linkStyle} className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a style={linkStyle} className="nav-link" href="/Contribute">Contribute</a>
                        </li>
                        <li className="nav-item">
                            <a style={linkStyle} className="nav-link" href="/Personal-management">Person_management</a>
                        </li>
                        <li className="nav-item">
                            <a style={linkStyle} className="nav-link" href="/Profile">Profile</a>
                        </li>
                        <li className="nav-item">
                            <a style={linkStyle} className="nav-link" href="/Signin">Sign in</a>
                        </li>
                        <li className="nav-item">
                            <a style={linkStyle} className="nav-link" href="/Signup">Sign up</a>
                        </li>
                        
                    </ul>
                
                </div>
                </nav>
            }
            {this.props.role=='contributor'&&
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">                 
                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a style={linkStyle} className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a style={linkStyle} className="nav-link" href="/Contribute">Contribute</a>
                        </li>
                        <li className="nav-item">
                            <a style={linkStyle} className="nav-link" href="/Personal-management">Person_management</a>
                        </li>
                        <li className="nav-item">
                            <a style={linkStyle} className="nav-link" href="/Profile">Profile</a>
                        </li>
                        <li className="nav-item">
                            <a style={linkStyle} className="nav-link" href="/Signin">Sign in</a>
                        </li>
                        <li className="nav-item">
                            <a style={linkStyle} className="nav-link" href="/Signup">Sign up</a>
                        </li>
                    </ul>
                   
                </div>       
                </nav>
            }
            {this.props.role=='manager'&&
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">                 
            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a style={linkStyle} className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a style={linkStyle} className="nav-link" href="/Contribute">Contribute</a>
                    </li>
                    <li className="nav-item">
                        <a style={linkStyle} className="nav-link" href="/Message">Message</a>
                    </li>
                    <li className="nav-item">
                        <a style={linkStyle} className="nav-link" href="/Entity-management">Entity</a>
                    </li>
                </ul>
                <div> 
                   <Msg />
                    
                </div>
            </div>       
            </nav>
        }
            </div>
        );
      
    }
    
}

export default navi;