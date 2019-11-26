import Head from 'next/head'

const Header = () => (
 
    <div>
      <Head>
        <title>Women's archive</title>
        <link rel="stylesheet" href="https://bootswatch.com/4/pulse/bootstrap.min.css"/>
       
        <link rel="stylesheet" href="https://unpkg.com/react-table@latest/react-table.css"/>
       
      </Head>
      <h5 style={{backgroundColor:"rgba(116, 116, 111, 0.359)",color:"green",width:"30%"}}>
      Australia Women's Archives Project</h5>
      <h1 style={{color:'#693e82',marginBottom:0.1}}><label style={{color:'#ffd633'}}>The</label> Australian Women's Register</h1> 
      <p style={{color:'#35675f',fontSize:12,margin:'0 0 0 0'}}>
        An initiative of <strong> The National Foundation for Australian Women (NFAW)</strong> in conjuction with <strong> The University of Melbourne</strong>
      </p>
      
      <style jsx>{`
        div{
          position: relative;
          height: 5%;
          width: 80%;
          font-family: 'Cochin';
          margin-right: auto; 
          margin-left: auto;

        }
        h6{
          position:relative;
          color:purple
        }
      `}</style>
  </div>
  
);

export default Header;