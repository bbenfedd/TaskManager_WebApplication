
import '../App.css';
import React, {Component} from 'react'
import axios from 'axios'
import 'w3-css/w3.css';

export default class GetComp extends Component {
  state = {
    persons: [],
    tasks : []
  }

  componentDidMount() {
    axios.get('http://localhost:8080/api/projects')
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })

      axios.get('http://localhost:8080/api/tasks')
      .then(res => {
        const tasks = res.data;
        this.setState({ tasks });;
      })
  }

  render() {
    return (
      
         this.state.persons.map(person => 
        
        <div className=" w3-round w3-white w3-row"  style={{marginBottom:"18px",
        padding:"12px 30px 12px 5px",display: "flex",    alignItems: "center" ,width: "88%",marginLeft: "5%"}}>
			  
                    <div  className="w3-threequarter w3-container " >
                
                   
                      <p style={{textAlign:"left"}} >{person.name} </p>
                    
                    
                    <div className="w3-row" style={{      marginTop: "10px",  width: "65px"}}>
                      <div className="w3-quarter w3-container" style={{paddingLeft: "0px"}}>
                    <button style={{fontSize: "13px",padding: "4px 11px",marginLeft:"8px",marginRight: "67%"}} className="w3-button w3-light-blue  w3-round-large">{this.state.tasks.length}</button>
                    </div>
                    <div className=" w3-quarter w3-container">
                    <button style={{fontSize: "13px",padding: "4px 11px",marginLeft:"8px",marginRight: "67%"}} className="w3-button w3-blue w3-round-large">{this.state.tasks.length}</button>
                 </div>
                 
                  </div>
                    
                    
                  </div>
                  <div className="w3-container w3-quarter">
                  <button className="w3-button w3-red w3-round-large">Add User</button>
                  </div>
              
   </div>)


     
   
       

     
    )
  }
}
