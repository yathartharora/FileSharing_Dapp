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
            url: ''
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
            this.setState({ipfsHASH: pass})
            
        } catch (error) {
            this.setState({errormessage: error.message})
        }
        console.log(this.state.ipfsHASH);
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
         <a href = "#" style={{color: "black"}}>Home</a> |
         <Icon name="user"/> 
         <a href = "#" style={{color: "black"}}>About</a> | 
         <Icon name="github"/> 
         <a href = "https://github.com/yathartharora/FileSharing_Dapp" style={{color: "black"}}>Github</a> | 
         <Icon name="medium"/> 
         <a href = "#" style={{color: "black"}}>Blogs</a> | 
         <a href = "#">Algorithm</a>  
      </nav> </div>

            <div>
            <Button onClick={this.onClick} size="big">Generate URL</Button>
            <Button onClick={this.generate} size="big">Open File</Button>
            </div>

            <div>
                <a href={`https://ipfs.io/ipfs/${this.state.ipfsHASH}`}>Generated URL: {`https://ipfs.io/ipfs/${this.state.ipfsHASH}`}</a>
            </div>

            </Container>

        );
    }
}

export default Receive;