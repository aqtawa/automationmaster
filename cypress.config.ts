const { defineConfig } = require("cypress");
const { allureCypress } = require("allure-cypress/reporter");

module.exports = defineConfig({
  video: false,
  viewportHeight: 1080,
  viewportWidth: 1920,
  env: {
    allureResultsPath: 'allure-results',
    allure: true
  },
  e2e: {
    setupNodeEvents(on, config) {
      allureCypress(on, {
        resultsDir: "allure-results"
      });
    },
    baseUrl: 'https://stage.skies.land/',
    browser: 'chrome'
  },
});
