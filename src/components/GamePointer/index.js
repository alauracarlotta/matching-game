import './style.css';

const GamePointer = (currentPlayer = 1) => {
	return /* html */ `
		<img
			data-current-player="${currentPlayer}"
			class="game-pointer"
			src="/src/images/IconArrowDown.png"
			alt="Poiter em formato de flecha para baixo que mostra qual é o player vigente"
		/>
	`;
};

export default GamePointer;
