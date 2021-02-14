import React from "react";

//include images into your bundle

//create your first component
import Resultado from "../component/resultado.js";
import Tablero from "../component/board.js";
import Reset from "../component/button.js";
import InfoPlayer from "./infoPlayer.js";

export class App extends React.Component {
	constructor() {
		super();
		this.state = {
			juego: ["", "", "", "", "", "", "", "", ""],
			turn: "X",
			winner: null,
			enaTablero: "d-none",
			user1: "",
			user2: "",
			mostrarInfo: ""
		};
	}

	updateTab(loc, player) {
		//Game Over!
		console.log(this.state.winner, this.state.turn, this.state.juego);
		if (this.state.winner !== null) {
			//make game over component visible
			console.log("Winner", this.state.winner);
			return;
		}
		if (this.state.juego[loc] === "X" || this.state.juego[loc] === "O") {
			//invalid move
			console.log("Invalido");
			return;
		}
		let currentJuego = this.state.juego;
		currentJuego.splice(loc, 1, this.state.turn);
		this.setState(
			{ juego: currentJuego },
			function() {
				//Check if there is a winner or draw
				var moves = this.state.juego.join("").replace(/ /g, "");

				if (moves.length === 9) {
					this.setState({ winner: "d" });
					//Make game over component visible
					return;
				} else {
					var topRow =
						this.state.juego[0] +
						this.state.juego[1] +
						this.state.juego[2];
					if (topRow.match(/XXX|OOO/)) {
						this.setState({ winner: this.state.turn });
						return;
					}
					var middleRow =
						this.state.juego[3] +
						this.state.juego[4] +
						this.state.juego[5];
					if (middleRow.match(/XXX|OOO/)) {
						this.setState({ winner: this.state.turn });
						return;
					}
					var bottomRow =
						this.state.juego[6] +
						this.state.juego[7] +
						this.state.juego[8];
					if (bottomRow.match(/XXX|OOO/)) {
						this.setState({ winner: this.state.turn });
						return;
					}
					var leftCol =
						this.state.juego[0] +
						this.state.juego[3] +
						this.state.juego[6];
					if (leftCol.match(/XXX|OOO/)) {
						this.setState({ winner: this.state.turn });
						return;
					}
					var middleCol =
						this.state.juego[1] +
						this.state.juego[4] +
						this.state.juego[7];
					if (middleCol.match(/XXX|OOO/)) {
						this.setState({ winner: this.state.turn });
						return;
					}
					var rightCol =
						this.state.juego[2] +
						this.state.juego[5] +
						this.state.juego[8];
					if (rightCol.match(/XXX|OOO/)) {
						this.setState({ winner: this.state.turn });
						return;
					}
					var leftDiag =
						this.state.juego[0] +
						this.state.juego[4] +
						this.state.juego[8];
					if (leftDiag.match(/XXX|OOO/)) {
						this.setState({ winner: this.state.turn });
						return;
					}
					var rightDiag =
						this.state.juego[2] +
						this.state.juego[4] +
						this.state.juego[6];
					if (rightDiag.match(/XXX|OOO/)) {
						this.setState({ winner: this.state.turn });
						return;
					}
					this.setState({
						turn: this.state.turn === "X" ? "O" : "X"
					});
				}
			},
			this
		);
	}
	resetTab() {
		this.setState({
			juego: ["", "", "", "", "", "", "", "", ""],
			turn: "X",
			enaTablero: "d-none",
			winner: null,
			user1: "",
			user2: "",
			mostrarInfo: ""
		});
	}
	datosClick() {
		this.setState({
			enaTablero: "",
			mostrarInfo: "d-none"
		});
	}
	username1(event) {
		this.setState({
			user1: event.target.value
		});
		console.log("User 1 " + this.state.user1);
	}
	username2(event) {
		this.setState({
			user2: event.target.value
		});
		console.log("User 2 " + this.state.user2);
	}

	render() {
		return (
			<div className="row">
				<div className="col-12">
					<InfoPlayer
						datosClick={this.datosClick.bind(this)}
						username1={this.username1.bind(this)}
						username2={this.username2.bind(this)}
						mostrarInfo={this.state.mostrarInfo}
					/>
					<Resultado
						winner={this.state.winner}
						username1={this.state.user1}
						username2={this.state.user2}
					/>
					<Reset
						reset={this.resetTab.bind(this)}
						s
						enaTablero={this.state.enaTablero}
					/>
				</div>

				{this.state.juego.map(
					function(value, i) {
						return (
							<Tablero
								key={i}
								loc={i}
								value={value}
								updateTab={this.updateTab.bind(this)}
								turn={this.state.turn}
								enaTablero={this.state.enaTablero}
							/>
						);
					}.bind(this)
				)}
			</div>
		); //return
	} //render
} //clase

export default App;
