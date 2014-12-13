(function () {
  'use strict';

  angular
    .module('idea.navbar')
    .service('iNavbar', iNavbar);

  /** @ngInject */
  function iNavbar() {
    var vm = this;

    var collapseElem, links = {}, collapsed = false;

    vm.init = init;
    vm.register = register;
    vm.getLinks = getLinks;
    vm.collapse = collapse;
    vm.canShow = canShow;

    function init(elem, roles) {

      collapseElem = elem;
      vm.roles = roles;

      collapseElem.on('hidden.bs.collapse', function () {
        collapsed = false;
      });

      collapseElem.on('shown.bs.collapse', function () {
        collapsed = true;
      });
    }

    function register(state, title, role) {
      links[role] = (links[role] || []).concat([{state: state, title: title}]);
    }

    function getLinks() {
      if (!vm.roles || !vm.roles.length) {
        return links[undefined];
      } else {
        return Array.prototype.concat.apply([], vm.roles.map(function (r) {
          return links[r];
        }));
      }
    }

    function collapse() {
      if (collapsed) {
        collapseElem.collapse('hide');
      }
    }

    function canShow(role) {
      var roles = (vm.roles || []);
      return (!role && !roles.length || roles.indexOf(role) !== -1);
    }
  }
})();
