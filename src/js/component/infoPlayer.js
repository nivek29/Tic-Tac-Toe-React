import React from "react";
import PropTypes from "prop-types";
import xImg from "../../img/letra-x (2).png";
import oImg from "../../img/rec.png";

const InfoPlayer = props => {
	return (
		<div>
			<div className="row">
				<div className="col-12">
					<div className="alert alert-info text-center" role="alert">
						<h2>TIC TAC TOE</h2>
					</div>
				</div>
			</div>
			<div className={"row " + props.mostrarInfo}>
				<div className="input-group mb-3 ">
					<div className="input-group-prepend">
						<span className="input-group-text" id="basic-addon1">
							<img src={xImg} />
						</span>
					</div>
					<input
						onChange={props.username1}
						type="text"
						className="player1 form-control"
						placeholder="Username"
						aria-label="Username"
						aria-describedby="basic-addon1"
					/>
					<div className="input-group-prepend">
						<span className="input-group-text" id="basic-addon1">
							<img src={oImg} />
						</span>
					</div>
					<input
						onChange={props.username2}
						type="text"
						className="player2 form-control"
						placeholder="Username"
						aria-label="Username"
						aria-describedby="basic-addon1"
					/>
				</div>
			</div>
			<div className={"row " + props.mostrarInfo}>
				<button
					className="btn btn-primary col-12"
					onClick={props.datosClick}>
					Comenzar
				</button>
			</div>
		</div>
	);
};
InfoPlayer.propTypes = {
	datosClick: PropTypes.func,
	username1: PropTypes.func,
	username2: PropTypes.func,
	mostrarInfo: PropTypes.string
};
export default InfoPlayer;
