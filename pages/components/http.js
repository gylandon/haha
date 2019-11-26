import fetch from 'isomorphic-unfetch';
import '../util/config'
import io from 'socket.io-client'

export const Get=async function (method,data){
    var url = global.url
    var str = "?";
    for(var k in data){
        if(str != "?"){
            str += "&";
        }
        str += k + "=" + data[k];
    }         
    var requestURL = url+method  + encodeURI(str); 
    const res = await fetch(requestURL)
    const json = await res.json();

    return  json
}



export const Post=async function (method,data){
    var url = global.url
    
    var requestURL = url+method; 
    const res = await fetch(requestURL,{
        method: 'POST',
        body: JSON.stringify(data),
    })
    const json = await res.json();
 
    return  json
}

// export const Connect = ()=>{
  
//     const socket = io('http://localhost:3001')
//     socket.on('connect',()=>{
//         console.log('Connected!')
//     })
//     return socket
// }
// export const Emit = (method,data,socket)=>{
//     if(method !== null|| socket !==null){
      
//         socket.emit(method,data)
//     }else{
//         return null
//     }
   
// }
// export const On = (method,handler,socket)=>{
//     if(method !== null|| socket !==null){
      
//         socket.on(method,function(msg){
//             if(msg!==null){
//                 handler(msg)
//             }
//         })
       
//     }else{
//         return null
//     }
   
// }