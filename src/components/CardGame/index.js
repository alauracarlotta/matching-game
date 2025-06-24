// JSX
/* function CardGame() {

}

const CardGame = () =>{

}

const CardGame = function() {

} */

import "./style.css"

const CardGame = () =>{
    return /* html */ `
        <article class="card-game">
            <img class="joystick-image" src="/src/images/joystick.png"
            alt="Logo na cor branca de um joystick" />
        </article>
    `
}

export default CardGame;