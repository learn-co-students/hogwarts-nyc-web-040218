import React, { Component } from 'react';

export default class HogCard extends Component {
  nameUrl = () => {
    return this.props.name.name.replace(/\s/g, '_').toLowerCase()
  }

  johnnyGreased = () => {
    return (<div className="johnny"> </div>)
  }

  descriptionToggle = (event) => {
    let div=document.getElementById(this.props.id)

    if (div.style.display === "none"){
      div.style.display = "block";
      div.style.visibility = "visible";
    }else if (div.style.display === "block"){
      div.style.display = "none";
      div.style.visibility = "hidden";
    }else{
      div.style.display = "block";
      div.style.visibility = "visible";
    }
  }

  render() {
    return(
      <div className="card" onClick={this.descriptionToggle} >
        <div className="image">
          <img src={require(`../hog-imgs/${this.nameUrl()}.jpg`)} alt={this.props.name.name} />
        </div>
        <div className="content">
          <div className="header">{this.props.name.name}
            <button className="expandInfo" value={this.props.id}>+</button>
          </div>
          <div className="description" id={this.props.id}>
            {/* JOHNNY BOY! */}
            {this.props.name.greased ? this.johnnyGreased() : null}
            specialty: {this.props.name.specialty} <br/>
            weight: {this.props.name['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']} <br/>
            highest medal achieved: {this.props.name["highest medal achieved"]} <br/>
          </div>
        </div>
      </div>
    )
  }
}
