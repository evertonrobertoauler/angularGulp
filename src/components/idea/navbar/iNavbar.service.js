(function () {
  'use strict';

  angular
    .module('idea.navbar')
    .service('iNavbar', iNavbar);

  /** @ngInject */
  function iNavbar($filter) {
    var vm = this;

    vm.links = {};
    vm.collapsed = false;
    vm.register = register;
    vm.getLinks = getLinks;
    vm.collapse = collapse;
    vm.canShow = canShow;
    vm.triggerCollapse = undefined;

    function register(linkObj, role) {
      vm.links[role] = (vm.links[role] || []).concat([linkObj]);
    }

    function getLinks(search) {
      var list;

      if (!vm.roles || !vm.roles.length) {
        list = vm.links[undefined];
      } else {
        list = _.flatten(vm.roles.map(function (r) {
          return vm.links[r];
        }));
      }

      return $filter('filter')(list, {search: search});
    }

    function collapse() {
      if (vm.collapsed && vm.triggerCollapse) {
        vm.triggerCollapse();
      }
    }

    function canShow(role) {
      var roles = (vm.roles || []);
      return (!role && !roles.length || roles.indexOf(role) !== -1);
    }
  }
})();
