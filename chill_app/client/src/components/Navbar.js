import React, { Component } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"

class Navbar extends Component {
    render() {
        return (
            <Top>
                <NavBar> <div>

                    <h1>Chill</h1>
                    <Header><Link to="/users">ProfilePage</Link>
                        <span />
                        <Link to="/">Home</Link> </Header>

                </div></NavBar>
            </Top>
        );
    }
}

export default Navbar;



const NavBar = styled.div`
background-color: #F9D6FF;
display:flex;
justify-content: space-evenly;
align-content:center;
flex-direction:column;
width: 80%;
height:100%;
color:white;
font-size:38;
font-weight:bold;
font-size:20px;
border-radius:10px;
border:solid;
margin:0,auto;



/* p.oblique {
    font-style: oblique;
} */


a {
    color: white;
    font-size:20px;
    font-family:monospace;
    display:flex;
    flex-direction:row;
    border:solid;
    border-color:#FFCD8F;
}


h1 {
    color:#8FFDFF;
    font-variant:20px;
    font-weight:150;
    font-size:50px;
  box-shadow:#AAFFDE;
  font-style:bold;
  background:white;
  border:solid;
  border-radius:10px;

}
`


const Header = styled.div`
display:flex;
flex-direction:column;
align-content:space-around;
padding:30px;
border-width:20px;



`

const Top = styled.div`
background:#AAFFDE;
padding:70px;
display:flex;
flex-direction:column;
`