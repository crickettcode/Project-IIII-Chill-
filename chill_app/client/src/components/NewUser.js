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
            <div>
                <form onSubmit={this.handleSubmit}>
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
                    <button>Create</button>

                </form>
            </div>


        )

    }

}

export default NewUser;