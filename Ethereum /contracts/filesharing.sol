pragma solidity 0.4.25;

contract Sharing{
    
    struct Share{
        address receiver;
        string ipfsHash;
    }
    
    mapping (address => Share) public sender;
    
    function sendFile(address _address, string _ipfsHASH) public {
        
        Share storage receivers = sender[_address];     
        
        receivers.ipfsHash = _ipfsHASH;
        
    }
    
    function receiveFile() view public returns(string) {
        Share memory temp =  sender[msg.sender];
        
        return temp.ipfsHash;
    }
    
}