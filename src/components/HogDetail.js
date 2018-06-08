import React from 'react'
//import PropTypes from 'prop-types'

class HogDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  checkForVisibility = () => {
    if(this.props.isVisible) {
      return (
        [
          <p>Speciality: {this.props.hogInfo.specialty}</p>,
          <p>Weight: {this.props.hogInfo['highest medal achieved']}</p>,
          <p>Ratio: {this.props.hogInfo['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']} Cu. Ft.</p>,
          <p>Greased: {this.props.hogInfo.greased ? "Yes" : "No"}</p>
        ]
      );
    } else {
      null;
    }
  }

  render() {
    return (
    <div>
      {this.checkForVisibility()}
    </div>);
  }
}

export default HogDetail;
