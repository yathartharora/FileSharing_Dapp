import React, {Component} from 'react';
import {Advertisement, Container} from 'semantic-ui-react';
import Head from 'next/head';
import {Link} from '../routes';

class Sharing extends Component{
    render(){
        return(
            <Container>
            <Head>
            <link async rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.2.12/dist/semantic.min.css" />
            </Head>

            
            <div style={{marginLeft: 300, marginTop:200}}>

                <Link route='/send'>
                    <a><Advertisement unit='banner' test='Send' backgroundColor='Blue' /></a>
                </Link>

            </div>

            <div style={{marginLeft: 300, marginTop:50}}>
                <Link route='/receive'>
                    <a><Advertisement unit='banner' test='Receive' /></a>
                </Link>

            </div>
            
            </Container>
        );
    }
}

export default Sharing;