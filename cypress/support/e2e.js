// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

Cypress.on('window:console', (event) => {
    if (event.type === 'error') {
    console.error('Error de consola capturado:', event.message);
    }
});
cy.on('window:alert', (text) => {
    cy.log('Se lanzó un alert:', text);
});

cy.on('window:confirm', (text) => {
    cy.log('Se lanzó un confirm:', text);
    return true; // Acepta automáticamente los confirms
});

// Alternatively you can use CommonJS syntax:
// require('./commands')