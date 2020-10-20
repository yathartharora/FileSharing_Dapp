const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/Sharing.json');

const provider = new HDWalletProvider(
    'era road real nation cute review tired range key velvet junk deposit',
    'https://ropsten.infura.io/v3/e564d206cb724eacafb1cc77bf7fa13e'
);

const web3 = new Web3(provider);

const deploy = async() => {
    const accounts = await web3.eth.getAccounts(); 

    console.log('Attempting to deploy from the account ', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
      .deploy({data: compiledFactory.bytecode})
      .send({gas: '3000000', from: accounts[0]});
    
    console.log('Contract deployed to ', result.options.address);

};
deploy();