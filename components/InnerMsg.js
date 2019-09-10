
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
    var url ='http://localhost:8081/fetchMsg'
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
    console.log(props)
    return props
}

class msg extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            num:'1'
        }
    }
    componentDidMount(){
        // this.state = {
        //     num:'1'
        // }
        // const num = fetchMsg()
        // this.setState({
        //     num: '1'
        // })
    }
    render(){
        return(
            <div>
                {this.state.num=='0'&&
                <a href='/Account-management' style={{marginRight:"20px"}}>
                    <img src='/static/email1.png' title='Message' style={{width:'15%'}} />
                </a>}
                {this.state.num!=='0'&&
                <a href='/Account-management'  style={{marginRight:"20px"}}>
                    <img src='/static/emailComing.png' style={{width:'15%'}} />
                    
                </a>}
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