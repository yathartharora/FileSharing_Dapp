import React, {Component} from 'react';
import { Button, Image } from 'semantic-ui-react';
import FileSharing from '../Ethereum /filesharing';
import web3 from '../Ethereum /web3';
import {Router , Link} from '../routes';

class Receive extends Component{

    constructor(props){
        super(props);
        this.state = {
            ipfsHASH: '',
            errormessage: ''
        }
        this.onClick = this.onClick.bind(this);
        this.generate = this.generate.bind(this);
        this.display = this.display.bind(this);
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

    display() {
        <img src={`https://ipfs.io/ipfs/${this.state.ipfsHASH}`} />
    }

    render(){
        
        return(

            <div>
            <Button onClick={this.onClick} size="big">Generate URL</Button>
            <Button onClick={this.generate} size="big">Open File</Button>
            </div>

        );
    }
}

export default Receive;