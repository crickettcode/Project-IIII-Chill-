import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'



class UpDateUserForm extends Component {
    state = {
        updatedUser: {
            username: '',
            email: '',
            date_of_birth: '',
            gender: '',
            height: '',
            weight: '',
        }
    }
    updateUser = async (event) => {
        event.preventDefault()
        const payload = { ...this.state.updatedUser }
        console.log(payload)
        await axios.patch(`/api/users/${this.props.userId}`, payload)
    }

    handleChange = (event) => {
        const updatedUser = { ...this.state.updatedUser }
        updatedUser[event.target.name] = event.target.value
        this.setState({ updatedUser })
        console.log(event.target.value)
    }


    render() {
        return (
            <div>

                <form onSubmit={this.updateUser}>
                    <div>
                        <label htmlFor="username">Username:</label>
                        <input onChange={this.handleChange} type="text" name="username" />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input onChange={this.handleChange} type="text" name="email" value={this.state.updatedUser.email} />
                    </div>
                    <div>
                        <label htmlFor="date_of_birth">Date_of_Birth:</label>
                        <input onChange={this.handleChange} type="text" name="date_of_birth" value={this.state.updatedUser.date_of_birth} />
                    </div>
                    <div>
                        <label htmlFor="gender">Gender:</label>
                        <input onChange={this.handleChange} type="text" name="gender" value={this.state.updatedUser.gender} />
                    </div>
                    <div>
                        <label htmlFor="height">Height:</label>
                        <input onChange={this.handleChange} type="text" name="height" value={this.state.updatedUser.height} />
                    </div>
                    <div>
                        <label htmlFor="weight">Weight:</label>
                        <input onChange={this.handleChange} type="text" name="weight" value={this.state.updatedUser.weight} />

                    </div>
                    <button>Update</button>

                </form>
            </div>



        )
    }
}

export default UpDateUserForm; 
