import React, { Component } from 'react';

class SortFilterFunctions extends Component {

  render(){
    return(
      <div>
        <label>
          Sort By:&nbsp;
          <select>
            <option value="name" name="name" onClick={this.props.sortName}>Name</option>
            <option value="weight" name="weight" onClick={this.props.sortWeight}>Weight</option>
          </select>&nbsp;&nbsp;&nbsp;
          Greased <input
            name="grease"
            type="checkbox"
            onClick={this.props.greasy}
            />
        </label>
      </div>
    )
  }
}

export default SortFilterFunctions
