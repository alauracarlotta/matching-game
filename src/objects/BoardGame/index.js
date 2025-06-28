import './style.css';
import CardFrontBack from '/src/components/CardFrontBack';


const BoardGame = (amountCards) => {
    const $htmlCardFrontBack = CardFrontBack();
    const $htmlContent = $htmlCardFrontBack.repeat(amountCards);

    return /* html */ `
        <section class="board-game">
            <div class="cards-game">
                ${$htmlContent}
            </div>
        </section>
    `;
}

export default BoardGame;