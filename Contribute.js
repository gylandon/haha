import fetch from 'isomorphic-unfetch';
import Layout from './components/myLayoutAfter'

class test extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:''
        }
    }
    componentDidMount(){
        let t = this;
        
    }
    render(){
        return(
            <div>
                <Layout /> 
                
            </div>
                       

        );
        
    }
} 


export default test;