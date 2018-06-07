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
      hogs: hogs,
      sort: null
    };
  }

  // generateHogCards = () => {
  //   if(this.state.sort === null){
  //     return this.state.hogs.map((name, idx) => (
  //       <HogCard key={idx} id={UUID()} name={name} img={name.name} />
  //     ))
  //   }else if (this.state.sort === "name"){
      
  //   }else if (this.state.sort === "weight"){
  //     const copiedHogs = [...this.state.hogs]
  //     const sortedHogs = copiedHogs.sort(function (a, b) {
  //       return a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] - b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
  //     })
  //     this.setState({
  //       hogs: sortedHogs
  //     })
  //   }
  // }

  sortByName = (event) => {
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
    // return sortedHogs;
    this.setState({
      hogs: sortedHogs
    })
  }

  sortByWeight = (event) => {
    const copiedHogs = [...this.state.hogs]
    const sortedHogs = copiedHogs.sort(function(a, b) {
      return a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] - b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
    })
    // return sortedHogs;
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
    // console.log("DEAR GOD RENDER:", this.state)
    const sheeple = this.generateHogCards()
    return (
      <div className="App">
        <Nav />
        <SortFilterFunctions
          sortWeight={this.sortByWeight}
          sortName={this.sortByName}
          greasy={this.greasedOrNot}  />
      <div className="ui link cards">
          {sheeple}
        </div>
      </div>
    )
  }

};

export default PigContainer;
