import './style.css';
import PlayerName from '../../components/PlayerName';
import VsScore from '../../components/VsPlayer';
import GameScore from '../../components/GameScore';
import GamePointer from '../../components/GamePointer';

const ScoreBoard = () => {
	return /* html */ `
        <div class="score-board">
            <header class="name-player">
                ${GamePointer()}
                ${PlayerName(1)}
                ${GameScore(2)}
                ${VsScore()}
                ${GameScore(1)}
                ${PlayerName(2)}
            </header>
        </div>
        
    `;
};

export default ScoreBoard;
