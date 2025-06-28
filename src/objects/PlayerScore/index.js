import './style.css'
import PlayerName from "../../components/PlayerName";

const PlayerScore = () => {
    let  $htmlPlayerName = ''

    for (let i = 0; i < 2; i++) {
        $htmlPlayerName += PlayerName(i + 1);
    }

    return /* html */ `
        <div class="name-player">
            ${$htmlPlayerName}
        </div>
    `
}

export default PlayerScore;