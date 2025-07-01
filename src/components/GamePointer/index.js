import './style.css';

const GamePointer = (event) => {
	return /* html */ `
		<img
			class="game-pointer"
			src="/src/images/IconArrowDown.png"
			alt="Poiter em formato de flecha para baixo que mostra qual é o player vigente"
		/>
	`;
};

export default GamePointer;
