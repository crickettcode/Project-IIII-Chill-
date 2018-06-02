import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import styled from 'styled-components'
import Navbar from './Navbar'
import NewUser from './NewUser'


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
                {this.state.users.map((user, i) => {
                    return (
                        <div key={i}>
                            <Link to={`/users/${user.id}`} >{user.username}</Link>
                        </div>
                    )
                })}
            </div>


        )



    }
}












export default LandingPage;