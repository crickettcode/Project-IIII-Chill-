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
            <Comic>
                <div>
                    <button onClick={this.getXkcd}>Comic</button>
                    <h1>Make me Laugh</h1>
                    {this.state.xkcd.alt}
                    <img src={this.state.xkcd.img} />
                    {this.state.xkcd.link}
                </div>
            </Comic>
        )
    }
}


export default Xkcd;

const Comic = styled.div`
`