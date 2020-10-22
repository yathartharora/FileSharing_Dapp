import React, {Component} from 'react';
import  FileSharing from '../Ethereum /filesharing';
import web3 from '../Ethereum /web3';
import {Input, Form, Button, Container, Icon} from 'semantic-ui-react';
import ipfs from '../ipfs';
import Head from 'next/head';

class Send extends Component{

    constructor(props){
        super(props);
        this.state = {
            loading: false,
            errormessage: '',
            hash: '',
            send: '',
            buffer: null,
            ipfsHash: '',
            active: false
        }
        this.captureFile = this.captureFile.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.generate = this.generate.bind(this);
    }

    onSubmit = async (event) => {
        event.preventDefault();
        this.setState({loading: true, errormessage: ''});
        try {
            const accounts = await web3.eth.getAccounts();
            console.log(accounts[0]);
            console.log(this.state.ipfsHash)
            await FileSharing.methods.sendFile(this.state.send, this.state.ipfsHash).send({
                from: accounts[0],
                gas:'1000000',
            })
        } catch (error) {
            this.setState({errormessage: error.errormessage})
        }
        this.setState({loading: false});
    }

    generate(event) {
        event.preventDefault();
        ipfs.files.add(this.state.buffer, (err, res) => {
            if(err){
                console.log(err)
                return
            }
            this.setState({ipfsHash: res[0].hash})
            console.log('ipfsHash: ', this.state.ipfsHash);
        })
        this.setState({active: false});
    }

    captureFile(event) {
        event.preventDefault();
        console.log('Capture File...')

        const file = event.target.files[0];
        const reader = new window.FileReader();
        reader.readAsArrayBuffer(file);

        reader.onloadend = () => {
            this.setState({buffer: Buffer(reader.result)})
            console.log('buffer ',this.state.buffer);
        }
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

      <body>
      <Form onSubmit={this.onSubmit}>

          <div style={{marginLeft: 300, marginTop: 50}}>
              <a>Upload File: </a>
          <Input
                 type = 'file'
                 onChange = {this.captureFile}
                />
          </div>
                
                <br></br>
            <div style={{marginTop: 20, marginLeft: 300}}>
                <a>Enter the Receiver Address:</a>
            <Input
                placeholder = "Receiver Address"
                value = {this.state.send}
                onChange={event => this.setState({send: event.target.value})}
                />
            </div>

            <div style={{marginTop: 40, marginLeft: 350}}>
                <Button primary onClick={this.generate}>Generate</Button>
                <Button primary loading={this.state.loading} disabled={this.state.active}>Submit</Button>   
            </div>    


            <div style={{marginTop: 40, marginLeft: 350}}>
                <a>Generated Hash: {this.state.ipfsHash}</a>
            </div>
                
            </Form>

      </body>
            
        </Container>
            
        );
    }
}

export default Send;