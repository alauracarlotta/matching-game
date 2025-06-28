import './style.css';
import CardGame from '/src/components/CardGame';

const CardFrontBack = () => {
    return /* html */ `
        <article class="card-front-back">
            ${CardGame('joystick', 'Logo na cor branca de um joystick')}
            ${CardGame(
                'javascript',
                'Logo da linguagem de programação Javascript em amarelo'
            )}
        </article>
    `;
};

export default CardFrontBack;
