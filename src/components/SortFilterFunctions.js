import React, { Component } from 'react';

class SortFilterFunctions extends Component {

  render(){
    return(
      <div className="sortingBox">
        <select onChange={this.props.sortingCriteria}>
          <option value="all">All</option>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select> &nbsp;&nbsp;&nbsp;
          Greased: &nbsp;
          <input name="grease" type="checkbox" onClick={this.props.greasy} />
      </div>
    )
  }
}

export default SortFilterFunctions
