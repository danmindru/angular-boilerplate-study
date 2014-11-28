exports.config = {
  sauceUser: SAUCE_USERNAME,
  sauceKey: SAUCE_ACCESS_KEY,
  specs: ['../build/src/**/*.protractor.js', '../build/src/**/*.e2e.js'],
  capabilities: {
    browserName: 'chrome',
    version: '',
    platform: 'ANY'
  },
};