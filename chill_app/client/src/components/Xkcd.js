import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

class Xkcd extends Component {

    state = {
        xkcd: {}
    }


    getXkcd = async () => {
        const random = Math.floor((Math.random() * 2000) + 1);
        const xkcd = await axios.get(`https://xkcd.com/${random}/info.0.json`)
        this.setState({
            xkcd: xkcd.data

        })

    }

    render() {

        return (
            <Comic>
                <div>
                    <button onClick={this.getXkcd}>Comic</button>
                    <h1>Its not that Serious</h1>

                    <br />
                    <img src={this.state.xkcd.img} />
                    {this.state.xkcd.link}
                    <br />
                    {this.state.xkcd.alt}

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
color:#490D66;

img {
   max-width:95%;
   max-height:100%;
    margin:0 auto;
    min-width:50px;
    display:flex;
    align-content:center;
   

}

h1 {
    flex-basis: 100px;
  background: #F4C9D0;
  color:whitesmoke;
  border-radius: 10px;
  margin: 5px;
  text-align: center;
  line-height: 100px;
  font-size:20px;

}

button {
    color:#EB3F6A;
    border:solid;
    border-color:#FFDAE4;
    font-size:11px;
    padding:10px;
    border-radius:10px;

    
}

@media (max-width: 400px){
  main {
    flex-direction: column;
  }
}

`