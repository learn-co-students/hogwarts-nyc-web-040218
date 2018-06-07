import React, {Component} from 'react'

class Filter extends Component{
  constructor(props) {
    super(props)

    this.state = {
      name:"",
      weight:"",
      greased: false}
  }

  handelChange = (e) =>{
    const {name} = e.target
    this.setState({
      [name]:e.target.value
    })
    this.props.handleTextPassingState([name], e.target.value)
  }

  handelChangeBool = (e) =>{
    this.setState({
      greased: !this.state.greased
    })
  }


  render(){
    return(
      <div>
        <label id=''>Name: </label>
        <input type="text" name='name' onChange={this.handelChange} value={this.state.name}/>
        <label id=''>Weight: </label>
        <input type="text" name='weight' onChange={this.handelChange} value={this.state.weight}/>
        <label id=''>Greased? </label>
        <input type="checkbox" name='greased?' onChange={() =>{this.handelChangeBool
        this.props.handlePassingState('greased')}} value={this.state.greased}/>
      </div>
    )
  }
}

export default Filter
