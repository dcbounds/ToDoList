import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Todolist from "./todo-app.js";
import Todo from "./todo.js";

//create your first component
export default class Home extends React.Component {
	render() {
		return (
			<div>
				<div className="card">
					<h1 className="title">To-Do List</h1>
					<div>
						<Todolist />
					</div>
				</div>
			</div>
		);
	}
}
