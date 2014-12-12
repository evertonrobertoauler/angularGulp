'use strict';

angular
  .module('idea')
  .service('iNavbar', function iNavbar() {

    var collapseElem;

    var vm = this;

    vm.links = {};

    vm.collapsed = false;

    vm.init = function (elem, roles) {

      collapseElem = elem;
      vm.roles = roles;

      collapseElem.on('hidden.bs.collapse', function () {
        vm.collapsed = false;
      });

      collapseElem.on('shown.bs.collapse', function () {
        vm.collapsed = true;
      });
    };

    vm.register = function (state, title, role) {
      vm.links[role] = (vm.links[role] || []).concat([{state: state, title: title}]);
    };

    vm.getLinks = function () {
      if (!vm.roles || !vm.roles.length) {
        return vm.links[undefined];
      } else {
        return Array.prototype.concat.apply([], vm.roles.map(function (r) {
          return vm.links[r];
        }));
      }
    };

    vm.collapse = function () {
      if (vm.collapsed) {
        collapseElem.collapse('hide');
      }
    };

    vm.canShow = function (role) {
      var roles = (vm.roles || []);
      return (!role && !roles.length || roles.indexOf(role) !== -1);
    };
  });
