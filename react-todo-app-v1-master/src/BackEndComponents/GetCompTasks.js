
import '../App.css';
import React, {Component} from 'react'
import axios from 'axios'
import 'w3-css/w3.css';

export default class GetComp extends Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get('http://localhost:8080/api/tasks')
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      
         this.state.persons.map(person => 
        
        <div className=" w3-round w3-white w3-row"  style={{marginBottom:"18px",padding:"12px 30px 12px 5px"}}>
			  
                    <div  className="w3-threequarter w3-container " >
                
                   
                      <p style={{textAlign:"left"}}>{person.name} </p>
                    
                    
                    <div style={{paddingLeft:"4px"}} >
                    <button style={{fontSize: "10px",padding: "4px 8px",marginLeft:"8px",marginRight: "67%"}} class="w3-button w3-red w3-round-large">{this.state.persons.length}</button>
                    
                  </div>
                    
                    
                  </div>
                  <div className="w3-container w3-quarter">
                  <button className="w3-button w3-red w3-round-large">Add User</button>
                  </div>
   </div>)


     
   
       

      
    )
  }
}
