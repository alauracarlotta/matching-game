import './style.css'
import NamePlayer from "../../components/NamePlayer";

const PlayerScore = () => {
    let  $htmlNamePlayer = ''

    for (let i = 0; i < 2; i++) {
        $htmlNamePlayer += NamePlayer(i + 1);
    }

    return /* html */ `
        <div class="name-player">
            ${$htmlNamePlayer}
        </div>
    `
}

export default PlayerScore;