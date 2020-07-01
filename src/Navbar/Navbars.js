import React, { Component } from 'react'; // Import react component
import Home from '../Home/Home'; // Import home component
import { Link } from 'react-router-dom';// Import Link from bootstrap to get Link style and functions
import axios from 'axios'; // Import axios to page
import './Navbar.css';
/* Navbar class that handles the search component and the retun or search object also renders home view which is a picture to give the page a little bit of style*/
class Navbars extends Component { // Class Navbar extends react component
	constructor(props) { // Props is called
			super(props); // State is added to Props
			this.state = { // Objects added to state
				person: '', // person added to state
				
			} 
		this.updateInput = this.updateInput.bind(this); // update method is loaded to state
		this.handleSubmit = this.handleSubmit.bind(this); // Submit it loaded to state
		}	

  updateInput(event) { 
	this.setState({ name : event.target.value }) // Gets the input value from user
  }

  handleSubmit(event) { // Submits users input
 
	event.preventDefault();
	this.setState({ name : event.target.value }) // Sets user input as name
	axios.get('http://localhost:8080/findByName', { // Sends name to back end to search for person
			params: {
				name: this.state.name // Name of person added as parameter to the link
			}
		})
		.then( res => { 
			const person = res.data; // Person data returned 
			this.setState({ person }); // Person added to state so that it can be used by application
		})
		.then(
			console.log(this.state.name)
		)
  } 

  

  render() { // The render object
    return ( // The return object which return the person and renders the page and maps the person data to get information
		<React.Fragment>
		<div>  
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<Link className="navbar-brand" to="/Tables">STARWARS</Link>
			<div className="collapse navbar-collapse" id="navbarSupportedContent">

			  <ul className="navbar-nav mr-auto">
				<li className="nav-item dropdown">
				  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
					<a className="dropdown-item" href="/">Action</a>
					<a className="dropdown-item" href="/">Another action</a>
					<div className="dropdown-divider"></div>
					<a className="dropdown-item" href="/">Something else here</a>
				  </div>
				</li>
			  </ul>

			  <form className="form-inline my-2 my-lg-0">
				<input  onChange={this.updateInput} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
				<button onClick={this.handleSubmit}  className="btn btn-outline-success my-2 my-sm-0" type="Text" >Search Character</button>
			  </form>

			</div>
		  </nav>

		  <Home />

				<div class="card">
					
					<img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPj_CZiQFogZ_5cbjiBSVPsl-wbihGeChvJgBPuFkOuvy3DrD9Tw&s"} alt="Center Images" />
					  <div class="container">
						<h4><b>{this.state.person.name}</b></h4>
						<p>Height: {this.state.person.height}</p>
						<p>Weight: {this.state.person.mass}</p>
						<p>Hair Color: {this.state.person.hair_color}</p>
						<p>Birth Year: {this.state.person.birth_year}</p>
						<p>Films: {this.state.person.films}</p>
						<p>Starships flown: {this.state.person.starships}</p>
					  </div>
				</div>
		  </div>
		</React.Fragment>
    );
  }
}


export default Navbars;