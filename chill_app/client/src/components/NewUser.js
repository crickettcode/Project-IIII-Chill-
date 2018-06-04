import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'


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
            <Form>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <Input>
                            <div>
                                <label htmlFor="username">Username:</label>
                                <input onChange={this.handleChange} type="text" name="username" />
                            </div>
                            <div>
                                <label htmlFor="email">Email:</label>
                                <input onChange={this.handleChange} type="text" name="email" />
                            </div>
                            <div>
                                <label htmlFor="date_of_birth">Date_of_Birth:</label>
                                <input onChange={this.handleChange} type="text" name="date_of_birth" />
                            </div>
                            <div>
                                <label htmlFor="gender">Gender:</label>
                                <input onChange={this.handleChange} type="text" name="gender" />
                            </div>
                            <div>
                                <label htmlFor="height">Height:</label>
                                <input onChange={this.handleChange} type="text" name="height" />
                            </div>
                            <div>
                                <label htmlFor="weight">Weight:</label>
                                <input onChange={this.handleChange} type="text" name="weight" />

                            </div>
                        </Input>

                        <button>Create</button>

                    </form>
                </div>

            </Form>
        )

    }

}

export default NewUser;

const Form = styled.div`
background:#8FFDFF;
padding:20px;
font-family:monospace;

a {
    color:whitesmoke;
}

button {
    color:#EB3F6A;
    border:solid;
    padding:10px;
    font-size:11px;
    border-radius:10px;
    margin:0, auto;
    border-color:white;
}
`

const Input = styled.div`
border:solid;
padding:10px;
border-color:#FFCD8F;
margin:0, auto;

@media (max-width: 400px){
  main {
    flex-direction: column;
  }
}

`