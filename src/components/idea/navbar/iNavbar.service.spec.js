'use strict';

describe('Service: iNavbar', function () {

  beforeEach(module('idea.navbar'));

  var iNavbar, $rootScope, $state;

  beforeEach(inject(function (_iNavbar_, _$rootScope_, _$state_) {
    iNavbar = _iNavbar_;
    $rootScope = _$rootScope_;
    $state = _$state_;
  }));

  it('should register', function () {

    var linkObj = {state: 'test', title: 'Test', search: 'Test'};

    iNavbar.register(linkObj, 'user');

    expect(iNavbar.links.user.length).toEqual(1);
    expect(iNavbar.links.user[0]).toEqual(linkObj);
  });

  it('should getLinks', function () {
    var links;
    var linkObj = {state: 'test', title: 'Test', search: 'Test'};
    iNavbar.register(linkObj, 'user');
    iNavbar.register(linkObj, 'admin');

    iNavbar.roles = ['user', 'admin'];
    links = iNavbar.getLinks('e');
    expect(links.length).toEqual(2);

    links = iNavbar.getLinks('no find');
    expect(links.length).toEqual(0);

    iNavbar.roles = ['user'];
    links = iNavbar.getLinks('e');
    expect(links.length).toEqual(1);

    iNavbar.roles = undefined;
    links = iNavbar.getLinks('e');
    expect(links).not.toBeDefined();
  });

  it('should collapse', function () {

    var calls = 0;

    iNavbar.triggerCollapse = function () {
      calls++;
    };

    iNavbar.collapse();
    expect(calls).toEqual(0);

    iNavbar.collapsed = true;
    iNavbar.collapse();

    expect(calls).toEqual(1);

    iNavbar.triggerCollapse = undefined;
    expect(calls).toEqual(1);
  });

  it('should canShow', function () {

    expect(iNavbar.canShow(undefined)).toEqual(true);

    iNavbar.roles = ['user', 'admin'];
    expect(iNavbar.canShow(undefined)).toEqual(false);
    expect(iNavbar.canShow('admin')).toEqual(true);
  });
});
