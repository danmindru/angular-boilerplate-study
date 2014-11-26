var helpers = require('./helpers.protractor.js');

var profileHelper = function profilePageMethods(){
  this.goTo = function goToRoute(route){
    browser.driver.get(route);
  };

  this.homeRoute = browser.baseUrl + '/home';
  this.providerRoute = browser.baseUrl + '/provider';
  this.customerRoute = browser.baseUrl + '/customer';
};

var profilePage = new profileHelper();

describe("Profile module: ", function(){
  describe("Provider page", function(){
    it("should stay on provider route if providerId supplied", function(){
      profilePage.goTo(profilePage.providerRoute + '/any');
      expect(browser.getCurrentUrl()).toMatch(profilePage.providerRoute + '/any');
    });

    it("should redirect to '/home' if no providerId is supplied", function(){
      profilePage.goTo(profilePage.providerRoute);
      expect(browser.getCurrentUrl()).toMatch(profilePage.homeRoute);
    });

    afterEach(function() {
      helpers.detectSevere();
    });
  });

  describe("Customer page", function(){
    it("should stay on customer route if customerId supplied", function(){
      profilePage.goTo(profilePage.customerRoute + '/any');
      expect(browser.getCurrentUrl()).toMatch(profilePage.customerRoute + '/any');
    });

    it("should redirect to '/home' if no customerId is supplied", function(){
      profilePage.goTo(profilePage.customerRoute);
      expect(browser.getCurrentUrl()).toMatch(profilePage.homeRoute);
    });

    afterEach(function() {
      helpers.detectSevere();
    });
  });
});
