import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { Button, Input, Label, Form } from 'semantic-ui-react'


class NewUser extends Component {
    state = {
        newUser: {
            username: '',
            email: '',
            date_of_birth: '',
            gender: '',
            height: '',
            weight: '',

        }
    }

    handleChange = (event) => {
        const newUser = { ...this.state.newUser }
        newUser[event.target.name] = event.target.value
        this.setState({ newUser })
        console.log(event.target.value)
    }


    handleSubmit = async (event) => {
        event.preventDefault()
        const userdata = {
            username: this.state.newUser.username,
            email: this.state.newUser.email,
            date_of_birth: this.state.newUser.date_of_birth,
            gender: this.state.newUser.gender,
            height: this.state.newUser.height,
            weight: this.state.newUser.weight,
        }

        const newuser = await axios.post(`/api/users`, userdata)


        console.log(userdata)
    }

    render() {
        return (
            <TopForm>
                <div>
                    <Form onSubmit={this.handleSubmit}>
                        <TopInput>
                            <div class="ui pink circular label">
                                <Label htmlFor="username">Username:</Label>
                                <Input onChange={this.handleChange} type="text" name="username" />
                            </div>
                            <br />
                            <div class="ui violet circular label">
                                <Label htmlFor="email">Email:</Label>
                                <Input onChange={this.handleChange} type="text" name="email" />
                            </div>
                            <br />
                            <div class="ui teal circular label">
                                <Label htmlFor="date_of_birth">Date_of_Birth:</Label>
                                <Input onChange={this.handleChange} type="text" name="date_of_birth" />
                            </div>
                            <br />
                            <div class="ui pink circular label">
                                <Label htmlFor="gender">Gender:</Label>
                                <Input onChange={this.handleChange} type="text" name="gender" />
                            </div>
                            <br />
                            <div class="ui teal circular label">
                                <Label htmlFor="height">Height:</Label>
                                <Input onChange={this.handleChange} type="text" name="height" />
                            </div>
                            <br />
                            <div class="ui pink circular label">
                                <Label htmlFor="weight">Weight:</Label>
                                <Input onChange={this.handleChange} type="text" name="weight" />
                            </div>
                            <br />
                        </TopInput>
                        <button class="ui violet inverted button" role="button" basic color='orange' content='Orange'>Create</button>
                    </Form>
                </div>

            </TopForm >
        )

    }

}

export default NewUser;

const TopForm = styled.div`
background:#8FFDFF;
padding:40px;
font-family:monospace;

a {
    color: whitesmoke;
}

button {
    padding: 20px;
    justify - content: center;
}

`

const TopInput = styled.div`
display:flex;
justify-content:center;
padding:20px;
margin:0, auto;
font-size:15px;
color:violet;


@media(max-width: 400px) {
    main {
        flex - direction: column;
    }
}

`