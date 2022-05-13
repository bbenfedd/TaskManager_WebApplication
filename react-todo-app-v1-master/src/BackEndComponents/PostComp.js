
import '../App.css';
import App from '../App';
import ReactDOM from 'react-dom';
import '../components/formInput.css'
import React, {Component} from 'react'
import axios from 'axios'
import 'w3-css/w3.css';
import '../components/formInput.css'

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
        console.log("hkjh");
        console.log(res);
        console.log(res.data);
      })
      ReactDOM.render(
        <React.StrictMode>
          <App />
        </React.StrictMode>,
        document.getElementById('root')
      );
    
  }

  render() {
    return (
      
    
        <form onSubmit={this.handleSubmit}>
        <h1 className="h1_form" style={{color:"#000"}}>Project</h1>
          <label ><b>Project Name</b></label>
            <input  className="formInput" 
                        type="text" name="name" value={this.state.name} onChange={this.handleChange.bind(this)} />
            <label ><b>Project Description</b></label>            
            
            <input className="formInput_desc" 
                        type="text" name="description" value={this.state.description} onChange={this.handleChange.bind(this)} />
          
          <button style={{width: "100%",marginTop: "8px"}} className="todo-button"  type="submit">Add</button>
          <button style={{width: "100%",marginTop: "8px"}} className="todo-button"  type="submit">Back</button>
        </form>
    

        
  
    )
  }
}