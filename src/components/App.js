import React, {Component} from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogBrowser from "../container/HogBrowser.js";
import SelectHogs from "./SelectHogs.js";
import FilterHogs from "./FilterHogs.js"
// const normalHogs = [...hogs];
const weight = "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water";;

class App extends Component {

  constructor() {
    super();

    this.state = {
      hogs: hogs,
      selection: "Normal",
      original: [...hogs]
    };
  }

  getOption = option => {
    if (option === "Weight") {
      this.sortByWeight(weight);
    } else if (option === "Name") {
      this.sortByName(option.toLowerCase());
    } else if (option === "Normal") {
      //debugger
      // debugger
      // this.setState({
      //     Object.assign({}, this.state, {hogs:hogs})
      // })
      this.setState({
        hogs: this.state.original,
        selection: option,
        original: [...this.state.original]
      }, () => console.log(this.state));
    }
  }

  sortByName = (option) => {
    let hogsSorted = this.state.hogs.sort((a, b) => {
      return a[option].localeCompare(b[option])
    });

    this.setState({
      hogs: hogsSorted,
      selection: option
    }, () => console.log(this.state));
  };

  sortByWeight = option => {
    let hogsSorted = this.state.hogs.sort((a, b) => {
      return a[option] - b[option];
    });

    this.setState({
      hogs: hogsSorted,
      selection: option
    }, () => console.log(this.state));
  };

  isGreased = (filterOption) => {
    if (filterOption === "greased") {
      //we want to get hogs whose greased attribute is true
      let filteredHogs = this.state.original.filter(obj => {
        return obj.greased;
      });

      this.setState({hogs: filteredHogs});
    } else if (filterOption === "nongreased") {
      //we want to get hogs whose greased attribute is false
      let filteredHogs = this.state.original.filter(obj => {
        return obj.greased === false;
      });
      //debugger
      this.setState({hogs: filteredHogs});
    } else if (filterOption === "all") {
      //we want to get all hogs(change the state back to the original hog import)
      this.setState({hogs: hogs});

    }

  }

  render() {
    return (<div className="App">
      <Nav/>
      <SelectHogs option={this.getOption.bind(this)}/>
      <FilterHogs greased={this.isGreased}/>
      <HogBrowser hogs={this.state.hogs}/>
    </div>);
  }
}

export default App;
