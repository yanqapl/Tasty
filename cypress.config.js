const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://auth.abtasty.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
