import React, {Component} from 'react';
import  FileSharing from '../Ethereum /filesharing';
import web3 from '../Ethereum /web3';
import {Input, Form, Button} from 'semantic-ui-react';
import ipfs from '../ipfs';

class Send extends Component{

    constructor(props){
        super(props);
        this.state = {
            loading: false,
            errormessage: '',
            hash: '',
            send: '',
            buffer: null,
            ipfsHash: ''
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
            <Form onSubmit={this.onSubmit}>
                <Input
                 type = 'file'
                 onChange = {this.captureFile}
                />
                <Input
                value = {this.state.send}
                onChange={event => this.setState({send: event.target.value})}
                />
                <Button primary onClick={this.generate}>Generate</Button>
                <Button primary loading={this.state.loading}>Submit</Button>
            </Form>
            
        );
    }
}

export default Send;