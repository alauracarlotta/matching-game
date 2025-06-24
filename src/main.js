/* CSS */
import "/src/styles/base/reset.css";
import "/src/styles/settings/colors.css";
import "/src/styles/elements/base.css";

/* Components */
import CardGame from "./components/CardGame";

const $root = document.querySelector("#root");
const $htmlCardGame = CardGame();

$root.insertAdjacentHTML("beforeend", $htmlCardGame);
