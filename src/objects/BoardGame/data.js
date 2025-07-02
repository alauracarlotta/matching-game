const cardsObject = [
	{
		iconImg: 'html',
		imgAlt: 'Logo da linguagem de programação HTML em vermelho.'
	},
	{
		iconImg: 'html',
		imgAlt: 'Logo da linguagem de programação HTML em vermelho.'
	},
	{
		iconImg: 'css',
		imgAlt: 'Logo da linguagem de programação css em azul.'
	},
	{
		iconImg: 'css',
		imgAlt: 'Logo da linguagem de programação css em azul.'
	},
	{
		iconImg: 'javascript',
		imgAlt: 'Logo da linguagem de programação Javascript em amarelo.'
	},
	{
		iconImg: 'javascript',
		imgAlt: 'Logo da linguagem de programação Javascript em amarelo.'
	}
];

const shuffleArray = (array) => {
	const shuffled = [...array]; // copia o array original
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
};

const shuffledCards = shuffleArray(cardsObject);

export default shuffledCards;
