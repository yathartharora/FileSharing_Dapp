import React, {Component} from 'react';
import { Button, Image, Container, Icon } from 'semantic-ui-react';
import FileSharing from '../Ethereum /filesharing';
import web3 from '../Ethereum /web3';
import {Router , Link} from '../routes';
import Head from 'next/head';

class Receive extends Component{

    constructor(props){
        super(props);
        this.state = {
            ipfsHASH: '',
            errormessage: '',
            url: '',
            message: ''
        }
        this.onClick = this.onClick.bind(this);
        this.generate = this.generate.bind(this);
    }

    onClick = async(event) => {
        event.preventDefault();
        console.log("Receiving.......")
        try {
            const accounts =  await web3.eth.getAccounts();
            console.log(accounts[0]);
            const pass = await FileSharing.methods.receiveFile().call({
                from: accounts[0]
            });
            const msg = await FileSharing.methods.receiveMessage().call({
                from: accounts[0]
            });
            this.setState({ipfsHASH: pass, message: msg})
            
        } catch (error) {
            this.setState({errormessage: error.message})
        }
        console.log(this.state.ipfsHASH);
        console.log(this.state.message);
    }

    generate(event) {
        event.preventDefault();
        console.log("Received....");

        Router.pushRoute(`/receive/${this.state.ipfsHASH}`);

        console.log(this.state.ipfsHASH);
    }

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
                <h2>File Sharing dApp</h2>
            <nav> 
        <Icon name="home"/>
        <Link route={`/`}>
            <a style={{color: "black"}}>Home</a>
         </Link> | |
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

            <div>
            <Button onClick={this.onClick} size="big">Generate URL</Button>
            <Button onClick={this.generate} size="big">Open File</Button>
            </div>
            <br></br>

            <div>
                <a href={`https://ipfs.io/ipfs/${this.state.ipfsHASH}`}>Generated URL: {`https://ipfs.io/ipfs/${this.state.ipfsHASH}`}</a>
            </div>
            <br></br>
            <div>
                <h2>Attached Message:</h2>
                <p>{this.state.message}</p>
            </div>

            </Container>

        );
    }
}

export default Receive;