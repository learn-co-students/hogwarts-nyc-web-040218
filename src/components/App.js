import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import Container from './Container'
import Filter from './Filter.js'

class App extends Component {
  state = {
    greased: null,
    name: "",
    weight: ""
  }

  handlePassingState = (bool) => {
    this.setState({[bool]: !this.state.greased})
  }

  handleTextPassingState = (text, value) => {
    this.setState({
      [text]: value
    })
  }

  selectHogs = (hogs) =>{

    let nameHogs
    if (this.state.name){
      nameHogs = hogs.filter(hog => hog.name.toLowerCase().includes(this.state.name.toLowerCase()))
    }else{
      nameHogs = hogs
    }

    let weightHogs
    if (this.state.weight){
       weightHogs = hogs.filter(hog => hog["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"] >= (parseFloat(this.state.weight)))
     }else{
       weightHogs = hogs
     }

    let greasedHogs

    if (this.state.greased !== null){
      greasedHogs = hogs.filter(hog => hog.greased === this.state.greased)
    }else{
      greasedHogs = hogs
    }

    let selectedHogs = []

    for (const hog of nameHogs){
      if (weightHogs.includes(hog) && greasedHogs.includes(hog)){
        selectedHogs.push(hog)
      }
    }

    if (selectedHogs.length < 1){
      return hogs
    }else{
      return selectedHogs
    }
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Filter handleTextPassingState={this.handleTextPassingState} handlePassingState={this.handlePassingState}/>
        <Container hogs={this.selectHogs(hogs)}/>
      </div>
    )
  }
}

export default App;
