import './style.css'

const PlayerScore = (player) => {
    return /* html */ `
        <div>
            <p class="name-player press-start-2p-regular">
                ${player}
            </p>
        </div>
    `
};

export default PlayerScore;
