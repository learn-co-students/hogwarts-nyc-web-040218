import React, {Component} from 'react';
import Description from './Description'


class HogCard extends Component{
  constructor(props){
    super(props)

    this.state = {active:false,
    style: ""}
  }
  handelPress = (e) =>{
    e.preventDefault()
    this.setState({
      style: 'no-style'
    })
  }

  handleClick = (e) =>{
    this.setState({
      active: !this.state.active
    })
  }



  render = () =>{
    const renameForImg = this.props.hog.name.toLowerCase().replace(/ /g,"_")

    return(
      <div className={this.state.style} onClick={this.handleClick}>
        <h3>{this.props.hog.name}</h3>
        <img src={require (`../hog-imgs/${renameForImg}`+'.jpg')}></img>
        <Description hog={this.props} active={this.state.active}/>
        <button onClick={this.handelPress}>Hide</button>
      </div>
    )
  }
}

export default HogCard
