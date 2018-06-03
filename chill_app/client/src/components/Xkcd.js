import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

class Xkcd extends Component {

    state = {
        xkcd: {}
    }


    getXkcd = async () => {
        const random = Math.floor((Math.random() * 2000) + 1);
        const xkcd = await axios.get(`http://xkcd.com/${random}/info.0.json`)
        this.setState({
            xkcd: xkcd.data

        })

    }

    render() {

        return (
            <div>
                <button onClick={this.getXkcd}>Comic</button>
                <h1>Make me Laugh</h1>
                {this.state.xkcd.alt}
                {this.state.xkcd.day}
                <img src={this.state.xkcd.img} />
                {this.state.xkcd.link}
                {this.state.xkcd.month}
                {this.state.xkcd.news}
                {this.state.xkcd.number}
                {this.state.xkcd.safe_title}
                {this.state.xkcd.title}
                {this.state.xkcd.transcript}
                {this.state.xkcd.year}
            </div>
        )
    }
}


export default Xkcd;