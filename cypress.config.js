const { defineConfig } = require('cypress');

module.exports = defineConfig({
  retries: {
    runMode: 2,
    openMode: 0,
  },
  defaultCommandTimeout: 20000,
  requestTimeout: 20000,
  pageLoadTimeout: 50000,
  chromeWebSecurity: false,
  viewportWidth: 1920,
  viewportHeight: 1080,
  numTestsKeptInMemory: 1,
  experimentalMemoryManagement: true,
  experimentalWebKitSupport: true,
  videoCompression: false,
  video: false,
  e2e: {
    env: {
      testrail: {
        domain: `mba.testrail.io`,
        username: `test@mba.com`,
        password: `*HDadrftuy56ewadETd$#2`,
        runId: `0000`,
        screenshots: false
      },
      environment: 'Test',
      test: {
        baseUrl:`https://example.cypress.io/`,
        user: `testing@gmail.com`,
        pass: `9SRdfge5gdxfghngfN5C`,
      },
      prod: {
        baseUrl: 'https://example.cypress.io/',
      },
    },
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.family === 'electron') {
          launchOptions.args.push('--disable-dev-shm-usage');
          return launchOptions;
        }
      },
    )},
    specPattern:'**/e2e/**/*.spec.js'
  },
});