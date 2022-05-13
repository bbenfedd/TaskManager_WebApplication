
import './App.css';
import React, {Component} from 'react'

import Test from './Test.js';
import PostComp from './PostComp.js';
import GetComp from './GetComp.js';



class App extends Component {
 
  render() {
    
    return (
      <React.Fragment>
      < Test />
      
      <PostComp />
      
      
      </React.Fragment>
    );
  }
}
 


export default App;
