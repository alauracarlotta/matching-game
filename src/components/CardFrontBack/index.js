import './style.css';
import CardGame from '/src/components/CardGame';

const CardFrontBack = () => {
    return /* html */ `
        <article class="card-front-back">
            ${CardGame()}
            ${CardGame()}
        </article>
    `
}

export default CardFrontBack;