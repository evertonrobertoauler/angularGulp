(function () {
  'use strict';

  angular
    .module('idea.breadcrumb')
    .controller('iBreadcrumbCtrl', iBreadcrumbCtrl);

  /** @ngInject */
  function iBreadcrumbCtrl($rootScope, $location, iSidebar) {
    var vm = this;

    stateChange();
    $rootScope.$on('$stateChangeSuccess', stateChange);

    function stateChange() {
      vm.links = undefined;

      iSidebar.getState($location.url()).then(function (state) {
        if (state) {
          vm.links = _.map(state.parents, getLink);
        }
      });
    }

    function getLink(item) {
      return {href: iSidebar.getHref(item), label: item.label};
    }
  }
})();
