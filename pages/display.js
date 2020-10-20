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
            </div>
        );
    }
}


export default Display;