import React, { Component } from 'react';

 export default class City extends Component {


    constructor(props){
        super(props)

       this.state={
        name :"ghandhinagar",
        population:"20000",
        bestfood:"khaman"
       }
      

    }
    changecity =()=>{
        console.log("cvtfgbyhu");
      
        this.setState({
          name :"surat",
          population:"30000",
          bestfood:"jalebifafda"
        })
      
          }

    render() {
        return (
            <> <h1> City</h1>
            <h2>city name {this.state.name}</h2>
            <h3>city population {this.state.population}</h3>
            <h4>city eduction { this.state.bestfood}</h4>
            <button onClick={this.changecity}>change city </button>

            {
              this .props.cn==='india' ?<h3>delhi</h3> :<h4>newyork</h4>
            }
          </>
           
        );
    }
}

