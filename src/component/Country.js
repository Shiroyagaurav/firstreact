import React, { Component } from 'react';

export default class Country extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: 'india',
            timezone: 'GTA+5:30'
        }


    }
    changecountry = () => {
      
        console.log("fgbnh");
        this.setState({
            name: 'usa',
            timezone: 'GTA+5:00'
        })


    }
    render() {
        return (
            <>
                <h1>city information</h1>
                <h2> city name is Country {this.state.name} </h2>
                <h3>this time is{this.state.timezone}</h3>
                <button onClick={this.changecountry}>change country </button>
            </>


        )
    }
}
