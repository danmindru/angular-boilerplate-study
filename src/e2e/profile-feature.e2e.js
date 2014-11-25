var helpers = require('./helpers.protractor.js');

var profileHelper = function profilePageMethods(){
  this.navigate = function navigateToRoute(){
    browser.driver.get(profilePage.moduleRoute);
  };

  this.moduleRoute = browser.baseUrl + '/provider/any';
};

var profilePage = new profileHelper();

describe("e2e profile module", function(){
  describe("/provider/any", function(){
    beforeEach(function () {
      profilePage.navigate();
    });

    it("route should be /provider/any and not redirect to /home", function(){
      expect(browser.getLocationAbsUrl()).toMatch('/provider/any');
    });

    afterEach(function() {
      helpers.detectSevere();
    });
  });
});
