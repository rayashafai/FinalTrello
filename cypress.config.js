import { defineConfig } from "cypress";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";

export default defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.feature",
    chromeWebSecurity: false,
    failOnStatusCode: false,
    
    async setupNodeEvents(on, config) {
      // هذه هي الطريقة الصحيحة للإصدار 24
      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config;
    },
    baseUrl: "https://trello.com/"
  },
  
  // أضف هذا القسم
  env: {
    stepDefinitions: "cypress/e2e/**/*.cy.{js,ts}"
  }
});