import './style.css';
import cardsObject from './data.js';
import CardFrontBack from '/src/components/CardFrontBack';

const BoardGame = (amountCards) => {
	const shuffleArray = (array) => {
		const shuffled = [...array]; // copia o array original
		for (let i = shuffled.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
		}
		return shuffled;
	};

	const shuffledCards = shuffleArray(cardsObject);

	const htmlCadsList = shuffledCards.map((card) =>
		CardFrontBack(card.iconImg, card.imgAlt)
	);
	const $htmlContent = htmlCadsList.join('');

	return /* html */ `
        <section class="board-game">
            <div class="cards-game">
                ${$htmlContent}
            </div>
        </section>
    `;
};

export default BoardGame;
