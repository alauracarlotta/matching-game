import './style.css';
import CardGame from '/src/components/CardGame';


const BoardGame = (amountCards) => {
    const $htmlCardGame = CardGame();
    const $htmlContent = $htmlCardGame.repeat(amountCards);

    return /* html */ `
        <section class="board-game">
            <div class="player-score">
                ${$htmlContent}
            </div>
        </section>
    `;
}

export default BoardGame;