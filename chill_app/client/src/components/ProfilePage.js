import React, { Component } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import axios from 'axios'
import UpDateUserForm from './UpDateUserForm'
import JournalEntries from './JournalEntries'
import CheckIns from './CheckIns'
import { Button } from 'semantic-ui-react'


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
        this.setState({
            user: response.data
        })
    }


    removeUser = () => {
        const userId = this.props.match.params.id
        console.log(userId)
        axios.delete(`/api/users/${userId}`)
            .then((res) => {
                console.log(res)
                this.props.history.push("/")
            })


    }

    render() {
        return (
            <Profile>
                <div>
                    <h1></h1>
                    <User>
                        {this.state.user.username}
                        <br />
                        {this.state.user.email}
                        <br />
                        {this.state.user.date_of_birth}
                        <br />
                        {this.state.user.gender}
                    </User>
                </div>
                <Action>
                    <Button
                        class="ui button" role="button" basic color='orange'
                        onClick={this.removeUser}>delete
                    </Button>
                    <UpDateUserForm userId={this.state.user.id} />
                </Action>
                <br />
                <h3>
                    <Link to={`/users/${this.props.match.params.id}/journal_entries`}>JournalEntries </Link>
                    <br />
                    <Link to={`/users/${this.props.match.params.id}/check_ins`}>CheckIns</Link>
                </h3>
            </Profile >
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
flex-direction:column;
padding:20px;
font-size:15px;
font-weight:25px;
`
const Action = styled.div`
 padding:20px;
 
 h3 {
     display:flex;
     flex-direction:row;
     justify-content:space-between;
     font-size:18px;
     margin:20px;
 }
 
 `

