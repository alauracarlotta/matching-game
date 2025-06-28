import './style.css';
import PlayerName from '../../components/PlayerName';

const ScoreBoard = () => {
    let $htmlPlayerName = '';

    for (let i = 0; i < 2; i++) {
        $htmlPlayerName += PlayerName(i + 1);
    }

    return /* html */ `
        <header class="name-player">
            ${$htmlPlayerName}
        </header>
    `;
};

export default ScoreBoard;
