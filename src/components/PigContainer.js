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
      originalHogs: hogs,
      hogs: hogs,
      sort: "all"
    };
  }

  generateHogCards = () => {
    if(this.state.sort === "all"){
      return this.state.hogs.map((name, idx) => (
        <HogCard key={idx} id={UUID()} name={name} img={name.name} />
      ))
    }else if (this.state.sort === "name"){
        return this.sortByName().map((name, idx) => (
          <HogCard key={idx} id={UUID()} name={name} img={name.name} />
        ))
    }else if (this.state.sort === "weight"){
      return this.sortByWeight().map((name, idx) => (
        <HogCard key={idx} id={UUID()} name={name} img={name.name} />
      ))
    }

    return this.state.hogs.map((name, idx) => (
      <HogCard key={idx} id={UUID()} name={name} img={name.name} />
    ))
  }

  sortByName = () => {
    const copiedHogs = [...this.state.hogs]
    const sortedHogs = copiedHogs.sort(function(a, b) {
      var nameA = a.name.toUpperCase();
      var nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      else if (nameA > nameB) {
        return 1;
      }else{
        return 0;
      }
    })
    return sortedHogs
  }

  sortingCriteria = (e) => {
    if (e.target.value === "name"){
      this.setState({
        sort: "name"
      })
    }else if (e.target.value === "weight"){
      this.setState({
        sort: "weight"
      })
    }else if (e.target.value === "all"){
      this.setState({
        sort: "all"
      })
    }
  }

  sortByWeight = () => {
    const copiedHogs = [...this.state.hogs]
    const sortedHogs = copiedHogs.sort(function(a, b) {
      return a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] - b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
    })
    return sortedHogs;
  }

  greasedOrNot = (event) => {
    const greased = event.target.checked;
    if (greased){
      const copiedHogs = [...this.state.hogs]
      const greasedHogs = copiedHogs.filter(hog => hog['greased'] === true)
      this.setState({
        hogs: greasedHogs
      });
    }else{
      this.setState({
        hogs: this.state.originalHogs
      });
    }
  }

  render() {
    const sheeple = this.generateHogCards()
    return (
      <div className="App">
        <Nav />
        <SortFilterFunctions
          sortingCriteria={this.sortingCriteria}
          greasy={this.greasedOrNot}  />
        <div className="ui link cards">
          {sheeple}
        </div>
      </div>
    )
  }

};

export default PigContainer;
