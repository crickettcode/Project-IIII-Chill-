import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import styled from 'styled-components'



class CheckIns extends Component {

    state = {
        CheckIns: []
    }

    componentDidMount() {
        this.getCheckIns()
    }

    getCheckIns = async () => {
        const response = await axios.get(`/api/users/${this.props.match.params.user_id}/check_ins`)
        this.setState({
            CheckIns: response.data
        })
        console.log(this.state)
    }

    render() {
        return (
            <Stats>
                <div>
                    {this.state.CheckIns.map((check_ins, i) => {
                        return (
                            <div key={i}>
                                "energy" {check_ins.energy}
                                <br />
                                "grateful"  {check_ins.grateful}
                                <br />
                                "hunger"  {check_ins.hunger}
                                <br />
                                "mental"  {check_ins.mental}
                                <br />
                                "mood" {check_ins.mood}
                                <br />
                                "motivated" {check_ins.motivated}
                                <br />
                                "physical"   {check_ins.physical}
                                <br />
                                "supported"   {check_ins.supported}
                                <br />
                                "time_of_day"  {check_ins.time_of_day}
                                <br />
                            </div>

                        )
                    })}
                </div>
            </Stats>
        )
    }
}


export default CheckIns;

const Stats = styled.div`
min-height:100vh;
margin:0 auto;
display:flex;
flex-direction:column;
justify-content:space-between;
padding:30px;
background:#FFB387;
font-family:monospace;
font-size:15px;


`