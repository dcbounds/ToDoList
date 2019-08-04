import React from "react";
import shortid from "shortid";
import PropTypes from "prop-types";

export default class props extends React.Component {
	render() {
		return (
			<div
				style={{
					textDecoration: this.props.todo.complete
						? "line-through"
						: ""
				}}
				onClick={this.props.toggleComplete}>
				{this.props.todo.text}
			</div>
		);
	}
}

props.propTypes = {
	todo: PropTypes.string,
	toggleComplete: PropTypes.object
};
