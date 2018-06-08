import React, {Component} from 'react'
//import PropTypes from 'prop-types'

class FilterHogs extends Component {
  constructor(props) {
    super(props);
    // this.state={
    //     selection : "Normal",
    // }
  }

  handleChange = (event) => {
    this.props.greased(event.target.value);
  }

  render() {
    return (<div className="spacing">
      <form onChange={this.handleChange}>
        <label ><input name="radioBtnGroup" type="radio" value="all"/>
          All</label><br/>
        <label ><input name="radioBtnGroup" type="radio" value="greased"/>
          Greased</label><br/>
        <label ><input name="radioBtnGroup" type="radio" value="nongreased"/>
          NonGreased</label><br/>
      </form>
    </div>);
  }
}

export default FilterHogs;
