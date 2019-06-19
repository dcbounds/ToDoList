import React from "react";
import shortid from "shortid";

export default class TodoForm extends React.Component {
	state = {
		//empty text box at start
		text: ""
	};

	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	handleSubmit = event => {
		event.preventDefault();
		//submit
		this.props.onSubmit({
			//generates a new id for text
			id: shortid.generate(),
			text: this.state.text,
			complete: false
		});
		//make textbox empty on enter
		this.setState({
			text: ""
		});
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input
						name="text"
						value={this.state.text}
						onChange={this.handleChange}
						placeholder="git it done..."
					/>
					<button onClick={this.handleSubmit}>New Todo!</button>
				</form>
			</div>
		);
	}
}
