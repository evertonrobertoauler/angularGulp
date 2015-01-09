'use strict';

describe('myApp.view1 module', function () {

  beforeEach(module('myApp.view1'));

  describe('view1 controller', function () {

    it('should ....', inject(function ($controller, $window) {
      //spec body
      var view1Ctrl = $controller('View1Ctrl');
      expect(view1Ctrl).toBeDefined();

      spyOn($window, 'alert').and.callThrough();
      view1Ctrl.submit();
      expect($window.alert).toHaveBeenCalledWith('lala');
    }));

  });
});
