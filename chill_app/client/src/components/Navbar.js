import React, { Component } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"

class Navbar extends Component {
    render() {
        return (
            <NavBar> <div>

                <h1>Chill</h1>
                <Header><Link to="/users">ProfilePage</Link>
                    <span />
                    <Link to="/">Home</Link> </Header>
            </div></NavBar>
        );
    }
}

export default Navbar;



const NavBar = styled.div`
background-color: #F9D6FF;
display:flex;
justify-content: space-around;
width: 100vw;
color:white;
font-size:38;

a {
    color: white;
    font-size:20px;

`



const Header = styled.div`
display:flex;
flex-direction:column;
align-content:space-around;
padding:30px;
`