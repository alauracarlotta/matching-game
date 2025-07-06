import './style.css';
import shuffledCards from './data.js';
import CardFrontBack from '/src/components/CardFrontBack';

const BoardGame = (amountCards) => {
	/* window.boardGame = {};
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
	}; */

	const flipAndHideCards = ($cardActive) => {
		$cardActive.forEach((card) => {
			card.classList.remove('-active');
		});
	};

	const toggleCurrentPlayer = () => {
		const $arrowPlayer = document.querySelector('.game-pointer');
		const currentPlayer = $arrowPlayer.getAttribute('data-current-player');

		$arrowPlayer.setAttribute(
			'data-current-player',
			currentPlayer == 1 ? 2 : 1
		);
	};
	window.boardGame = {};
	window.boardGame.handleClick = () => {
		const $cardActive = document.querySelectorAll('.-active');

		if ($cardActive.length === 2) {
			setTimeout(() => {
				flipAndHideCards($cardActive);
			}, 1000);

			setTimeout(() => {
				toggleCurrentPlayer();
			}, 1500);
		}
	};

	const htmlCadsList = shuffledCards.map((card) =>
		CardFrontBack(card.iconImg, card.imgAlt)
	);
	const $htmlContent = htmlCadsList.join('');

	return /* html */ `
        <section class="board-game" onclick="boardGame.handleClick()">
            <div class="cards-game">
                ${$htmlContent}
            </div>
        </section>
    `;
};

export default BoardGame;
