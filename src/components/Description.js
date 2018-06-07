import React, {Component} from 'react';

class Description extends Component {

checkGrease = () => {
  if (this.props.hog.hog.greased){
    return 'Yes Very Greasy!'
  }else{
    return 'Not Greasy at All'
  }
}
render = () => {
  if (this.props.active){
    return (
      <div>
        <p>Skill: {this.props.hog.hog.specialty}</p> <p>Greased?: {this.checkGrease()}</p>
        <p>Weight ratio: {this.props.hog.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p>
        <p>Medal Status: {this.props.hog.hog['highest medal achieved']}</p>
      </div>

      )
  }else{
    return <div>Click for Info!</div>
  }

}



}

export default Description;
