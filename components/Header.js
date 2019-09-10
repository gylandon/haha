import Head from 'next/head'

const Header = () => (
 
    <div>
      <Head>
        <title>Women's archive</title>
        <link rel="stylesheet" href="https://bootswatch.com/4/minty/bootstrap.min.css"/>
      </Head>
      <h5 style={{backgroundColor:"rgba(116, 116, 111, 0.359)",color:"green",width:"50%"}}>
      Australia Women's Archives Project</h5>
      <h1 className="display-3" style={{color:'#ffd633'}}>Australian  Women</h1>
      
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