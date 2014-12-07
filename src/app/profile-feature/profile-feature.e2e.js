var h = require('./helpers.protractor.js');

var profileHelper = function profilePageMethods(){
  this.goTo = function goToRoute(route){
    browser.driver.get(route);
  };

  this.homeRoute = browser.baseUrl + '/home';
  this.providerRoute = browser.baseUrl + '/provider';
  this.customerRoute = browser.baseUrl + '/customer';
};

var profileModule = new profileHelper();

describe("Profile module: ", function(){
  describe("Provider page", function(){
    it("should stay on provider route if providerId supplied", function(){
      profileModule.goTo(profileModule.providerRoute + '/any');
      expect(browser.getCurrentUrl()).toMatch(profileModule.providerRoute + '/any');
    });

    it("should redirect to '/home' if no providerId is supplied", function(){
      profileModule.goTo(profileModule.providerRoute);
      expect(browser.getCurrentUrl()).toMatch(profileModule.homeRoute);
    });

    afterEach(function() {
      h.detectSevere();
    });
  });

  describe("Customer page", function(){
    it("should stay on customer route if customerId supplied", function(){
      profileModule.goTo(profileModule.customerRoute + '/any');
      expect(browser.getCurrentUrl()).toMatch(profileModule.customerRoute + '/any');
    });

    it("should redirect to '/home' if no customerId is supplied", function(){
      profileModule.goTo(profileModule.customerRoute);
      expect(browser.getCurrentUrl()).toMatch(profileModule.homeRoute);
    });

    afterEach(function() {
      h.detectSevere();
    });
  });
});
