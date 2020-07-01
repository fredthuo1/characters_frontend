import React, { Component } from 'react';
import Navbars from './Navbar/Navbars';
import Tables from './Tables/Tables';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
		<Router>
			<Navbars />
			<Tables />
		</Router>
      </React.Fragment>
    );
  }
}

export default App;
