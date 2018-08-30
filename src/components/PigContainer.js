import React, { Component } from "react";
import Nav from './Nav';
import hogs from '../porkers_data';
import HogCard from './HogCard.js';
import SortFilterFunctions from './SortFilterFunctions.js';
import UUID from 'uuid';

class PigContainer extends Component{
  constructor() {
    super();

    this.state = {
      hogs: hogs
    };
  }

  generateSheeple = () => {
    return this.state.hogs.map((name, idx) => (
      <HogCard key={idx} id={UUID()} name={name} img={name.name} />
    ))
  }

  sortNameSheeple = (event) => {
    const copiedHogs = [...this.state.hogs]
    const sortedHogs = copiedHogs.sort(function(a, b) {
      var nameA = a.name.toUpperCase();
      var nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
    })
    this.setState({
      hogs: sortedHogs
    })
  }

  sortWeightSheeple = (event) => {
    const copiedHogs = [...this.state.hogs]
    const sortedHogs = copiedHogs.sort(function(a, b) {
      return a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] - b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
    })

    this.setState({
      hogs: sortedHogs
    })
  }

  greasedOrNot = (event) => {
    const copiedHogs = [...this.state.hogs]
    const greasedHogs = copiedHogs.filter( hog => hog['greased'] === true )
    this.setState({
      hogs: greasedHogs
    })
  }

  render() {
    console.log("DEAR GOD RENDER:", this.state)
    const sheeple = this.generateSheeple()
    return (
      <div className="App">
        <Nav />
        <SortFilterFunctions
          sortWeight={this.sortWeightSheeple}
          sortName={this.sortNameSheeple}
          greasy={this.greasedOrNot}  />
      <div className="ui link cards">
          {sheeple}
        </div>
      </div>
    )
  }

};

export default PigContainer;
