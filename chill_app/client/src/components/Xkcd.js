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
                    <h1></h1>
                    {this.state.xkcd.alt}
                    <br />
                    <img src={this.state.xkcd.img} />
                    {this.state.xkcd.link}
                </div>
            </Comic>
        )
    }
}


export default Xkcd;

const Comic = styled.div`
display:flex;
flex-direction:column;
justify-content:space-around;
background:#FFFFBA;
border-radius:10px;
border:solid;
border-color:#50D9E8;
padding:20px;
margin:20px;

img {
    width:95%;
    height:100%;
    margin:0 auto;
}

`