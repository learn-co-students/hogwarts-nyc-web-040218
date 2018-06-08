import React from 'react'
//import PropTypes from 'prop-types'
import HogDetail from "./HogDetail.js"

class Hog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isClicked: false
    };
  }

  handleDetails = (event) => {
    if(!this.state.isClicked) {
      this.setState({
        isClicked: true
      });
    } else {
      this.setState({
        isClicked: false
      });
    }
  }

  render() {
    const imgSource = this.props.hog.name.replace(/ /g,"_").toLowerCase();
    //debugger
    return (
      <div className="ui eight wide column">
        <h2>{this.props.hog.name}</h2>
        <img src={require(`../hog-imgs/${imgSource}.jpg`)} alt="image"/>
        <button onClick={this.handleDetails.bind(this)}>Details</button>
        <HogDetail hogInfo={this.props.hog} isVisible={this.state.isClicked}/>
      </div>
    );
  }
}

export default Hog;
