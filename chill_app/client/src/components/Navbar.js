import React, { Component } from 'react'
import styled from 'styled-components'


class Navbar extends Component {
    render() {
        return (
            <NavBar> <div>
                <h1>Chill</h1>
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
`