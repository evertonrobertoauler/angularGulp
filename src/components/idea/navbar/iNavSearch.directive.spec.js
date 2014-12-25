'use strict';

describe('Directive: iNavSearch', function () {

  beforeEach(module('idea.navbar'));
  beforeEach(module('ngHtml2js'));

  var element, scope, $compile;

  beforeEach(inject(function ($rootScope, _$compile_) {
    scope = $rootScope.$new();
    $compile = _$compile_;
  }));

  it('should render corectly', function () {
    element = angular.element('<i-nav-search side="left" placeholder="Buscar"></i-nav-search>');

    element = $compile(element)(scope);
    scope.$digest();

    expect(element.attr('class')).toMatch(/left/);
    expect(element.find('.dropdown-toggle').attr('placeholder')).toEqual('Buscar');
  });

  it('should call dropdown handler and toggle', function () {
    element = angular.element('<i-nav-search side="right" placeholder="Buscar"></i-nav-search>');

    element = $compile(element)(scope);
    scope.$digest();

    expect(element.attr('class')).toMatch(/right/);

    var input = element.children().scope().getInput();

    spyOn(input, 'is').and.returnValue(true);
    spyOn(input, 'dropdown').and.callThrough();

    input.trigger('keypress');

    expect(input.dropdown).toHaveBeenCalledWith('toggle');
    expect(input.parent().attr('class')).toMatch(/open/);
  });

  it('should call dropdown handler and not toggle', function () {
    element = angular.element('<i-nav-search side="right" placeholder="Buscar"></i-nav-search>');

    element = $compile(element)(scope);
    scope.$digest();

    expect(element.attr('class')).toMatch(/right/);

    var input = element.children().scope().getInput();

    spyOn(input, 'is').and.returnValue(false);
    spyOn(input, 'dropdown').and.callThrough();

    input.trigger('keypress');

    expect(input.dropdown).not.toHaveBeenCalled();
    expect(input.parent().attr('class')).not.toMatch(/open/);
  });
});
