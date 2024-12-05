// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-iframe';

Cypress.Commands.add('loginAsAdmin', () => {
    cy.fixture('usuarios').then((usuarios) => {
        const adminUser = usuarios[0];
        cy.get('#username').type(adminUser.username);
        cy.get('#password').type(adminUser.password);
        cy.get('#btnEntrar').click();
    });
});

Cypress.Commands.add('fillOwnerDetails', (ownerData) => {
    cy.get('#contenido_txtCC').type(ownerData.cedula);
    cy.get('#contenido_txtnom1').type(ownerData.nombres[0]);
    cy.get('#contenido_txtnom2').type(ownerData.nombres[1]);
    cy.get('#contenido_txtnom3').type(ownerData.nombres[2]);
    cy.get('#contenido_txtNombreTienda').type(ownerData.tienda);
    cy.get('#contenido_txttelefono').type(ownerData.telefono);
    cy.get('#contenido_txtcelular').type(ownerData.celular);
});

Cypress.Commands.add('fillAddress', (address) => {
    cy.get('#select2-chosen-1').click();
    cy.get('#s2id_autogen1_search').type(address.carrera);
    cy.get('#select2-result-label-103').click();
    cy.get('#contenido_dir2').type(address.nro);
    cy.get('#contenido_dir5').type(address.letra);
    cy.get('#contenido_dir8').type(address.norte);
    cy.get('#contenido_txtCodPostal').type('005');
});

Cypress.Commands.add('selectDropdown', (selector, value) => {
    cy.get(selector).click();
    cy.get('.select2-input').type(value);
    cy.get('[id^="select2-result-label-"]').contains(value).click();
});

Cypress.Commands.add('clickIframeButton', (iframeSelector, buttonSelector) => {
    cy.get(iframeSelector)
      .should('be.visible') // Espera a que el iframe sea visible
      .its('0.contentDocument') // Accede al documento dentro del iframe
      .its('body') // Accede al cuerpo del iframe
      .find(buttonSelector) // Encuentra el botón dentro del iframe
      .click(); // Haz clic en el botón
});