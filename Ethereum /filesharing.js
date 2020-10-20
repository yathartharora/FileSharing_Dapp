import web3 from './web3';
import Match from './build/Sharing.json';

const instance = new web3.eth.Contract(JSON.parse(Match.interface),'0xD6FFF1D6827FB274AAAea38cCEF4A23793880C2c');


export default instance;