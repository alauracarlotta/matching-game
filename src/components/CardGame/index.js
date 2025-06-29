// JSX
/* function CardGame() {

}

const CardGame = () =>{

}

const CardGame = function() {

} */

import './style.css';

const CardGame = (
	icon = 'joystick',
	alt = 'Logo na cor branca de um joystick'
) => {
	//TODO:
	/* parÂmetros:  */
	//  - [X] se o cartão está visível ou não (CLASSE -ACTIVE)
	//  - [ ] url imagem, alt da imagem dinâmica

	return /* html */ `
        <article class="card-game">
            <img class="joystick-image" src="/src/images/${icon}.png"
            alt="${alt}"/>
        </article>
    `;
};

export default CardGame;
