/*
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity:false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
*/


//cambio la configuración para Correr specs (npx cypress run) & Uso de mocha para generar reportes
/*
const { defineConfig } = require("cypress");

module.exports = defineConfig({
   chromeWebSecurity:false,
   e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  video: true, // Guardar los videos
  screenshotOnRunFailure: true, // Guardar las capturas de pantallas de los tests que fallaron
  videosFolder: "cypress/videos", // Le decimos en que carpeta guardar los videos
  screenshotsFolder: "cypress/screenshots", // Le decimos en que carpeta guardar las capturas
  
});
*/

//cambio la configuración para correr mocha 

const { defineConfig } = require('cypress');

module.exports = defineConfig({
  chromeWebSecurity:false,
  reporter: 'cypress-mochawesome-reporter', // Definimos el reporte a utilizar 
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on); // Configura los eventos de Node para que el plugin funcione
    },
  },
});





