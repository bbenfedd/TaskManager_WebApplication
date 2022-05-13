
import './App.css';
import React, {Component} from 'react'
import axios from 'axios'
import 'w3-css/w3.css';

export default class PostComp extends Component {
    
  state = {
    name: '',
    description: '',
  }

  handleChange = event => {
      let project = this.state;
      project[event.target.name] = event.target.value;
    this.setState({ project });
  }

  handleSubmit = event => {
    event.preventDefault();

    

    axios.post('http://localhost:8080/api/projects', { name:this.state.name,description:this.state.description})
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      
      <div>
        <form className="w3-container w3-third" onSubmit={this.handleSubmit}>
          
          <label className="w3-text-teal"><b>Project Name</b></label>
            <input  className="w3-input w3-border w3-light-grey" 
                        type="text" name="name" value={this.state.name} onChange={this.handleChange.bind(this)} />
            <label className="w3-text-teal"><b>Project Description</b></label>            
            
            <input className="w3-input w3-border w3-light-grey" 
                        type="text" name="description" value={this.state.description} onChange={this.handleChange.bind(this)} />
          
          <button className="w3-btn w3-blue-grey" style={{marginTop:"8px"}} type="submit">Add</button>
        </form>
      </div>

        
  
    )
  }
}