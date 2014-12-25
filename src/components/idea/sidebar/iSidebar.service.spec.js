'use strict';

describe('Service: iSidebar', function () {

  beforeEach(module('idea.sidebar'));

  var iSidebar, iNavbar, $rootScope, $state;

  beforeEach(inject(function (_iSidebar_, _iNavbar_, _$rootScope_, _$state_) {
    iSidebar = _iSidebar_;
    iNavbar = _iNavbar_;
    $rootScope = _$rootScope_;
    $state = _$state_;
  }));

  it('should registerCategory', function () {

    iSidebar.registerCategory('1', undefined, 'parent');
    iSidebar.registerCategory('2', '1', 'child');
    $rootScope.$digest();

    expect(iSidebar.childs.length).toEqual(1);
    expect(iSidebar.childs[0].childs.length).toEqual(1);

    expect(iSidebar.childs[0].parents.length).toEqual(0);
    expect(iSidebar.childs[0].childs[0].parents.length).toEqual(1);

    expect(iSidebar.childs[0]).toEqual(iSidebar.childs[0].childs[0].parents[0]);
  });

  it('should registerItem', function () {

    iSidebar.registerItem('1', undefined, 'item 1');
    $rootScope.$digest();

    expect(iSidebar.childs.length).toEqual(1);

    iSidebar.registerCategory('1', undefined, 'parent');
    iSidebar.registerItem('2', '1', 'item 2');
    $rootScope.$digest();

    expect(iSidebar.childs.length).toEqual(2);
    expect(iSidebar.childs[1].childs.length).toEqual(1);

    expect(iSidebar.childs[1]).toEqual(iSidebar.childs[1].childs[0].parents[0]);
  });

  it('should getCategory defined', function (done) {

    iSidebar.registerCategory('1', undefined, 'parent');
    $rootScope.$digest();

    iSidebar.getCategory('1').then(function (category) {
      expect(category).toEqual(
        jasmine.objectContaining({id: '1', label: 'parent'})
      );
      done();
    });

    $rootScope.$digest();
  });

  it('should getCategory not yet registered', function (done) {

    iSidebar.getCategory('1');

    iSidebar.getCategory('1').then(function (category) {
      expect(category).toEqual(
        jasmine.objectContaining({id: '1', label: 'parent'})
      );
      done();
    });

    iSidebar.registerCategory('1', undefined, 'parent');

    $rootScope.$digest();
  });

  it('should getHref', function () {

    var child = {id: '2'};
    var parent = {id: '1', childs: [child]};

    iSidebar.categoryState = 'category';
    iSidebar.itemState = 'item';

    spyOn($state, 'href').and.callThrough();

    iSidebar.getHref(child);
    expect($state.href).toHaveBeenCalledWith(iSidebar.itemState, child);

    iSidebar.getHref(parent);
    expect($state.href).toHaveBeenCalledWith(iSidebar.categoryState, parent);
  });

  it('should getState defined', function (done) {

    spyOn(iSidebar, 'getHref').and.returnValues('#/category/1');

    iSidebar.categoryState = 'category';
    iSidebar.registerCategory('1', undefined, 'parent');
    $rootScope.$digest();

    iSidebar.getState('/category/1').then(function (category) {
      expect(category).toEqual(
        jasmine.objectContaining({id: '1', label: 'parent'})
      );
      done();
    });

    $rootScope.$digest();
  });

  it('should getState not yet registered', function (done) {

    spyOn(iSidebar, 'getHref').and.returnValues('#/category/1');

    iSidebar.getState('/category/1');

    iSidebar.getState('/category/1').then(function (category) {
      expect(category).toEqual(
        jasmine.objectContaining({id: '1', label: 'parent'})
      );
      done();
    });

    iSidebar.categoryState = 'category';
    iSidebar.registerCategory('1', undefined, 'parent');

    $rootScope.$digest();
  });

  it('should registerTree', function () {

    iSidebar.registerCategory('1', undefined, 'parent');
    $rootScope.$digest();

    spyOn(iSidebar, 'linkRegister').and.callThrough();

    iSidebar.registerTree();

    expect(iSidebar.linkRegister).toHaveBeenCalled();
  });

  it('should linkRegister', function () {

    iSidebar.registerCategory('1', undefined, 'parent');
    iSidebar.registerCategory('2', '1', 'child');
    iSidebar.registerItem('1', '2', 'item');
    $rootScope.$digest();

    spyOn(iSidebar, 'getHref').and.returnValues('#/category/1', '#/category/2');
    spyOn(iNavbar, 'register').and.callThrough();

    iSidebar.linkRegister(iSidebar.childs[0]);

    expect(iNavbar.register).toHaveBeenCalledWith(
      {href: '#/category/1', title: 'parent', search: 'parent'}
    );

    expect(iNavbar.register).toHaveBeenCalledWith(
      {href: '#/category/2', title: 'parent / child', search: 'child'}
    );
  });
});
