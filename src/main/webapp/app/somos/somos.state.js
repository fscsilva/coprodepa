(function() {
    'use strict';

    angular
        .module('coprodepaApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
            .state('somos', {
                parent: 'app',
                url: '/somos',
                data: {
                    authorities: [],
                    pageTitle: 'somos.title'
                },
                views: {
                    'content@': {
                        templateUrl: 'app/somos/somos.html'
                    }
                },
                resolve: {
                    mainTranslatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate,$translatePartialLoader) {
                        $translatePartialLoader.addPart('somos');
                        return $translate.refresh();
                    }]
                }
            })
    }
})();
