import React from "react";
import shortid from "shortid";

export default props => (
	<div
		style={{
			textDecoration: props.todo.complete ? "line-through" : ""
		}}
		onClick={props.toggleComplete}>
		{props.todo.text}
	</div>
);
