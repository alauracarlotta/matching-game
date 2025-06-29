import './style.css';
import CardGame from '/src/components/CardGame';

const CardFrontBack = () => {
    return /* html */ `
        <article class="card-front-back">
            <div class="card -front">
                ${CardGame('joystick', 'Logo na cor branca de um joystick')}
            </div>
            <div class="card -back">
                ${CardGame(
                    'javascript',
                    'Logo da linguagem de programação Javascript em amarelo'
                )}
            </div>
        </article>
    `;
};

export default CardFrontBack;
