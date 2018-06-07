import HogCard from './HogCard'
import {Card} from 'semantic-ui-react'
import React, {Component} from 'react'

class Container extends Component{
  constructor(props) {
    super(props);
    this.state = {
      style: "ui eight wide column"
    }
  }

  // passClass = (beef, word) => {
  //   console.log("HI, there are some meats");
  //   this.setState({
  //     style: 'hide'
  //   })


render = () => {

  return(
    <div className='push-now'>
      <div className='ui grid container'>{this.props.hogs.map(hog =>{ return <Card className={this.state.style}><HogCard passClass={this.passClass} hog={hog} /></Card>})}</div>
    </div>
  )
}

}

export default Container
