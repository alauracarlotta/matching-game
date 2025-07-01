import './style.css';

const GameScore = () => {
	let $htmlSquare = '';
	for (let i = 1; i <= 3; i++) {
		$htmlSquare += `<div class="square"></div>`;
	}
	return /* html */ `
		<div class="game-score">
			<div class="game-score -square">
				${$htmlSquare}
			</div>
		</div>
	`;
};

export default GameScore;
