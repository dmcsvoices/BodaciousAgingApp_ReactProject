import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faInstagram,
  faDiscord,
  faFacebook,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';

library.add(
  faInstagram,
  faDiscord,
  faFacebook,
  faYoutube
);

const Div = styled.div`
   
    background-color: #7b4b94;
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
    font-size: 2em;
    background-image: url("https://cdn.wallpapersafari.com/80/71/EUAabj.jpg");
    background-clip: text;
    background-size: stretch;
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
            <img src="./BodaciousAging_basicLogo_med.png" className="App-logo" alt="BodaciousAgingLogo"/>
            <H1 className="App-title">Bodacious Planning for Women Forty and Over</H1>
            <FontAwesomeIcon className="navIcon" icon="fa-brands fa-instagram" size="3x" />
            <FontAwesomeIcon className="navIcon" icon="fa-brands fa-facebook" size="3x" />
            <FontAwesomeIcon className="navIcon" icon="fa-brands fa-youtube" size="3x" />
            <FontAwesomeIcon className="navIcon" icon="fa-brands fa-discord" size="3x" />
        </Div>
        )
    }
}
