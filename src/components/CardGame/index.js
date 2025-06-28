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
  /* parÂmetros:  */
  //  - se o cartão está visível ou não
  //  - url imagem, alt da imagem

  return /* html */ `
        <article class="card-game">
            <img class="joystick-image" src="/src/images/${icon}.png"
            alt="${alt}"/>
        </article>
    `;
};

export default CardGame;
