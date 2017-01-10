(function() {
    'use strict';

    angular
        .module('coprodepaApp')
        .controller('EntryDetailController', EntryDetailController);

    EntryDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'DataUtils', 'entity', 'Entry', 'Blog', 'Tag'];

    function EntryDetailController($scope, $rootScope, $stateParams, previousState, DataUtils, entity, Entry, Blog, Tag) {
        var vm = this;

        vm.entry = entity;
        vm.previousState = previousState.name;
        vm.byteSize = DataUtils.byteSize;
        vm.openFile = DataUtils.openFile;

        var unsubscribe = $rootScope.$on('coprodepaApp:entryUpdate', function(event, result) {
            vm.entry = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
