import React, { Component } from 'react';

class SortFilterFunctions extends Component {

  render(){
    return(
      <div>
        <button onClick={this.props.sortName} >Sort Name</button>
        <button name="weight" onClick={this.props.sortWeight}>Sort Weight</button>
        <input name="grease" type="checkbox" onClick={this.props.greasy} />
      </div>
    )
  }
}

export default SortFilterFunctions
