/* CSS */
import "/src/styles/settings/colors.css";
import "/src/styles/base/reset.css";
import "/src/styles/elements/base.css";

/* Objects */
import BoardGame from "./objects/BoardGame";

/* Components */
import PlayerScore from "./components/PlayerScore";

const $root = document.querySelector("#root");
const $htmlBoardGame = BoardGame(6);

for (let i = 1; i <= 2; i++) {
    $root.insertAdjacentHTML("beforeend", PlayerScore(i))
}

$root.insertAdjacentHTML("beforeend", ($htmlBoardGame))

//WIP
/* 
[X] DESAFIO fácil: replicar o componente do card 6x
[X] intermediário criar o componente de nome de player com cada um tendo o seu nome
difícil criar o outro lado do cartão e quando clicar nele ele deve virar
*/
