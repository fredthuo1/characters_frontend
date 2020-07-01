import React, { Component } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';


// Table class lists a list of all the characters from database with some information about them
class Tables extends Component {

	constructor(props) { 
				super(props);
				this.state = {
					people: [],
				}
			}	

	componentWillMount(){
		axios.get('http://localhost:8080/person', { // Get's list of people to be rendered'
		})
		.then( res => {
			const people = res.data;
			this.setState({ people }); // sets people list in state
		})
		axios.get('http://localhost:8080/person')
	}

	render() {
	 // Renders a list of characters in table format
		return (
		  <React.Fragment>
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>Name</th>
						<th>Height</th>
						<th>Weight</th>
						<th>Hair Color</th>
						<th>Birth Year</th>
					</tr>
				</thead>
				<tbody>
					{ this.state.people.map( person => 
						<tr> 
							<td>
								{person.name} 
							</td>
							<td>
								{person.height} 
							</td>
							<td>
								{person.mass} 
							</td>
							<td>
								{person.hair_color} 
							</td>
							<td>
								{person.birth_year} 
							</td>
						</tr>
					)}
				</tbody>
			</Table>
		  </React.Fragment>
		);
	  }
}

export default Tables;
