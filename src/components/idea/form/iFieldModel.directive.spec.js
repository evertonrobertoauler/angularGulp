'use strict';

describe('Directive: iFieldModel', function () {

  beforeEach(module('idea.form'));
  beforeEach(module('ngHtml2js'));

  var element, scope, $compile;

  beforeEach(inject(function ($rootScope, _$compile_) {
    scope = $rootScope.$new();
    $compile = _$compile_;
  }));

  it('should iFieldModel associate ng-model with iField and iForm directives without errors', function () {
    element = angular.element('<i-form><i-field><input type="text" ng-model="test" i-field-model></i-field></i-form>');
    element = $compile(element)(scope);
    scope.$digest();

    expect(element.find('.form-control').length).toEqual(1);
  });

  it('should not add form-control class on input[checkbox]', function () {
    element = angular.element('<i-form><i-field><input type="checkbox" ng-model="test" i-field-model></i-field></i-form>');
    element = $compile(element)(scope);
    scope.$digest();

    expect(element.find('.form-control').length).toEqual(0);
  });

  it('should not add form-control class on input[radio]', function () {
    element = angular.element('<i-form><i-field><input type="radio" ng-model="test" i-field-model></i-field></i-form>');
    element = $compile(element)(scope);
    scope.$digest();

    expect(element.find('.form-control').length).toEqual(0);
  });
});
