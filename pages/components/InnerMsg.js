import Link from "next/link";

function fetchMsg (){
    const email = localStorage.getItem('email')
    const data = {
        email: email
    }
    var str = "?";
    for(var k in data){
        if(str != "?"){
            str += "&";
        }
        str += k + "=" + data[k];
    }
    var url ='http://localhost:80/check_unread_num'
    var requestURL = url  + encodeURI(str);
    fetch(requestURL,{
        method: 'GET',
        headers:{
            'Content-Type': 'application/json; charset=utf-8'
        }, 
    }).then(function(response) {
        return response.json().then(function(json) {
           
            returnNum(json);
        })
    })
}
function returnNum(props){
    return props
}

class msg extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            num:''
        }
    }
    componentDidMount(){
        const num = fetchMsg()
        this.setState({
            num: num
        })
    }
    render(){
        return(
            <div>
               
                <Link href='/message' style={{marginRight:"20px"}}>
                    <a>
                    <img src='/static/email.png' title='Message' style={{width:'15%'}} />
                    <div style={{backgroundColor:"red",borderRadius:"50%",color:"white"}}>{this.state.num}</div> 
                    </a>
                </Link>

                <style jsx>{`
                .tooltip {
                    position: relative;
                    display: inline-block;
                    border-bottom: 1px dotted black;
                }
                
                .tooltip .tooltiptext {
                    visibility: hidden;
                    width: 120px;
                    background-color: black;
                    color: #fff;
                    text-align: center;
                    border-radius: 6px;
                    padding: 5px 0;
                    position: absolute;
                    z-index: 1;
                    top: -5px;
                    left: 105%;
                }
                
                .tooltip:hover .tooltiptext {
                    visibility: visible;
                }
                `}</style>
            </div>
        )
    }

}
export default msg;