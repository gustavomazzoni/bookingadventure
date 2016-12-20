angular
	.module( 'bookingadventure.services', [] )
	.factory('adventure', adventure);

// Adventure service responsible for adventure model.
adventure.$inject = ['$q'];
function adventure($q) {
	var adventures = [
		{
			title: "Ilhas Cagarras de Standup",
			subTitle: "",
			description: "<p>Formado por um conjunto de sete ilhas e rochedos, o Arquipélago das Cagarras (Laje da Cagarra, Cagarra, Filhote da Cagarra, Matias, Praça Onze, Comprida e Palmas), fica localizado a cerca de 6 km ao sul da praia do Leblon.</p>" +
				"<p>Partindo do posto 12 na praia do Leblon, os aventureiros apreciarão no caminho muitos pássaros como gaivotas, fragatas, atobás e garças.</p>" +
				"<p>A ilha é verdadeiramente um paraíso, com certeza o visual das praias cariocas engrandece o passeio, que dura quase duas horas.</p>",
			price: 250.00,
			type: "Standup",
			category: "",
			banner: "http://placehold.it/750x450",
			location: "Rio de Janeiro",
			details: {
				duration: "6 horas",
				level: "Intermediário",
				places: 'Floresta da tijuca, Cristo',
				languages: 'English, Português',
				dependsWheater: true,
				included: 'Bicicleta, Guia, Capacete',
				meetingSpot: 'Será enviado para o email cadastrado após a confirmação'
			},
			provider: {
				name: 'Marcelo Minto',
				photo: 'http://placehold.it/50x50'
			}
		},
		{
			title: "Vôo duplo de Asa Delta",
			subTitle: "",
			description: "Vôo duplo de Asa Delta saltando da Pedra Bonita e sobrevoando os cartões postais do Rio de Janeiro.",
			price: 440.00,
			type: "Vôo Livre",
			category: "",
			banner: "http://placehold.it/750x450",
			location: "Rio de Janeiro",
			details: [
				{
					duration: "2h",
					level: "Básico"
				}
			]
		},
		{
			title: "Escalada no Pão de Açúcar",
			subTitle: "",
			description: "O Pão de Açúcar pode ser escalado por diversas faces, algumas mais fáceis, outras mais difíceis. Não há caminhadas até o cume.",
			price: 400.00,
			type: "Escalada",
			category: "",
			banner: "http://placehold.it/750x450",
			location: "Rio de Janeiro",
			details: [
				{
					duration: "8h",
					level: "Diversos"
				}
			]
		}
	];

	var getPopularList = function () {
		return adventures;
	};

	var getDealsList = function () {
		return adventures;
	};

	var getList = function () {
		return $q.when(adventures);
	};

	var get = function (title) {
		return $q.when(adventures[0]);
	};

	return {
		getPopularList: getPopularList,
		getDealsList: getDealsList,
		getList: getList,
		get: get
	};
}
