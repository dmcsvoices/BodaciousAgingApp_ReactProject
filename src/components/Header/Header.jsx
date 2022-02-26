import React, { Component } from 'react';
import styled from 'styled-components';

const Div = styled.div`
    background-image: linear-gradient(to bottom right, rgb(253, 231, 76), rgb(245, 240, 246));
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    
`;

const Button = styled.button`
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 25px;
`;

const H1 = styled.h1`
    margin: 1em;    
    font-size: 3em;
    background-image: url("https://cdn.wallpapersafari.com/0/76/VR69C1.jpg");
    background-clip: text;
    background-size: contain;
    -webkit-background-clip: text;
    color: transparent;


`;


export default class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            //price: this.props.price
        }
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin(event) {
        //prevent default action of submittin gthe form
        event.preventDefault();
        
        //call moralis login
        console.log("In HandleLogin");


  
    }

    render() {
        return (
        <Div>  
            <H1 className="App-title">Bodacious Aging</H1>
            <form><Button onClick={this.handleLogin}>Login</Button></form>
        </Div>
        )
    }
}
