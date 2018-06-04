import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import styled from 'styled-components'



class JournalEntries extends Component {

    state = {
        JournalEntries: []
    }

    componentDidMount() {
        this.getJournalEntries()
    }

    getJournalEntries = async () => {
        const response = await axios.get(`/api/users/${this.props.match.params.user_id}/journal_entries`)
        this.setState({
            JournalEntries: response.data
        })
        console.log(this.state)
    }


    render() {
        return (

            <Journal>
                <Footer>Today was...</Footer>
                <br />
                <div>
                    {this.state.JournalEntries.map((entry, i) => {
                        return (
                            <div key={i}>{entry.paragraph_entry}</div>
                        )
                    })}
                </div>

            </Journal>


        )
    }
}

export default JournalEntries;

const Journal = styled.div`
font-family:'Courier New', Courier, monospace;
background:#FFB387;
color:whitesmoke;
display:flex;
flex-grow:1;
justify-content:space-around;
flex-direction:column;
border:solid;
padding:50px;
border-color:whitesmoke;
margin:0, auto;
`
const Footer = styled.div`
display:flex;
flex-direction:column;
padding:60px;
background:#62DACA;
border:solid;
border-color:whitesmoke;
justify-content:space-between;
margin:0,auto;
`