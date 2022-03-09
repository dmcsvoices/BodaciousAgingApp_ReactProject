import React, { Component } from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faCrow,
    faCalendarDays,
    faPhone,
    faFire,
    faBlog
} from '@fortawesome/free-solid-svg-icons';


library.add(
    faCrow,
    faCalendarDays,
    faPhone,
    faFire,
    faBlog
);


const Div = styled.div`
width: 70px;
    background-image: linear-gradient(to bottom right, rgb(123, 75, 148), rgb(245, 240, 246));
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 2px;
    
`;

export default class Navigation extends Component {
    constructor(props){
        super(props);
        this.state = {
            //price: this.props.price
        }
        //this.handleLogin = this.handleLogin.bind(this);
    }

  
    render() {
    return (
      <Div>

            <FontAwesomeIcon className="navIcon" icon="fa-solid fa-crow" size="3x" />
            <FontAwesomeIcon className="navIcon" icon="fa-solid fa-calendar-day" size="3x" />
            <FontAwesomeIcon className="navIcon" icon="fa-solid fa-phone" size="3x" />
            <FontAwesomeIcon className="navIcon" icon="fa-solid fa-fire" size="3x" />
            <FontAwesomeIcon className="navIcon" icon="fa-solid fa-blog" size="3x" />
      </Div>
    )
  }
}
