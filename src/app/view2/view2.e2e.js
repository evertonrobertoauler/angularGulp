'use strict';

describe('view2', function () {

  beforeEach(function () {
    browser.get('#/view2');
  });

  it('should render view2 when user navigates to /view2', function () {
    expect(element.all(by.css('[ui-view] p')).first().getText()).
      toMatch(/partial for view 2/);
  });
});
