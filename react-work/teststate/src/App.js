import { Component } from "react";
export default class App extends Component{
  constructor(){
     super();
     this.state = {
      counter: 100,
      evenCounter: 1002,
      oddCounter: 1001,
      points: 0
     }; 
  }
  incrementCounter = ()=>{
    this.setState({counter: this.state.counter+1});
  }
  incrementEvenCounter = ()=>{
    this.setState({evenCounter: this.state.evenCounter + 2, counter: this.state.counter+1});
  }
  incrementOddCounter  = ()=>{
    this.setState({oddCounter: this.state.oddCounter + 2, counter:this.state.counter+1});
  }
  render(){
    return <>
       <h1>App Component....</h1>
       <button onClick={this.incrementCounter}>Counter : {this.state.counter}</button>
       <button onClick={this.incrementEvenCounter}>Even Counter : {this.state.evenCounter}</button>
       <button onClick={this.incrementOddCounter}>Odd Counter : {this.state.oddCounter}</button>
       <button onClick={()=>this.setState({points: this.state.points+6})}>Point : {this.state.points}</button>
    </>
  }
}