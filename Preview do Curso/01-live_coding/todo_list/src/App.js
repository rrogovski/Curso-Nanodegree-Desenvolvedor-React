import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ColumnList from './ColumnList';

class App extends Component {
  	state = {
    	tasks: []
  	}
  
  	addTask(e){
		e.preventDefault()
		console.log("Adding task...");

		let { tasks } = this.state
		const value = e.target.querySelector('input').value;
		const newTask = {
			id: tasks.length + 1,
			description: value,
			status: 'To Do'
		};
		tasks = tasks.concat(newTask)
		this.setState({ tasks })
  	}

	updateTask(){
		console.log("Updating task...")
  	}

  	render() {
    	const tasks = [
			{
				id: 1,
				description: 'Estudar o módulo Fundamentos de React',
				status: 'To Do'
			},
			{
				id: 2,
				description: 'Assistir à 1ª live do curso',
				status: 'Doing'
			}
    	]
		
		const columns = [
			{ title: 'To Do', tasks },
			{ title: 'Doing', tasks },
			{ title: 'Done', tasks }
		]

		return (
			<div className="App">
				<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h1 className="App-title">To Do List</h1>
				</header>

				<div className="App-container">

				<div className="app-lists">
					{columns.map(column => (
					<ColumnList
						key={column.title}
						columnTitle={column.title}
						tasks={column.tasks}
						addTask={(e) => this.addTask(e)}
						updateTask={() => this.updateTask()}
					/>
					))}

				</div>
				</div>

			</div>
		);
	}
}

export default App;
