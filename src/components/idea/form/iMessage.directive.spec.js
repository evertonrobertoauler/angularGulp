'use strict';

describe('Directive: iMessage', function () {

  beforeEach(module('idea.form'));
  beforeEach(module('ngHtml2js'));

  var element, scope, $compile;

  beforeEach(inject(function ($rootScope, _$compile_) {
    scope = $rootScope.$new();
    $compile = _$compile_;
  }));

  it('should render iMessage template corectly', function () {
    element = angular.element('<i-form><i-field><i-message type="required">Test</i-message></i-field></i-form>');
    scope.vm = {};
    element = $compile(element)(scope);
    scope.$digest();

    var iField = element.children().children().scope().vm;
    expect(iField.showError).toEqual(jasmine.any(Function));
    expect(iField.registerErrorType).toEqual(jasmine.any(Function));

    element = element.children().children().children();
    expect(element.text()).toEqual('Test');
  });
});
