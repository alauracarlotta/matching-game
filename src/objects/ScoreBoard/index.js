import './style.css';
import PlayerName from '../../components/PlayerName';
import VsScore from '../../components/VsPlayer';
import GameScore from '../../components/GameScore';

const ScoreBoard = () => {
	return /* html */ `
        <header class="name-player">
            ${PlayerName(1)}
            ${GameScore()}
            ${VsScore()}
            ${GameScore()}
            ${PlayerName(2)}
        </header>
        
    `;
};

export default ScoreBoard;
