import Layout from './components/myLayoutAfter';
import './util/config'
import { useRouter } from 'next/router';


const boxStyle={
  position:'relative',
  left:'37%',
  width:"30%",
  marginBottom:'20px',
  padding:'30px',
  border:'2px solid white',
  borderRadius:'2px'

}; 

const Home = () =>{
    const router = useRouter()
    const query = router.query
    return(
      <div id="home-content">
      <Layout userInfo = {query}/>
        <h1 style={{textAlign:'center',margin:'20px 0 0 0',fontSize:50,color:'#35675f'}}>Welcome</h1>
        <div id="home-intro">
          <p style={{margin:'15px 0 0 110px',fontSize:20}}> The Australian Women's Register is a rich and growing source of information about Australian women and their organisations. </p>
          <p style={{margin:'15px 0 0 110px',fontSize:20}}> You can use the Register to:</p>
          
        </div>
        <div style={boxStyle}>
        <ul>
          <li style={{listStyle:'none'}}> <img style={{margin:'0 0 10px 0'}}src ='/static/button-next.gif'/>
            <a style={{margin:'0 0 0 10px',fontSize:25}} href="https://www.womenaustralia.info/br_a_women.htm">Find women</a>
          </li>
          <li style={{listStyle:'none'}}> <img style={{margin:'0 0 10px 0'}}src ='/static/button-next.gif'/>
            <a style={{margin:'0 0 0 10px',fontSize:25}} href="https://www.womenaustralia.info/br_a_organisations.htm">Find organisations</a>
          </li>
          <li style={{listStyle:'none'}}> <img style={{margin:'0 0 10px 0'}}src ='/static/button-next.gif'/>
            <a style={{margin:'0 0 0 10px',fontSize:25}} href="https://www.womenaustralia.info/archives/br_a_arc.htm">Find archives</a>
          </li>
          <li style={{listStyle:'none'}}> <img style={{margin:'0 0 10px 0'}}src ='/static/button-next.gif'/>
            <a style={{margin:'0 0 0 10px',fontSize:25}} href="https://www.womenaustralia.info/bib/br_a_bib.htm">Find publications</a>
          </li>
          <li style={{listStyle:'none'}}> <img style={{margin:'0 0 10px 0'}}src ='/static/button-next.gif'/>
            <a style={{margin:'0 0 0 10px',fontSize:25}} href="https://www.womenaustralia.info/br_a_dobjects.htm">Find digital resources</a>
          </li>
        </ul>
  
        </div>
    </div>
    
      
    );
}
export default Home;
