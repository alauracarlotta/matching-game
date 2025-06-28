/* CSS */
import "/src/styles/settings/colors.css";
import "/src/styles/base/reset.css";
import "/src/styles/elements/base.css";

/* Objects */
import PlayerScore from "./objects/PlayerScore";
import BoardGame from "./objects/BoardGame";

/* Components */


const $root = document.querySelector("#root");

$root.insertAdjacentHTML(
    "beforeend", 
    `
        ${PlayerScore()}
        ${BoardGame(6)}
    `
)

//WIP
/* 
[X] DESAFIO fácil: Replicar o componente do card 6x
[X] DESAFIO intermediário: Criar o componente de nome de player com cada um tendo o seu nome
[ ] DESAFIO difícil: criar o outro lado do cartão e quando clicar nele ele deve virar
*/
