Cypress.on('uncaught:exception', (err) => {
    // Ignorar errores relacionados con jQuery no definido
    if (err.message.includes('$ is not defined')) {
        return false;
    }
    // Lanza otros errores
    throw err;
});


describe('Pruebas de testing para el login', () => {
    beforeEach(() => {
        cy.visit('http://managertr.tiendaregistrada.com.co/')
    });

        it('Debería ingresar con las credenciales válidas', () => {
            cy.fixture('usuarios').then((usuarios) => {
                const validUser = usuarios[0];
                cy.get('#username')
                .type(validUser.username);
                cy.get('#password')
                .type(validUser.password);

                cy.get('#btnEntrar').click();

                cy.url().should('include', '/Principal.aspx')
            });
        });

        it('No debería ingresar con username inválido y contraseña correcta', () => {
            cy.fixture('usuarios'). then((usuarios) => {
                const invalidUser = usuarios[1];
                cy.get('#username')
                .type(invalidUser.username);
                cy.get('#password')
                .type(invalidUser.password);

                cy.get('#btnEntrar').click();

                cy.url().should('include', '/')
            });
        }); 

        it('No debería ingresar con username válido y contraseña incorrecta', () => {
            cy.fixture('usuarios').then((usuarios) => {
                const invalidPass = usuarios[2];
                cy.get('#username')
                .type(invalidPass.username);
                cy.get('#password')
                .type(invalidPass.password)

                cy.get('#btnEntrar').click();

                cy.url().should('include', '/')
            })
        })
    });
