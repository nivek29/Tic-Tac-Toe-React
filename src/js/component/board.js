import React from "react";
import PropTypes from "prop-types";
//create your first component
export default class Board extends React.Component {
	boardClick(props) {
		props.updateTab(props.loc, props.turn);
	}

	render() {
		return (
			<div
				className={
					"board " +
					this.props.loc +
					" col-4 " +
					this.props.enaTablero
				}
				onClick={() => this.boardClick(this.props)}>
				<p>{this.props.value}</p>
			</div>
		); //return
	} //render
} //clase
Board.propTypes = {
	loc: PropTypes.number,
	value: PropTypes.string,
	enaTablero: PropTypes.string
};
