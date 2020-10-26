import React, {Component} from 'react';
import {Icon, Container, Button} from 'semantic-ui-react';
import Head from 'next/head';
import {Link} from '../routes';

class Sharing extends Component{
    render(){
        return(
            <Container>
            <Head>
            <link async rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.2.12/dist/semantic.min.css" />
            
            </Head>
            <head>
                <h2>File Sharing dApp</h2>
            </head>
            <div style={{textAlign:"center", margin: 30}}>
                <a style={{fontFamily: "sans-serif",color:"black", fontSize: 40}}> BLOCKShare</a>
            <nav> 
        <Icon name="home"/>
         
         <Link route={`/`}>
            <a style={{color: "black"}}>Home</a>
         </Link> |
         <Icon name="user"/> 
         <Link route={`/about`}>
            <a href = "#" style={{color: "black"}}>About</a>
         </Link> | 
         <Icon name="github"/> 
         <a href = "https://github.com/yathartharora/FileSharing_Dapp" style={{color: "black"}}>Github</a> | 
         <Icon name="medium"/> 
         <a href = "https://medium.com/@yathartharora1999" style={{color: "black"}}>Blogs</a> | 
         <Icon name="git"/>
         <a href = "https://github.com/yathartharora/FileSharing_Dapp" style={{color: "black"}}>Contribute</a>  
      </nav> </div>
      <body style={{backgroundColor: "white", display: 'block'}}>
          
          
        <div style={{borderStyle:"solid", backgroundColor:"white", width: 1100, height: 500, borderColor: "black"}}>
            <br></br>
                <div style={{borderStyle:"solid", marginLeft: 150, marginTop:100, backgroundColor: "yellow", width: 300, height: 200, textAlign: "center", float:"left"}}>
                    
                    <div style={{marginTop: 80}}>
                        <Link route='/send'>
                            <a style={{fontFamily: "monospace",color:"black", fontSize: 40}}>SEND</a>
                        </Link>
                    </div>
                </div>

                <div style={{borderStyle:"solid",marginLeft: 150, marginTop:100, backgroundColor: "yellow", width: 300, height: 200, textAlign: "center", float: "left"}}>
                    <div style={{marginTop: 80}}>
                        <Link route='/receive'>
                            <a style={{fontFamily: "monospace",color:"black", fontSize: 40}}>RECEIVE</a>
                        </Link>
                    </div>

                </div>
                {/* <div style={{borderStyle:"solid", height: 20}}>

                </div> */}
        </div>
        <div style={{backgroundColor: "black", width: 1100, height: 120}}>
           <div style={{textAlign:"center", marginTop: 20}}>
                <a style={{color:"white"}}>Copyright 2020, All Rights Reserved</a>
           </div>

           <div style={{marginTop: 50, marginLeft: 220}}> 
                
                    <a href="https://www.facebook.com/yatharth.arora.52/">
                        <Button color="facebook">
                            <Icon name="facebook"/> Facebook
                        </Button>
                    </a>
                    
                    <a href="https://twitter.com/YatharthArora8">
                        <Button color="twitter">
                            <Icon name="twitter"/> Twitter
                        </Button>
                    </a>

                    <a href="https://www.linkedin.com/in/yatharth-a-389663128/">
                        <Button color="linkedin">
                            <Icon name="linkedin" /> LinkedIn
                        </Button>
                    </a>
                    <a href="https://www.instagram.com/yathartharora_/">
                        <Button color="instagram">
                            <Icon name="instagram" /> Instagram
                        </Button>
                    </a>
                    <a>
                        <Button color="youtube">
                            <Icon name="youtube" /> YouTube
                        </Button>
                    </a>
                </div>
       
       </div> 
      </body>
       
      
            </Container>
        );
    }
}

export default Sharing;