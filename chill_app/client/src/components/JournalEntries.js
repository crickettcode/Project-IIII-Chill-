import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'



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
            <div>
                {this.state.JournalEntries.map((entry, i) => {
                    return (
                        <div key={i}>{entry.paragraph_entry}</div>
                    )
                })}
            </div>
        )
    }
}

export default JournalEntries;