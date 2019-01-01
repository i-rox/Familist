import React, { Component } from 'react';
import '../newTask/NewTask.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//class Try5 extends Component {
 
  const Try5 = ({ click }) => (
    
    <button onClick={click} type="button" >
      Toggle Show
    </button>
    
  );

  
//}

export default Try5;
