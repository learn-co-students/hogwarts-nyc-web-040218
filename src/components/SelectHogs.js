import React, {Component} from 'react'
 //import PropTypes from 'prop-types'

 class SelectHogs extends Component{
     constructor(props){
         super(props);
         // this.state={
         //     selection : "Normal",
         // }
     }

handleChange = (event) => {
    // this.setState({
    //     selection : event.target.value
    // },() => this.props.option(this.state.selection))
    this.props.option(event.target.value)
}



 render() {
         return (
         <div className="spacing">
             <select name="" onChange={this.handleChange} id="">
                 <option>Normal</option>
                 <option>Name</option>
                 <option>Weight</option>
             </select>
         </div>
        );
     }
}

 export default SelectHogs;
