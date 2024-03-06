import React, { Component } from 'react';

class Timer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            time: new Date()
        }
    }
    tick = () => {
        this.setState({
            time: new Date()
        })
    }


    componentDidMount = () => {
        console.log("3.componentDidMount");
        setInterval(this.tick, 1000);
    }

    componentDidUpdate = (prevprops, prevstate) => {
        if (this.state.time !== prevstate.time) {
            console.log("4,component did mount");
        }
    }

    componentWillUnmount=()=>{
        clearInterval(this.timeref);
    }


    render() {
        return (
            <div>
                <h2>Timer</h2>
                <p>{this.state.time.toLocaleTimeString()}</p>
            </div>
        );
    }
}

export default Timer;
