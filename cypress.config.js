import { defineConfig } from "cypress";
import mochawesomeReporter from "cypress-mochawesome-reporter/plugin.js";
import installLogsPrinter from "cypress-log-to-output";

export default defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: true,
    charts: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      mochawesomeReporter(on); // Conecta el plugin
      return config;
      installLogsPrinter(on);
    },
    baseUrl: "http://localhost:49923/",
    "chromeWebSecurity": false,
    specPattern: "cypress/e2e/**/*.cy.{js,ts}",
    supportFile: "cypress/support/e2e.js",
    video: true, // Habilita grabación de video
    screenshotOnRunFailure: true,
  },
});
