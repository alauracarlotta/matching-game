/* CSS */
import "/src/styles/settings/colors.css";
import "/src/styles/base/reset.css";
import "/src/styles/elements/base.css";

/* Components */
import CardGame from "./components/CardGame";

const $root = document.querySelector("#root");
const $htmlCardGame = CardGame();

$root.insertAdjacentHTML("beforeend", $htmlCardGame);
$root.insertAdjacentHTML("beforeend", $htmlCardGame);
$root.insertAdjacentHTML("beforeend", $htmlCardGame);
$root.insertAdjacentHTML("beforeend", $htmlCardGame);
$root.insertAdjacentHTML("beforeend", $htmlCardGame);
$root.insertAdjacentHTML("beforeend", $htmlCardGame);

//WIP
/* 
facil replicar o componente do card 6x
intermediário criar o componente de nome de player com cada um tendo o seu nome
difícil criar o outro lado do cartão e quando clicar nele ele deve virar
*/
