import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Button } from 'semantic-ui-react'

class Xkcd extends Component {

    state = {
        xkcd: {}
    }


    getXkcd = async () => {
        const random = Math.floor((Math.random() * 2000) + 1);
        const xkcd = await axios.get(`https://xkcd.now.sh/${random}`)
        this.setState({
            xkcd: xkcd.data

        })

    }

    render() {

        return (
            <Comic>
                <div>
                    <button class="ui pink inverted button" onClick={this.getXkcd}>Comic</button>
                    <h1>Its not that Serious...</h1>

                    <br />
                    <img src={this.state.xkcd.img} />
                    {this.state.xkcd.link}
                    <br />
                    <h2>{this.state.xkcd.alt}</h2>

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
  font-size:30px;

    
}

h2 {
    display:flex;
    flex-wrap:row;
    justify-content:center;
    font-family:monospace;
    size:15px;


}


@media(max - width: 400px) {
    main {
        flex - direction: column;
    }
}

`