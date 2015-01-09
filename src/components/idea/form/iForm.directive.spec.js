'use strict';

describe('Directive: iForm', function () {

  beforeEach(module('idea.form'));
  beforeEach(module('ngHtml2js'));

  var element, scope, $compile;

  beforeEach(inject(function ($rootScope, _$compile_) {
    scope = $rootScope.$new();
    $compile = _$compile_;
  }));

  it('should render iForm template corectly', function () {
    element = angular.element('<i-form>Content</i-form>');
    scope.vm = {};
    element = $compile(element)(scope);
    scope.$digest();

    expect(element.attr('class')).toContain('form-horizontal');
    expect(element.text()).toEqual('Content');
  });
});
