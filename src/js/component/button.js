import React from "react";
import PropTypes from "prop-types";

export default class Reset extends React.Component {
	render() {
		return (
			<div className={"row " + this.props.enaTablero}>
				<button
					className="btn btn-primary col-12"
					onClick={this.props.reset}>
					Resetear
				</button>
			</div>
		);
	}
}
Reset.propTypes = {
	reset: PropTypes.func,
	enaTablero: PropTypes.string
};
