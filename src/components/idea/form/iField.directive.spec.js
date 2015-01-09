'use strict';

describe('Directive: iField', function () {

  beforeEach(module('idea.form'));
  beforeEach(module('ngHtml2js'));

  var element, scope, $compile;

  beforeEach(inject(function ($rootScope, _$compile_) {
    scope = $rootScope.$new();
    $compile = _$compile_;
  }));

  it('should render iField template corectly', function () {
    element = angular.element('<i-form><i-field label="Test">Content</i-field></i-form>');
    scope.vm = {};
    element = $compile(element)(scope);
    scope.$digest();

    var iField = element.children();

    scope = iField.children().scope();

    expect(scope.vm.registerForm).toEqual(jasmine.any(Function));
    expect(scope.vm.showErrors).toEqual(jasmine.any(Function));

    expect(iField.find('label').text()).toEqual('Test');
    expect(iField.find('div').text()).toEqual('Content');
  });
});
