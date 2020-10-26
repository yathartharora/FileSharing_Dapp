import web3 from './web3';
import Match from './build/Sharing.json';

const instance = new web3.eth.Contract(JSON.parse(Match.interface),'0xD186b3fE6453D8A410ffBc1583b652b67AcAFe33');


export default instance;