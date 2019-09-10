import Layout from './components/myLayoutAfter';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link'
const accountTable=(props)=>{
    return(
        <div>
            <Layout />
            <ul style={{textAlign:'center'}}>
                {props.data.map(item => (
                    <li key={item.applicationId}>
                    <Link href="/Message/[id]" as={`/Message/${item.applicationId}`}>
                        <a>
                            {item.applicationStatus=='0'?
                            <strong>{item.applicationId}&nbsp;&nbsp;{item.applicationUsername}&nbsp;&nbsp;New account application!&nbsp;&nbsp;{item.applicationTime}</strong>
                            :<span>{item.applicationId}&nbsp;&nbsp;{item.applicationUsername}&nbsp;&nbsp;New account application!&nbsp;&nbsp;{item.applicationTime}</span>}
                        </a>
                    </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
};

accountTable.getInitialProps = async function() {
    var str = "?";
    const uId = localStorage.getItem('uId')
    const data1={
        uId= uId
    }
    for(var k in data1){
        if(str != "?"){
            str += "&";
        }
        str += k + "=" + data1[k];
    }
    var url ='http://localhost:80/view_account_application'
    var requestURL = url  + encodeURI(str);
    const res = await fetch(requestURL);
    const data = await res.json();
  
    console.log(data)
  
    return {
        data
    };
  };

export default accountTable;
