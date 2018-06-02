import React, { Component } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import axios from 'axios'
import NewUser from './NewUser'

class ProfilePage extends Component {

    state = {
        user: {}
    }

    componentDidMount() {
        this.getUser()
    }

    getUser = async () => {
        const userid = this.props.match.params.id
        const response = await axios.get(`/api/users/${userid}`)
        console.log(response.data)
        this.setState({
            user: response.data

        })
        console.log(this.state)
    }

    render() {
        return (
            <Profile>
                <div>
                    <h1>ProfilePage</h1>
                    <User>
                        {this.state.user.username}

                        {this.state.user.email}

                        {this.state.user.date_of_birth}

                        {this.state.user.gender}
                    </User>
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
const User = styled.div`
background:#FFCD8F;
display:flex;
justify-content:space-between;
flex-direction:column-reverse;
padding:20px;

`