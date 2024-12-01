const { defineConfig } = require("cypress");
const fs = require("fs");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      screenshotOnRunFailure=true;
      const envConfig = JSON.parse(fs.readFileSync(`cypress-env-config.json`));
      const envToUse = config.env.PROJECT_ENV || "staging";

      if(!envConfig[envToUse]) {
        throw new Error(
          `Invalid PROJECT_ENV value: ${envToUse}.
              Please provide a valid environment`
        );
      }

      return envConfig[envToUse];

    },
  },
});
