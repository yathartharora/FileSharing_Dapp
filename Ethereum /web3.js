import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    //We are in the Browser and metamask is running
    web3 = new Web3(window.web3.currentProvider);

} else {
    const provider = new Web3.providers.HttpProvider(
        'https://ropsten.infura.io/v3/e564d206cb724eacafb1cc77bf7fa13e'
    );

    web3 = new Web3(provider);
}

export default web3;