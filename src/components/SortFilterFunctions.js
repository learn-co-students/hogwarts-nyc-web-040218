import React, { Component } from 'react';

class SortFilterFunctions extends Component {

  render(){
    return(
      <div>
        <input name="name" onClick={this.props.sortName} />
        <input name="weight" onClick={this.props.sortWeight} />
        <input name="grease" type="checkbox" onClick={this.props.greasy} />
      </div>
    )
  }
}

export default SortFilterFunctions
