import React, {Component} from 'react';


class Display extends Component {

    static async getInitialProps(props){
        const {address} = props.query;

        return {address};
    }

    render(){
        return(
            <div>
                <img src={`https://ipfs.io/ipfs/${this.props.address}`} />
                <a href={`https://ipfs.io/ipfs/${this.props.address}`}>Access via the link(if file is not loaded)</a>
            </div>
        );
    }
}


export default Display;