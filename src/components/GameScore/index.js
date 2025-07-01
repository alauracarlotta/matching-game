import './style.css';

const GameScore = (points = 0) => {
	let $htmlSquare = '';
	for (let i = 1; i <= 3; i++) {
		$htmlSquare += `<div class="square"></div>`;
	}
	return /* html */ `
		<div class="game-score">
			<div data-points="${points}" class="game-score -square">
				${$htmlSquare}
			</div>
		</div>
	`;
};

export default GameScore;
