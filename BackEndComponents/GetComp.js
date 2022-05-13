
import './App.css';
import React, {Component} from 'react'
import axios from 'axios'

export default class GetComp extends Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get('http://localhost:8080/api/projects')
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <ul>
        { this.state.persons.map(person => <li key={person.name}>{person.name}</li>)}
      </ul>
    )
  }
}
