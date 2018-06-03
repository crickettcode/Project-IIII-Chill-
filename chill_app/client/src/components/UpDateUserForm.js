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
    componentDidMount() {
        console.log(this.props.userData)
        this.setState({ updatedUser: this.props.userData })
        console.log(this.state.updatedUser)
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
                    <button>Update</button>

                </form>
            </div>



        )
    }
}

export default UpDateUserForm; 
