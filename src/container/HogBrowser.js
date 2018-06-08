import React from 'react'
//import PropTypes from 'prop-types'
import Hog from "../components/Hog.js";
import UUID from "uuid";

class HogBrowser extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (<div className="ui grid container">
      {
        this.props.hogs.map((hogObj) => {
          return <Hog key={UUID()} hog={hogObj}/>;
        })
      }
    </div>);
  }
}

export default HogBrowser;
