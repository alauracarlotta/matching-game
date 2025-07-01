import './style.css';
import PlayerName from '../../components/PlayerName';
import VsScore from '../../components/VsPlayer';
import GameScore from '../../components/GameScore';
import GamePointer from '../../components/GamePointer';

const ScoreBoard = () => {
	return /* html */ `
        <div class="score-board">
            <div class="pointer">
                ${GamePointer()}
            </div>
            <header class="name-player">
                ${PlayerName(1)}
                ${GameScore()}
                ${VsScore()}
                ${GameScore()}
                ${PlayerName(2)}
            </header>
        </div>
        
    `;
};

export default ScoreBoard;
