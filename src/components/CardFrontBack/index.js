import './style.css';
import CardGame from '/src/components/CardGame';

const CardFrontBack = () => {
	window.cardFrontBack = {};
	window.cardFrontBack.handleClick = (event) => {
		const $origin = event.target;
		const $cardFrontBack = $origin.closest('.card-front-back');
		$cardFrontBack.classList.toggle('-active');
		console.log($cardFrontBack);
	};

	return /* html */ `
        <article class="card-front-back" onclick="cardFrontBack.handleClick(event)">
            <div class="card -front">
                ${CardGame('joystick', 'Logo na cor branca de um joystick')}
            </div>
            <div class="card -back">
                ${CardGame(
					'javascript',
					'Logo da linguagem de programação Javascript em amarelo'
				)}
            </div>
        </article>
    `;
};

export default CardFrontBack;
