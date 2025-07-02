import './style.css';
import shuffledCards from './data.js';
import CardFrontBack from '/src/components/CardFrontBack';

const BoardGame = (amountCards) => {
	window.boardGame = {};
	let cardListBoardGameClicks = [];
	window.boardGame.handleClick = (event) => {
		console.log(event.target);
		const $origin = event.target;
		cardListBoardGameClicks.push($origin);
		if (cardListBoardGameClicks.length == 2) {
			console.log('Laurinha linda');
			setTimeout(() => {
				console.log('Depois de 2 segundos');
				cardListBoardGameClicks.map((card) => {
					const cardClick = card.closest('.card-front-back');
					cardClick.classList.remove('-active');
				});
				cardListBoardGameClicks = [];
			}, 1000);
		}
	};
	const htmlCadsList = shuffledCards.map((card) =>
		CardFrontBack(card.iconImg, card.imgAlt)
	);
	const $htmlContent = htmlCadsList.join('');

	return /* html */ `
        <section class="board-game" onclick="boardGame.handleClick(event)">
            <div class="cards-game">
                ${$htmlContent}
            </div>
        </section>
    `;
};

export default BoardGame;
