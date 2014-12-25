(function () {
  'use strict';

  angular
    .module('idea.sidebar')
    .service('iSidebar', iSidebar);

  /** @ngInject */
  function iSidebar($q, $state, iNavbar) {
    var vm = this;

    var categories = {}, states = {}, promises = {};
    var registerTreeDebounce = _.debounce(registerTree, 1000);

    vm.childs = [];
    vm.registerCategory = registerCategory;
    vm.registerItem = registerItem;
    vm.getCategory = getCategory;
    vm.getHref = getHref;
    vm.getState = getState;
    vm.registerTree = registerTree;
    vm.linkRegister = linkRegister;

    function registerCategory(id, parent, label) {
      var category = {id: id, label: label, childs: []};

      return register(parent, category).then(function () {
        categories[id] = category;

        if (promises[id]) {
          promises[id].resolve(category);
        }
      });
    }

    function registerItem(id, category, label) {
      var item = {id: id, label: label};

      return register(category, item).then(function () {
        registerTreeDebounce();
      });
    }

    function getCategory(id) {
      if (!id) {
        return $q.when(vm);
      } else if (categories[id]) {
        return $q.when(categories[id]);
      } else if (!promises[id]) {
        promises[id] = $q.defer();
      }

      return promises[id].promise;
    }

    function getHref(item) {
      if (item.childs) {
        return $state.href(vm.categoryState, item);
      } else {
        return $state.href(vm.itemState, item);
      }
    }

    function getState(href) {
      if (states[href]) {
        return $q.when(states[href]);
      } else if (!promises[href]) {
        promises[href] = $q.defer();
      }

      return promises[href].promise;
    }

    function registerTree() {
      _.forEach(vm.childs, vm.linkRegister);
    }

    function linkRegister(obj) {
      var title = _.map(obj.parents.concat([obj]), getLabel).join(' / ');
      var linkObj = {href: vm.getHref(obj), title: title, search: obj.label};

      if (!obj.childs || obj.childs.length > 0) {
        iNavbar.register(linkObj);
        _.forEach(obj.childs, vm.linkRegister);
      }
    }

    function getLabel(obj) {
      return obj.label;
    }

    function register(category, child) {
      return vm.getCategory(category).then(function (parent) {
        parent.childs.push(child);
        addParents(child, parent);
      });
    }

    function addParents(item, parent) {
      var href = (vm.getHref(item) || '').substr(1);

      states[href] = item;

      if (promises[href]) {
        promises[href].resolve(item);
      }

      if (parent && parent.parents) {
        item.parents = parent.parents.concat([parent]);
      } else {
        item.parents = [];
      }
    }
  }
})();
