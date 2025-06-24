/* CSS */
import "/src/styles/settings/colors.css";
import "/src/styles/base/reset.css";
import "/src/styles/elements/base.css";

/* Components */
import PlayerScore from "./components/PlayerScore";
import CardGame from "./components/CardGame";

const $root = document.querySelector("#root");
const $htmlCardGame = CardGame();
const $htmlPlayerScore = PlayerScore('Player');

for (let i = 0; i < 2; i++) {
    $root.insertAdjacentHTML("beforeend", ($htmlPlayerScore + `${i+1}`))
}

for (let i = 0; i < 6; i++) {
    $root.insertAdjacentHTML("beforeend", ($htmlCardGame + `${i}`));
}

//WIP
/* 
[X] DESAFIO fácil: replicar o componente do card 6x
intermediário criar o componente de nome de player com cada um tendo o seu nome
difícil criar o outro lado do cartão e quando clicar nele ele deve virar
*/
