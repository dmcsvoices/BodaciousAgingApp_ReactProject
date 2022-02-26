import React, { Component } from 'react';
import styled from 'styled-components';


const Div = styled.div`
    background-image: linear-gradient(to bottom right, rgb(123, 75, 148), rgb(245, 240, 246));
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
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
          <h2>Method</h2><h2>Log A Complaint</h2><h2>Contact Your Advisor</h2>
      </Div>
    )
  }
}
