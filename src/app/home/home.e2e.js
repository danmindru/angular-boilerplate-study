var h = require('./helpers.protractor.js');

var homeHelper = function profilePageMethods(){
  this.goTo = function goToRoute(route){
    browser.driver.get(route);
  };

  this.homeRoute = browser.baseUrl + '/home';
};

var homeModule = new homeHelper();

describe("Home module: ", function(){
  it("should render text in the html <title> tag", function(){
    homeModule.goTo(homeModule.homeRoute);
    expect(h.binding('root.htmlTitle').getInnerHtml()).toBeTruthy();
  });

  afterEach(function() {
    h.detectSevere();
  });
});