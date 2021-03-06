angular.module( 'bookingadventure.services' )

// Define Service
.factory('product', [function () {
	var products = [
		{
			id: 0,
			title: "Ilhas Cagarras de Standup",
			subTitle: "",
			description: "Travessia às ilhas Cagarras saindo da Barra da Tijuca remando de Standup com todo suporte do grupo Standapeando.",
			price: 250.00,
			type: "Standup",
			category: "",
			banner: "http://placehold.it/750x450",
			location: "Rio de Janeiro",
			details: [
				{
					duration: "6h",
					level: "Intermediário"
				}
			]
		},
		{
			id: 1,
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
			id: 2,
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

	var getById = function (id) {
		return products[id];
	};

	return {
		findById: getById
	};
}]);
