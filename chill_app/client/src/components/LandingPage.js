import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import styled from 'styled-components'
import Navbar from './Navbar'
import NewUser from './NewUser'
import Xkcd from './Xkcd'
import { Container, Header } from 'semantic-ui-react'



class LandingPage extends Component {

    state = {
        users: []


    }

    componentDidMount() {
        this.getAllUsers();
    }

    getAllUsers = async () => {
        try {
            const response = await axios.get('/api/users');
            await this.setState({ users: response.data })
            console.log(response)
        }

        catch (err) {
            await this.setState({ err: err.message })
            return err.message
        }

    };


    render() {


        return (

            <div>
                <User>
                    {this.state.users.map((user, i) => {
                        return (
                            <div key={i}>
                                <h2>
                                    <Link to={`/users/${user.id}`} >{user.username}</Link>
                                </h2>
                            </div>
                        )
                    })}
                    <NewUser />
                    <Xkcd />
                </User>
            </div>


        )



    }
}













export default LandingPage;

const User = styled.div`
background:#FFAD88;
padding:20px;

a {
    color:white;
    font-size:20px;
    font-family:monospace;
    display:flex;
    flex-direction:column;
}

h2 {
    font-size:20px;
}

@media (max-width: 400px) {
  main {
    flex-direction: column;
  }
}
`

