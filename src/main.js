/* CSS */
import '/src/styles/settings/colors.css';
import '/src/styles/base/reset.css';
import '/src/styles/elements/base.css';

/* Objects */
import ScoreBoard from './objects/ScoreBoard';
import BoardGame from './objects/BoardGame';

/* Components */

const $root = document.querySelector('#root');

$root.insertAdjacentHTML(
	'beforeend',
	`
        ${ScoreBoard()}
        ${BoardGame(6)}
    `
);

//WIP
/* 
[X] DESAFIO fácil: Replicar o componente do card 6x
[X] DESAFIO intermediário: Criar o componente de nome de player com cada um tendo o seu nome
[X] DESAFIO difícil: criar o outro lado do cartão e quando clicar nele ele deve virar
*/

//
/* 
[X] DESAFIO fácil: Criar componente de pontuação e vs (sem a marcação de pontos)
[ ] DESAFIO intermediário: Criar o componente da seta que muda do player 1 para o player 2
    Dica: Usar classes que mudarão no devtools do browser. 
    Ex.: "se tem a classe player1, aponta para o player 1 e vice-versa"
[ ] DESAFIO difícil: Assim que o usuário clicar em 2 cartões, a seta mudará para o player 2 e irá desvirar as cartas automaticamente.
*/
