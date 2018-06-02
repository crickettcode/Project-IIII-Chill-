import React, { Component } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import axios from 'axios'

class ProfilePage extends Component {

    state = {
        users: []
    }

    componentDidMount() {
        this.getAllUsers();
    }

    getAllUsers = async () => {
        try {
            const response = await axios.get('/api/users')
            await this.setState({ users: response.data })
            return response.data
        }

        catch (err) {
            await this.setState({ err: err.message })
            return err.message
        }
    }



    render() {

        const userData = this.state.users.map(user => {
            console.log("Show Users", this.state.users.length)
            return <div key={user.id}>

                <Link to={`/users/${user.id}`}>{user.name}</Link>
            </div>
            if (this.state.err) {
                return <div>{this.state.err}</div>
            }

        })


        return (
            <Profile>
                <div>
                    <h1>ProfilePage</h1>
                    {userData}
                </div>
            </Profile>
        );
    }
}

export default ProfilePage;

const Profile = styled.div`
background: #8FFDFF;
font-family:'Courier New', Courier, monospace;
`