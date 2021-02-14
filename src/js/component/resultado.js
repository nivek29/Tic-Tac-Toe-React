import React, { Component } from "react";
import PropTypes from "prop-types";
//create your first component
export default class Resultado extends Component {
	render() {
		console.log(this.props.winner);
		console.log(this.props.username1);
		console.log(this.props.username2);
		return (
			<div className={this.props.winner ? "visible" : "hidden"}>
				<div className="title-frame row">
					<div className="col-12">
						<div
							className="alert alert-info text-center"
							role="alert">
							<h2>
								El ganador es:
								{this.props.winner === "X"
									? this.props.username1
									: this.props.username2}
							</h2>
						</div>
					</div>
				</div>
			</div>
		); //return
	} //render
} //clase
Resultado.propTypes = {
	winner: PropTypes.string,
	username1: PropTypes.string,
	username2: PropTypes.string
};
