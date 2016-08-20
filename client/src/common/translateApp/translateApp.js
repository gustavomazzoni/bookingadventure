var translateApp = function ($translateProvider, $translatePartialLoaderProvider) {
    $translateProvider.useLoader('$translatePartialLoader', {
      urlTemplate: '/assets/translation/{lang}/{part}.json'
    });

    $translateProvider.registerAvailableLanguageKeys(['en', 'pt-BR' ], {
		'en*': 'en',
		'pt*': 'pt-BR'
	}).determinePreferredLanguage();

	// Set default language to 'pt-BR' (brazilian portuguese)
	$translateProvider.preferredLanguage('pt-BR');
	// Enable escaping of HTML
	$translateProvider.useSanitizeValueStrategy('escape');
};

angular.module('translateApp', ['pascalprecht.translate']).config(translateApp);
