import React, { Component } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import { Container, Header } from 'semantic-ui-react'
import { Grid, Segment, Divider } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'

class Navbar extends Component {
    render() {
        return (
            <NavBar>
                <Container class="ui text container" textAlign="center">
                    <h1>Chill</h1>


                    <Header>
                        <div class="ui large buttons">
                            <button class="ui button"><Link to="/users">ProfilePage</Link></button>
                            <div class="or"></div>
                            <button class="ui button"><Link to="/">Home</Link></button>
                        </div>

                    </Header>
                </Container>
            </NavBar>

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
border-radius:50px;
border:solid;
margin:0,auto;
padding:10px;


 Header {
color: white;
size: 20px;
font-family: monospace;
display: flex;
flex - direction: column - reverse;
border: solid;
border - color: #FFCD8F;
margin: auto;
border - width: 5px;
}

}


`


/* // h1 {
//     color:#8FFDFF;
//     font-variant:20px;
//     font-weight:150;
//     font-size:50px;
//   box-shadow:#AAFFDE;
//   font-style:bold;
//   background:white;
//   border:solid;
//   border-radius:20px;
//   padding:30px;


// }
// `


// // const Header = styled.div`
// display:flex;
// flex-direction:column;
// align-content:space-around;
// justify-content:center;
// padding:20px;
// border-width:20px;
// width:50px;
// border-radius:40px;
// justify-content:center;





// const Top = styled.div`
// background: #AAFFDE;
// padding: 70px;
// display: flex;
// flex - direction: column;


// @media(max - width: 400px) {
//     main {
//         flex - direction: column;
//     }
// }
// ` */