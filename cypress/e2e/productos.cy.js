Cypress.on('uncaught:exception', (err) => {
    if (err.message.includes('$ is not defined')) {
        return false; // Ignorar errores específicos
    }
    throw err; // Lanzar otros errores
});  
Cypress.on('uncaught:TypeError', (err) => {
    if (err.message.includes('Login')) {
        return false; // Ignorar errores específicos
    }
    throw err; // Lanzar otros errores
});  

describe('Pruebas para crear productos', () => {
    beforeEach(() => {
        cy.visit('http://localhost:49923/');
        cy.fixture('usuarios').then((usuarios) => {
            const validUser = usuarios[0];
            
    
            cy.get('#username')
            .type(validUser.username);
            cy.get('#password')
            .type(validUser.password);
        });

        cy.get('#btnEntrar').click();

        cy.url().should('include', '/Principal.aspx')
        cy.visit('http://localhost:49923/Maestros/Productos/Maestro/')
});
    it.only('Debería guardar producto con normalidad', () => {
        const codB = generarNumeroAleatorio();
        const num = numP();
        const num2 = numP2();

         // Haz clic en el botón para abrir el explorador de archivos (esto puede ser opcional)
    cy.wait(1500).get('button.browse.btn.btn-primary.btn-block').click();
    cy.get('input[type="file"]').eq(0)
    .selectFile('cypress/fixtures/Screenshots/Captura de pantalla 2024-11-25 093946.png', { force: true });
    // Verifica que el archivo fue cargado correctamente (esto es opcional)
    cy.get('input[type="file"]').should('have.value', 'C:\\fakepath\\Captura de pantalla 2024-11-25 093946.png');

    cy.get('button.browse.btn.btn-primary.btn-block').click();
    cy.get('input[type="file"]').eq(1)
    .selectFile('cypress/fixtures/Screenshots/Captura de pantalla 2024-11-25 093946.png', { force: true });
    // Verifica que el archivo fue cargado correctamente (esto es opcional)
    cy.get('input[type="file"]').should('have.value', 'C:\\fakepath\\Captura de pantalla 2024-11-25 093946.png');

    cy.get('#contenido_CodigoDeBarras').type(codB)

    cy.get('#select2-chosen-1').click()
    cy.get('#s2id_autogen1_search').type('pasabocas').type('{backspace}').type('s surt')
    cy.get('[id^="select2-result-label-"]').click();

    cy.wait(1000).get('#select2-chosen-3').click()
    cy.get('#s2id_autogen3_search').type('pasa').type('{backspace}').type('abo').type('{backspace}').type('oca')
    cy.get('[id^="select2-result-label-"]').eq(0).click();
                                    
    cy.get('#select2-chosen-28').click()
    cy.wait(1000).get('#s2id_autogen28_search').type('golpe con').type('{backspace}').wait(2000).type('n todo')
    cy.get('[id^="select2-result-label-"]').eq(0).click();

    cy.get('#select2-chosen-8').click()
    cy.get('#s2id_autogen8_search').type('BAR-BQ')
    cy.get('[id^="select2-result-label-"]').click();

    cy.get('#select2-chosen-9').click()
    cy.get('#s2id_autogen9_search').type('BOLSA')
    cy.get('[id^="select2-result-label-"]').click();
    
    cy.get('#contenido_txtCantidades').type(num);
    
    cy.get('#contenido_txtPeso').type(num2);
    
    cy.get('#select2-chosen-10').click()
    cy.get('#s2id_autogen10_search').type('gr')
    cy.get('[id^="select2-result-label-"]').click();

    cy.get('#contenido_guardarBtn').click()
    cy.wait(1500); 
    cy.get('.confirm').should('be.visible').and('not.be.disabled').trigger('mouseover').click({ force: true });
    cy.wait(4000); 
    cy.get('.confirm').should('be.visible').and('not.be.disabled').trigger('mouseover').click({ force: true });
    
    // cy.get('button.confirm').should('be.visible').and('not.be.disabled').trigger('mouseover').click({ force: true });

});

    it('Combinaciones #1 cambios en la selección de la dirección', () => {
        const cc = generarNumeroAleatorio();
        const tl1 = generarNumeroAleatorio();
        const tl2 = generarNumeroAleatorio();
        const nom = generarPalabraAleatoria();
        const ap = generarPalabraAleatoria();
        const ap2 = generarPalabraAleatoria();
        const nomt = generarPalabraAleatoria();
        const num = numP();

            cy.get('#contenido_txtCC').type(cc)
            cy.get('#contenido_txtnom1').type(nom)
            cy.get('#contenido_txtnom2').type(ap)
            cy.get('#contenido_txtnom3').type(ap2)
            cy.get('#contenido_txtNombreTienda').type(nomt)
            cy.get('#contenido_txttelefono').type(tl1)
            cy.get('#contenido_txtcelular').type(tl2)

            // DIRECCION
        cy.fixture('coord').then((coord) => {
            const direccion = coord[0];
            // Seleccionar carrera
            cy.get('#select2-chosen-1').click()
            cy.get('#s2id_autogen1_search').type('Autopista')
            cy.get('[id^="select2-result-label-"]').click()
            // Nro carrera
            cy.get('#contenido_dir2').type(direccion.nro)
            // Seleccionar letra
            cy.get('#select2-chosen-2').click()
            cy.get('#s2id_autogen2_search').type('AA')
            cy.get('[id^="select2-result-label-"]').click()
            // Seleccionar norte, sur, etc
            cy.get('#select2-chosen-3').click()
            cy.get('#s2id_autogen3_search').type('ESTE')
            cy.get('[id^="select2-result-label-"]').eq(0).click()
            // Seleccionar otra letra
            cy.get('#select2-chosen-4').click()
            cy.get('#s2id_autogen4_search').type('FB')
            cy.get('[id^="select2-result-label-"]').click()
            // Escribir numero
        cy.get('#contenido_dir5').type('76')
            // Seleccionar letras
        cy.get('#select2-chosen-5').click()
        cy.get('#s2id_autogen5_search').type('F')
        cy.get('[id^="select2-result-label-"]').eq(0).click()
        // Escribir numero
        cy.get('#contenido_dir8').type('30')
        // Codigo postal
        cy.get('#contenido_txtCodPostal').type('005')

        // Seleccion departamento
        cy.get('#select2-chosen-7').click()
        cy.get('#s2id_autogen7_search').type('Antioquia')
        cy.get('[id^="select2-result-label-"]').click()
    // Selecciona el municipio
        cy.get('#select2-chosen-8').click()
        cy.get('#s2id_autogen8_search').type('Medellin').type('{backspace}').type('n')
        cy.get('[id^="select2-result-label-"]').click();
        // Seleccion zona
        cy.get('#select2-chosen-9').click()
        cy.get('#s2id_autogen9_search').type('occidente Medellin')
        cy.get('[id^="select2-result-label-"]').click()
        // Seleccion comuna
        cy.get('#select2-chosen-10').click()
        cy.get('#s2id_autogen10_search').type('7')
        cy.get('[id^="select2-result-label-"]').click()
        // Seleccion barrio
        cy.get('#select2-chosen-11').click()
        cy.get('#s2id_autogen11_search').eq(0).type('Aures Nº 1').type('{backspace}').type('1')
        cy.get('[id^="select2-result-label-"]').click()
        // Seleccion sector
        cy.get('#select2-chosen-12').click()
        cy.get('#s2id_autogen12_search').type('Comercial')
        cy.get('[id^="select2-result-label-"]').click()
        // Seleccion estrato
        cy.get('#select2-chosen-13').click()
        cy.get('#s2id_autogen13_search').type('3')
        cy.get('[id^="select2-result-label-"]').click()
        // Seleccion categoria
        cy.get('#select2-chosen-15').click()
        cy.get('#s2id_autogen15_search').type('Minimercado')
        cy.get('[id^="select2-result-label-"]').click()
        // Seleccion ubicacion
        cy.get('#select2-chosen-16').click()
        cy.get('#s2id_autogen16_search').type('esquina')
        cy.get('[id^="select2-result-label-"]').click()
        // Seleccion regimen
        cy.get('#select2-chosen-17').click()
        cy.get('#s2id_autogen17_search').type('comun')
        cy.get('[id^="select2-result-label-"]').click()

        // checkBoxes
        cy.get('input#chklocalp').click()
        cy.get('input#chkCredito').click()
        // Ingresa la hora aleatoria
        const randomHourA = Math.floor(Math.random() * 12).toString().padStart(2, '0'); // Hora entre 1 y 12
        const randomMinuteA = Math.floor(Math.random() * 59).toString().padStart(2, '0'); // Minuto entre 00 y 59
        const randomTimeA = `${randomHourA}:${randomMinuteA}`; // Formato HH:MM
        cy.get('#horaApertura').type(randomTimeA).trigger('change');

        const randomHourC = (Math.floor(Math.random() * 11) + 13).toString().padStart(2, '0'); // Hora entre 13 y 24
        const randomMinuteC = Math.floor(Math.random() * 59).toString().padStart(2, '0'); // Minuto entre 00 y 59
        const randomTimeC = `${randomHourC}:${randomMinuteC}`; // Formato HH:MM
        cy.get('#horaCierre').type(randomTimeC).trigger('change');

        // Verifica que la hora se haya establecido correctamente
        cy.get('#horaApertura').should('have.value', randomTimeA);
        cy.get('#horaCierre').should('have.value', randomTimeC);

        // Dias apertura
        cy.get('#s2id_ddlDias').click()
        cy.get('ul.select2-choices').eq(0)
        cy.get('[id^="select2-result-label-"]').eq(0).click()

        // Numero personas
        cy.get('#numPersonas').type(num)
        // Correo electronico
        cy.get('#CorreoElectronico').type('orlandopz@gmail.com')
        // LATITUD
        cy.get('#txtLatitud').type('6.312563')
        // LONGITUD
        cy.get('#txtLongitud').type('-75.575960')
        // METROS EXACTOS
        cy.get('#txtMetrosCuadrados').type('25.8')
        // RESPONSABLE TIENDA
        cy.get('#select2-chosen-19').click()
        cy.get('#s2id_autogen19_search').type('William')
        cy.get('[id^="select2-result-label-"]').click()
        // SUPERVISOR ZONA
        cy.get('#select2-chosen-20').click()
        cy.get('#s2id_autogen20_search').type('William')
        cy.get('[id^="select2-result-label-"]').click()

        // Seleccionar el primer archivo
        cy.get('input[type="file"]').eq(0)
        .selectFile('../test_manager/cypress/fixtures/Screenshots/Captura de pantalla 2024-11-25 093946.png', { force: true });

        // Verificar que el archivo fue seleccionado correctamente
        cy.get('input[type="file"]').eq(0)
        .should('have.value', 'C:\\fakepath\\Captura de pantalla 2024-11-25 093946.png');  

        // Seleccionar el segundo archivo
        cy.get('input[type="file"]').eq(1)
        .selectFile('../test_manager/cypress/fixtures/Screenshots/Captura de pantalla 2024-11-25 093946.png', { force: true });

        // Verificar que el archivo fue seleccionado correctamente
        cy.get('input[type="file"]').eq(1)
        .should('have.value', 'C:\\fakepath\\Captura de pantalla 2024-11-25 093946.png');  

        // Imprime el cuerpo de la solicitud enviada por Cypress
        cy.intercept('POST', '/Maestros/Tiendas/WS.asmx/ingresartiendas', (req) => {
            console.log('Datos enviados:', req.body);
        }).as('guardar');
        cy.get('#contenido_guardarBtn').click({ force: true });
        cy.wait('@guardar').then((interception) => {
            console.log('Respuesta del servidor:', interception.response);
        });
        
        

    // // Esperar a que se capture la solicitud interceptada
    // cy.wait('@guardarTienda').then((interception) => {
    //     // Imprimir detalles de la solicitud y respuesta
    //     console.log('Datos enviados:', interception.request.body); // Muestra el cuerpo de la solicitud
    //     console.log('Cabeceras:', interception.request.headers); // Muestra las cabeceras
    //     console.log('URL:', interception.request.url); // Muestra la URL
    //     console.log('Respuesta:', interception.response.body);
    });
    });

    it('Combinaciones #2 cambios en la selección municipio', () => {
        const cc = generarNumeroAleatorio();
        const tl1 = generarNumeroAleatorio();
        const tl2 = generarNumeroAleatorio();
        const nom = generarPalabraAleatoria();
        const ap = generarPalabraAleatoria();
        const ap2 = generarPalabraAleatoria();
        const nomt = generarPalabraAleatoria();
        const num = numP();

            cy.get('#contenido_txtCC').type(cc)
            cy.get('#contenido_txtnom1').type(nom)
            cy.get('#contenido_txtnom2').type(ap)
            cy.get('#contenido_txtnom3').type(ap2)
            cy.get('#contenido_txtNombreTienda').type(nomt)
            cy.get('#contenido_txttelefono').type(tl1)
            cy.get('#contenido_txtcelular').type(tl2)

            // DIRECCION
        cy.fixture('coord').then((coord) => {
            const direccion = coord[0];
            // Seleccionar carrera
            cy.get('#select2-chosen-1').click()
            cy.get('#s2id_autogen1_search').type('Autopista')
            cy.get('[id^="select2-result-label-"]').click()
            // Nro carrera
            cy.get('#contenido_dir2').type(direccion.nro)
            // Seleccionar letra
            cy.get('#select2-chosen-2').click()
            cy.get('#s2id_autogen2_search').type('AA')
            cy.get('[id^="select2-result-label-"]').click()
            // Seleccionar norte, sur, etc
            cy.get('#select2-chosen-3').click()
            cy.get('#s2id_autogen3_search').type('ESTE')
            cy.get('[id^="select2-result-label-"]').eq(0).click()
            // Seleccionar otra letra
            cy.get('#select2-chosen-4').click()
            cy.get('#s2id_autogen4_search').type('FB')
            cy.get('[id^="select2-result-label-"]').click()
            // Escribir numero
        cy.get('#contenido_dir5').type('76')
            // Seleccionar letras
        cy.get('#select2-chosen-5').click()
        cy.get('#s2id_autogen5_search').type('F')
        cy.get('[id^="select2-result-label-"]').eq(0).click()
        // Escribir numero
        cy.get('#contenido_dir8').type('30')
        // Codigo postal
        cy.get('#contenido_txtCodPostal').type('005')

        // Seleccion departamento
        cy.get('#select2-chosen-7').click()
        cy.get('#s2id_autogen7_search').type('Antioquia')
        cy.get('[id^="select2-result-label-"]').click()
    // Selecciona el municipio
        cy.get('#select2-chosen-8').click()
        cy.get('#s2id_autogen8_search').type('San Jose').type('{backspace}').type('e')
        cy.get('[id^="select2-result-label-"]').click();
        // Seleccion zona
        cy.get('#select2-chosen-9').click()
        cy.get('#s2id_autogen9_search').type('occidente Medellin')
        cy.get('[id^="select2-result-label-"]').click()
        // Seleccion comuna
        cy.get('#select2-chosen-10').click()
        cy.get('#s2id_autogen10_search').type('unico').type('{backspace}') // Borra la última letra
        .wait(500).type('o').get('[id^="select2-result-label-"]').should('be.visible').click()
        // Seleccion barrio
        cy.get('#select2-chosen-11').click()
        cy.get('#s2id_autogen11_search').type('unico').type('{backspace}') // Borra la última letra
        .wait(500).type('o').get('[id^="select2-result-label-"]').should('be.visible').click()
        // Seleccion sector
        cy.get('#select2-chosen-12').click()
        cy.get('#s2id_autogen12_search').type('Comercial')
        cy.get('[id^="select2-result-label-"]').click()
        // Seleccion estrato
        cy.get('#select2-chosen-13').click()
        cy.get('#s2id_autogen13_search').type('3')
        cy.get('[id^="select2-result-label-"]').click()
        // Seleccion categoria
        cy.get('#select2-chosen-15').click()
        cy.get('#s2id_autogen15_search').type('Minimercado')
        cy.get('[id^="select2-result-label-"]').click()
        // Seleccion ubicacion
        cy.get('#select2-chosen-16').click()
        cy.get('#s2id_autogen16_search').type('esquina')
        cy.get('[id^="select2-result-label-"]').click()
        // Seleccion regimen
        cy.get('#select2-chosen-17').click()
        cy.get('#s2id_autogen17_search').type('comun')
        cy.get('[id^="select2-result-label-"]').click()

        // checkBoxes
        cy.get('input#chklocalp').click()
        cy.get('input#chkCredito').click()
        // Ingresa la hora aleatoria
        const randomHourA = Math.floor(Math.random() * 12).toString().padStart(2, '0'); // Hora entre 1 y 12
        const randomMinuteA = Math.floor(Math.random() * 59).toString().padStart(2, '0'); // Minuto entre 00 y 59
        const randomTimeA = `${randomHourA}:${randomMinuteA}`; // Formato HH:MM
        cy.get('#horaApertura').type(randomTimeA).trigger('change');

        const randomHourC = (Math.floor(Math.random() * 11) + 13).toString().padStart(2, '0'); // Hora entre 13 y 24
        const randomMinuteC = Math.floor(Math.random() * 59).toString().padStart(2, '0'); // Minuto entre 00 y 59
        const randomTimeC = `${randomHourC}:${randomMinuteC}`; // Formato HH:MM
        cy.get('#horaCierre').type(randomTimeC).trigger('change');

        // Verifica que la hora se haya establecido correctamente
        cy.get('#horaApertura').should('have.value', randomTimeA);
        cy.get('#horaCierre').should('have.value', randomTimeC);

        // Dias apertura
        cy.get('#s2id_ddlDias').click()
        cy.get('ul.select2-choices').eq(0)
        cy.get('[id^="select2-result-label-"]').eq(0).click()

        // Numero personas
        cy.get('#numPersonas').type(num)
        // Correo electronico
        cy.get('#CorreoElectronico').type('orlandopz@gmail.com')
        // LATITUD
        cy.get('#txtLatitud').type('6.312563')
        // LONGITUD
        cy.get('#txtLongitud').type('-75.575960')
        // METROS EXACTOS
        cy.get('#txtMetrosCuadrados').type('25.8')
        // RESPONSABLE TIENDA
        cy.get('#select2-chosen-19').click()
        cy.get('#s2id_autogen19_search').type('William')
        cy.get('[id^="select2-result-label-"]').click()
        // SUPERVISOR ZONA
        cy.get('#select2-chosen-20').click()
        cy.get('#s2id_autogen20_search').type('William')
        cy.get('[id^="select2-result-label-"]').click()

        // Seleccionar el primer archivo
        cy.get('input[type="file"]').eq(0)
        .selectFile('../test_manager/cypress/fixtures/Screenshots/Captura de pantalla 2024-11-25 093946.png', { force: true });

        // Verificar que el archivo fue seleccionado correctamente
        cy.get('input[type="file"]').eq(0)
        .should('have.value', 'C:\\fakepath\\Captura de pantalla 2024-11-25 093946.png');  

        // Seleccionar el segundo archivo
        cy.get('input[type="file"]').eq(1)
        .selectFile('../test_manager/cypress/fixtures/Screenshots/Captura de pantalla 2024-11-25 093946.png', { force: true });

        // Verificar que el archivo fue seleccionado correctamente
        cy.get('input[type="file"]').eq(1)
        .should('have.value', 'C:\\fakepath\\Captura de pantalla 2024-11-25 093946.png');  

        // Imprime el cuerpo de la solicitud enviada por Cypress
        cy.intercept('POST', '/Maestros/Tiendas/WS.asmx/ingresartiendas', (req) => {
            console.log('Datos enviados:', req.body);
        }).as('guardar');
        cy.get('#contenido_guardarBtn').click({ force: true });
        cy.wait('@guardar').then((interception) => {
            console.log('Respuesta del servidor:', interception.response);
        });
        
        

    // // Esperar a que se capture la solicitud interceptada
    // cy.wait('@guardarTienda').then((interception) => {
    //     // Imprimir detalles de la solicitud y respuesta
    //     console.log('Datos enviados:', interception.request.body); // Muestra el cuerpo de la solicitud
    //     console.log('Cabeceras:', interception.request.headers); // Muestra las cabeceras
    //     console.log('URL:', interception.request.url); // Muestra la URL
    //     console.log('Respuesta:', interception.response.body);
    });
    });

    it('Combinaciones #3 cambios en la selección categoria (Tienda con reja)', () => {
        const cc = generarNumeroAleatorio();
        const tl1 = generarNumeroAleatorio();
        const tl2 = generarNumeroAleatorio();
        const nom = generarPalabraAleatoria();
        const ap = generarPalabraAleatoria();
        const ap2 = generarPalabraAleatoria();
        const nomt = generarPalabraAleatoria();
        const num = numP();

            cy.get('#contenido_txtCC').type(cc)
            cy.get('#contenido_txtnom1').type(nom)
            cy.get('#contenido_txtnom2').type(ap)
            cy.get('#contenido_txtnom3').type(ap2)
            cy.get('#contenido_txtNombreTienda').type(nomt)
            cy.get('#contenido_txttelefono').type(tl1)
            cy.get('#contenido_txtcelular').type(tl2)

            // DIRECCION
        cy.fixture('coord').then((coord) => {
            const direccion = coord[0];
            // Seleccionar carrera
            cy.get('#select2-chosen-1').click()
            cy.get('#s2id_autogen1_search').type('Autopista')
            cy.get('[id^="select2-result-label-"]').click()
            // Nro carrera
            cy.get('#contenido_dir2').type(direccion.nro)
            // Seleccionar letra
            cy.get('#select2-chosen-2').click()
            cy.get('#s2id_autogen2_search').type('AA')
            cy.get('[id^="select2-result-label-"]').click()
            // Seleccionar norte, sur, etc
            cy.get('#select2-chosen-3').click()
            cy.get('#s2id_autogen3_search').type('ESTE')
            cy.get('[id^="select2-result-label-"]').eq(0).click()
            // Seleccionar otra letra
            cy.get('#select2-chosen-4').click()
            cy.get('#s2id_autogen4_search').type('FB')
            cy.get('[id^="select2-result-label-"]').click()
            // Escribir numero
        cy.get('#contenido_dir5').type('76')
            // Seleccionar letras
        cy.get('#select2-chosen-5').click()
        cy.get('#s2id_autogen5_search').type('F')
        cy.get('[id^="select2-result-label-"]').eq(0).click()
        // Escribir numero
        cy.get('#contenido_dir8').type('30')
        // Codigo postal
        cy.get('#contenido_txtCodPostal').type('005')

        // Seleccion departamento
        cy.get('#select2-chosen-7').click()
        cy.get('#s2id_autogen7_search').type('Antioquia')
        cy.get('[id^="select2-result-label-"]').click()
    // Selecciona el municipio
        cy.get('#select2-chosen-8').click()
        cy.get('#s2id_autogen8_search').type('San Jose').type('{backspace}').type('e')
        cy.get('[id^="select2-result-label-"]').click();
        // Seleccion zona
        cy.get('#select2-chosen-9').click()
        cy.get('#s2id_autogen9_search').type('occidente Medellin')
        cy.get('[id^="select2-result-label-"]').click()
        // Seleccion comuna
        cy.get('#select2-chosen-10').click()
        cy.get('#s2id_autogen10_search').type('unico').type('{backspace}') // Borra la última letra
        .wait(500).type('o').get('[id^="select2-result-label-"]').should('be.visible').click()
        // Seleccion barrio
        cy.get('#select2-chosen-11').click()
        cy.get('#s2id_autogen11_search').type('unico').type('{backspace}') // Borra la última letra
        .wait(500).type('o').get('[id^="select2-result-label-"]').should('be.visible').click()
        // Seleccion sector
        cy.get('#select2-chosen-12').click()
        cy.get('#s2id_autogen12_search').type('Comercial')
        cy.get('[id^="select2-result-label-"]').click()
        // Seleccion estrato
        cy.get('#select2-chosen-13').click()
        cy.get('#s2id_autogen13_search').type('3')
        cy.get('[id^="select2-result-label-"]').click()
        // Seleccion categoria
        cy.get('#select2-chosen-15').click()
        cy.get('#s2id_autogen15_search').type('Tienda con re')
        cy.get('[id^="select2-result-label-"]').click()
        // Seleccion ubicacion
        cy.get('#select2-chosen-16').click()
        cy.get('#s2id_autogen16_search').type('esquina')
        cy.get('[id^="select2-result-label-"]').click()
        // Seleccion regimen
        cy.get('#select2-chosen-17').click()
        cy.get('#s2id_autogen17_search').type('comun')
        cy.get('[id^="select2-result-label-"]').click()

        // checkBoxes
        cy.get('input#chklocalp').click()
        cy.get('input#chkCredito').click()
        // Ingresa la hora aleatoria
        const randomHourA = Math.floor(Math.random() * 12).toString().padStart(2, '0'); // Hora entre 1 y 12
        const randomMinuteA = Math.floor(Math.random() * 59).toString().padStart(2, '0'); // Minuto entre 00 y 59
        const randomTimeA = `${randomHourA}:${randomMinuteA}`; // Formato HH:MM
        cy.get('#horaApertura').type(randomTimeA).trigger('change');

        const randomHourC = (Math.floor(Math.random() * 11) + 13).toString().padStart(2, '0'); // Hora entre 13 y 24
        const randomMinuteC = Math.floor(Math.random() * 59).toString().padStart(2, '0'); // Minuto entre 00 y 59
        const randomTimeC = `${randomHourC}:${randomMinuteC}`; // Formato HH:MM
        cy.get('#horaCierre').type(randomTimeC).trigger('change');

        // Verifica que la hora se haya establecido correctamente
        cy.get('#horaApertura').should('have.value', randomTimeA);
        cy.get('#horaCierre').should('have.value', randomTimeC);

        // Dias apertura
        cy.get('#s2id_ddlDias').click()
        cy.get('ul.select2-choices').eq(0)
        cy.get('[id^="select2-result-label-"]').eq(0).click()

        // Numero personas
        cy.get('#numPersonas').type(num)
        // Correo electronico
        cy.get('#CorreoElectronico').type('orlandopz@gmail.com')
        // LATITUD
        cy.get('#txtLatitud').type('6.312563')
        // LONGITUD
        cy.get('#txtLongitud').type('-75.575960')
        // METROS EXACTOS
        cy.get('#txtMetrosCuadrados').type('25.8')
        // RESPONSABLE TIENDA
        cy.get('#select2-chosen-19').click()
        cy.get('#s2id_autogen19_search').type('William')
        cy.get('[id^="select2-result-label-"]').click()
        // SUPERVISOR ZONA
        cy.get('#select2-chosen-20').click()
        cy.get('#s2id_autogen20_search').type('William')
        cy.get('[id^="select2-result-label-"]').click()

        // Seleccionar el primer archivo
        cy.get('input[type="file"]').eq(0)
        .selectFile('../test_manager/cypress/fixtures/Screenshots/Captura de pantalla 2024-11-25 093946.png', { force: true });

        // Verificar que el archivo fue seleccionado correctamente
        cy.get('input[type="file"]').eq(0)
        .should('have.value', 'C:\\fakepath\\Captura de pantalla 2024-11-25 093946.png');  

        // Seleccionar el segundo archivo
        cy.get('input[type="file"]').eq(1)
        .selectFile('../test_manager/cypress/fixtures/Screenshots/Captura de pantalla 2024-11-25 093946.png', { force: true });

        // Verificar que el archivo fue seleccionado correctamente
        cy.get('input[type="file"]').eq(1)
        .should('have.value', 'C:\\fakepath\\Captura de pantalla 2024-11-25 093946.png');  

        // Imprime el cuerpo de la solicitud enviada por Cypress
        cy.intercept('POST', '/Maestros/Tiendas/WS.asmx/ingresartiendas', (req) => {
            console.log('Datos enviados:', req.body);
        }).as('guardar');
        cy.get('#contenido_guardarBtn').click({ force: true });
        cy.wait('@guardar').then((interception) => {
            console.log('Respuesta del servidor:', interception.response);
        });
        
        

    // // Esperar a que se capture la solicitud interceptada
    // cy.wait('@guardarTienda').then((interception) => {
    //     // Imprimir detalles de la solicitud y respuesta
    //     console.log('Datos enviados:', interception.request.body); // Muestra el cuerpo de la solicitud
    //     console.log('Cabeceras:', interception.request.headers); // Muestra las cabeceras
    //     console.log('URL:', interception.request.url); // Muestra la URL
    //     console.log('Respuesta:', interception.response.body);
    });
    });

    it('Combinaciones #3 cambios en la selección categoria (Tienda mostrador)', () => {
        const cc = generarNumeroAleatorio();
        const tl1 = generarNumeroAleatorio();
        const tl2 = generarNumeroAleatorio();
        const nom = generarPalabraAleatoria();
        const ap = generarPalabraAleatoria();
        const ap2 = generarPalabraAleatoria();
        const nomt = generarPalabraAleatoria();
        const num = numP();

            cy.get('#contenido_txtCC').type(cc)
            cy.get('#contenido_txtnom1').type(nom)
            cy.get('#contenido_txtnom2').type(ap)
            cy.get('#contenido_txtnom3').type(ap2)
            cy.get('#contenido_txtNombreTienda').type(nomt)
            cy.get('#contenido_txttelefono').type(tl1)
            cy.get('#contenido_txtcelular').type(tl2)

            // DIRECCION
        cy.fixture('coord').then((coord) => {
            const direccion = coord[0];
            // Seleccionar carrera
            cy.get('#select2-chosen-1').click()
            cy.get('#s2id_autogen1_search').type('Autopista')
            cy.get('[id^="select2-result-label-"]').click()
            // Nro carrera
            cy.get('#contenido_dir2').type(direccion.nro)
            // Seleccionar letra
            cy.get('#select2-chosen-2').click()
            cy.get('#s2id_autogen2_search').type('AA')
            cy.get('[id^="select2-result-label-"]').click()
            // Seleccionar norte, sur, etc
            cy.get('#select2-chosen-3').click()
            cy.get('#s2id_autogen3_search').type('ESTE')
            cy.get('[id^="select2-result-label-"]').eq(0).click()
            // Seleccionar otra letra
            cy.get('#select2-chosen-4').click()
            cy.get('#s2id_autogen4_search').type('FB')
            cy.get('[id^="select2-result-label-"]').click()
            // Escribir numero
        cy.get('#contenido_dir5').type('76')
            // Seleccionar letras
        cy.get('#select2-chosen-5').click()
        cy.get('#s2id_autogen5_search').type('F')
        cy.get('[id^="select2-result-label-"]').eq(0).click()
        // Escribir numero
        cy.get('#contenido_dir8').type('30')
        // Codigo postal
        cy.get('#contenido_txtCodPostal').type('005')

        // Seleccion departamento
        cy.get('#select2-chosen-7').click()
        cy.get('#s2id_autogen7_search').type('Antioquia')
        cy.get('[id^="select2-result-label-"]').click()
    // Selecciona el municipio
        cy.get('#select2-chosen-8').click()
        cy.get('#s2id_autogen8_search').type('San Jose').type('{backspace}').type('e')
        cy.get('[id^="select2-result-label-"]').click();
        // Seleccion zona
        cy.get('#select2-chosen-9').click()
        cy.get('#s2id_autogen9_search').type('occidente Medellin')
        cy.get('[id^="select2-result-label-"]').click()
        // Seleccion comuna
        cy.get('#select2-chosen-10').click()
        cy.get('#s2id_autogen10_search').type('unico').type('{backspace}') // Borra la última letra
        .wait(500).type('o').get('[id^="select2-result-label-"]').should('be.visible').click()
        // Seleccion barrio
        cy.get('#select2-chosen-11').click()
        cy.get('#s2id_autogen11_search').type('unico').type('{backspace}') // Borra la última letra
        .wait(500).type('o').get('[id^="select2-result-label-"]').should('be.visible').click()
        // Seleccion sector
        cy.get('#select2-chosen-12').click()
        cy.get('#s2id_autogen12_search').type('Comercial')
        cy.get('[id^="select2-result-label-"]').click()
        // Seleccion estrato
        cy.get('#select2-chosen-13').click()
        cy.get('#s2id_autogen13_search').type('3')
        cy.get('[id^="select2-result-label-"]').click()
        // Seleccion categoria
        cy.get('#select2-chosen-15').click()
        cy.get('#s2id_autogen15_search').type('Tienda mostrador')
        cy.get('[id^="select2-result-label-"]').click()
        // Seleccion ubicacion
        cy.get('#select2-chosen-16').click()
        cy.get('#s2id_autogen16_search').type('esquina')
        cy.get('[id^="select2-result-label-"]').click()
        // Seleccion regimen
        cy.get('#select2-chosen-17').click()
        cy.get('#s2id_autogen17_search').type('comun')
        cy.get('[id^="select2-result-label-"]').click()

        // checkBoxes
        cy.get('input#chklocalp').click()
        cy.get('input#chkCredito').click()
        // Ingresa la hora aleatoria
        const randomHourA = Math.floor(Math.random() * 12).toString().padStart(2, '0'); // Hora entre 1 y 12
        const randomMinuteA = Math.floor(Math.random() * 59).toString().padStart(2, '0'); // Minuto entre 00 y 59
        const randomTimeA = `${randomHourA}:${randomMinuteA}`; // Formato HH:MM
        cy.get('#horaApertura').type(randomTimeA).trigger('change');

        const randomHourC = (Math.floor(Math.random() * 11) + 13).toString().padStart(2, '0'); // Hora entre 13 y 24
        const randomMinuteC = Math.floor(Math.random() * 59).toString().padStart(2, '0'); // Minuto entre 00 y 59
        const randomTimeC = `${randomHourC}:${randomMinuteC}`; // Formato HH:MM
        cy.get('#horaCierre').type(randomTimeC).trigger('change');

        // Verifica que la hora se haya establecido correctamente
        cy.get('#horaApertura').should('have.value', randomTimeA);
        cy.get('#horaCierre').should('have.value', randomTimeC);

        // Dias apertura
        cy.get('#s2id_ddlDias').click()
        cy.get('ul.select2-choices').eq(0)
        cy.get('[id^="select2-result-label-"]').eq(0).click()

        // Numero personas
        cy.get('#numPersonas').type(num)
        // Correo electronico
        cy.get('#CorreoElectronico').type('orlandopz@gmail.com')
        // LATITUD
        cy.get('#txtLatitud').type('6.312563')
        // LONGITUD
        cy.get('#txtLongitud').type('-75.575960')
        // METROS EXACTOS
        cy.get('#txtMetrosCuadrados').type('25.8')
        // RESPONSABLE TIENDA
        cy.get('#select2-chosen-19').click()
        cy.get('#s2id_autogen19_search').type('William')
        cy.get('[id^="select2-result-label-"]').click()
        // SUPERVISOR ZONA
        cy.get('#select2-chosen-20').click()
        cy.get('#s2id_autogen20_search').type('William')
        cy.get('[id^="select2-result-label-"]').click()

        // Seleccionar el primer archivo
        cy.get('input[type="file"]').eq(0)
        .selectFile('../test_manager/cypress/fixtures/Screenshots/Captura de pantalla 2024-11-25 093946.png', { force: true });

        // Verificar que el archivo fue seleccionado correctamente
        cy.get('input[type="file"]').eq(0)
        .should('have.value', 'C:\\fakepath\\Captura de pantalla 2024-11-25 093946.png');  

        // Seleccionar el segundo archivo
        cy.get('input[type="file"]').eq(1)
        .selectFile('../test_manager/cypress/fixtures/Screenshots/Captura de pantalla 2024-11-25 093946.png', { force: true });

        // Verificar que el archivo fue seleccionado correctamente
        cy.get('input[type="file"]').eq(1)
        .should('have.value', 'C:\\fakepath\\Captura de pantalla 2024-11-25 093946.png');  

        // Imprime el cuerpo de la solicitud enviada por Cypress
        cy.intercept('POST', '/Maestros/Tiendas/WS.asmx/ingresartiendas', (req) => {
            console.log('Datos enviados:', req.body);
        }).as('guardar');
        cy.get('#contenido_guardarBtn').click({ force: true });
        cy.wait('@guardar').then((interception) => {
            console.log('Respuesta del servidor:', interception.response);
        });
        
        

    // // Esperar a que se capture la solicitud interceptada
    // cy.wait('@guardarTienda').then((interception) => {
    //     // Imprimir detalles de la solicitud y respuesta
    //     console.log('Datos enviados:', interception.request.body); // Muestra el cuerpo de la solicitud
    //     console.log('Cabeceras:', interception.request.headers); // Muestra las cabeceras
    //     console.log('URL:', interception.request.url); // Muestra la URL
    //     console.log('Respuesta:', interception.response.body);
    });
    });

    it('Combinaciones #5 cambios en la selección tamaño tienda (minimercado)', () => {
        const cc = generarNumeroAleatorio();
        const tl1 = generarNumeroAleatorio();
        const tl2 = generarNumeroAleatorio();
        const nom = generarPalabraAleatoria();
        const ap = generarPalabraAleatoria();
        const ap2 = generarPalabraAleatoria();
        const nomt = generarPalabraAleatoria();
        const num = numP();
        const dec = generarDec(10,80,2);

            cy.get('#contenido_txtCC').type(cc)
            cy.get('#contenido_txtnom1').type(nom)
            cy.get('#contenido_txtnom2').type(ap)
            cy.get('#contenido_txtnom3').type(ap2)
            cy.get('#contenido_txtNombreTienda').type(nomt)
            cy.get('#contenido_txttelefono').type(tl1)
            cy.get('#contenido_txtcelular').type(tl2)

            // DIRECCION
        cy.fixture('coord').then((coord) => {
            const direccion = coord[0];
            // Seleccionar carrera
            cy.get('#select2-chosen-1').click()
            cy.get('#s2id_autogen1_search').type('Autopista')
            cy.get('[id^="select2-result-label-"]').click()
            // Nro carrera
            cy.get('#contenido_dir2').type(direccion.nro)
            // Seleccionar letra
            cy.get('#select2-chosen-2').click()
            cy.get('#s2id_autogen2_search').type('AA')
            cy.get('[id^="select2-result-label-"]').click()
            // Seleccionar norte, sur, etc
            cy.get('#select2-chosen-3').click()
            cy.get('#s2id_autogen3_search').type('ESTE')
            cy.get('[id^="select2-result-label-"]').eq(0).click()
            // Seleccionar otra letra
            cy.get('#select2-chosen-4').click()
            cy.get('#s2id_autogen4_search').type('FB')
            cy.get('[id^="select2-result-label-"]').click()
            // Escribir numero
        cy.get('#contenido_dir5').type('76')
            // Seleccionar letras
        cy.get('#select2-chosen-5').click()
        cy.get('#s2id_autogen5_search').type('F')
        cy.get('[id^="select2-result-label-"]').eq(0).click()
        // Escribir numero
        cy.get('#contenido_dir8').type('30')
        // Codigo postal
        cy.get('#contenido_txtCodPostal').type('005')
    });

        // Seleccion departamento
        cy.get('#select2-chosen-7').click()
        cy.get('#s2id_autogen7_search').type('Antioquia')
        cy.get('[id^="select2-result-label-"]').click()
    // Selecciona el municipio
        cy.get('#select2-chosen-8').click()
        cy.get('#s2id_autogen8_search').type('San Jose').type('{backspace}').type('e')
        cy.get('[id^="select2-result-label-"]').click();
        // Seleccion zona
        cy.get('#select2-chosen-9').click()
        cy.get('#s2id_autogen9_search').type('occidente Medellin')
        cy.get('[id^="select2-result-label-"]').click()
        // Seleccion comuna
        cy.get('#select2-chosen-10').click()
        cy.get('#s2id_autogen10_search').type('unico').type('{backspace}') // Borra la última letra
        .wait(500).type('o').get('[id^="select2-result-label-"]').should('be.visible').click()
        // Seleccion barrio
        cy.get('#select2-chosen-11').click()
        cy.get('#s2id_autogen11_search').type('unico').type('{backspace}') // Borra la última letra
        .wait(500).type('o').get('[id^="select2-result-label-"]').should('be.visible').click()
        // Seleccion sector
        cy.get('#select2-chosen-12').click()
        cy.get('#s2id_autogen12_search').type('Comercial')
        cy.get('[id^="select2-result-label-"]').click()
        // Seleccion estrato
        cy.get('#select2-chosen-13').click()
        cy.get('#s2id_autogen13_search').type('3')
        cy.get('[id^="select2-result-label-"]').click()
        // Seleccion categoria
        cy.get('#select2-chosen-15').click()
        cy.get('#s2id_autogen15_search').type('minimercado')
        cy.get('[id^="select2-result-label-"]').click()
        // Seleccion ubicacion
        cy.get('#select2-chosen-16').click()
        cy.get('#s2id_autogen16_search').type('esquina')
        cy.get('[id^="select2-result-label-"]').click()
        // Seleccion regimen
        cy.get('#select2-chosen-17').click()
        cy.get('#s2id_autogen17_search').type('comun')
        cy.get('[id^="select2-result-label-"]').click()

        // checkBoxes
        cy.get('input#chklocalp').click()
        cy.get('input#chkCredito').click()
        // Ingresa la hora aleatoria
        const randomHourA = Math.floor(Math.random() * 12).toString().padStart(2, '0'); // Hora entre 1 y 12
        const randomMinuteA = Math.floor(Math.random() * 59).toString().padStart(2, '0'); // Minuto entre 00 y 59
        const randomTimeA = `${randomHourA}:${randomMinuteA}`; // Formato HH:MM
        cy.get('#horaApertura').type(randomTimeA).trigger('change');

        const randomHourC = (Math.floor(Math.random() * 11) + 13).toString().padStart(2, '0'); // Hora entre 13 y 24
        const randomMinuteC = Math.floor(Math.random() * 59).toString().padStart(2, '0'); // Minuto entre 00 y 59
        const randomTimeC = `${randomHourC}:${randomMinuteC}`; // Formato HH:MM
        cy.get('#horaCierre').type(randomTimeC).trigger('change');

        // Verifica que la hora se haya establecido correctamente
        cy.get('#horaApertura').should('have.value', randomTimeA);
        cy.get('#horaCierre').should('have.value', randomTimeC);

        // Dias apertura
        cy.get('#s2id_ddlDias').click()
        cy.get('ul.select2-choices').eq(0)
        cy.get('[id^="select2-result-label-"]').eq(0).click()

        // Numero personas
        cy.get('#numPersonas').type(num)
        // Correo electronico
        cy.get('#CorreoElectronico').type('orlandopz@gmail.com')
        // LATITUD
        cy.get('#txtLatitud').type('6.312563')
        // LONGITUD
        cy.get('#txtLongitud').type('-75.575960')
        // METROS EXACTOS
        cy.get('#txtMetrosCuadrados').type(dec)
        // RESPONSABLE TIENDA
        cy.get('#select2-chosen-19').click()
        cy.get('#s2id_autogen19_search').type('William')
        cy.get('[id^="select2-result-label-"]').click()
        // SUPERVISOR ZONA
        cy.get('#select2-chosen-20').click()
        cy.get('#s2id_autogen20_search').type('William')
        cy.get('[id^="select2-result-label-"]').click()

        // Seleccionar el primer archivo
        cy.get('input[type="file"]').eq(0)
        .selectFile('../test_manager/cypress/fixtures/Screenshots/Captura de pantalla 2024-11-25 093946.png', { force: true });

        // Verificar que el archivo fue seleccionado correctamente
        cy.get('input[type="file"]').eq(0)
        .should('have.value', 'C:\\fakepath\\Captura de pantalla 2024-11-25 093946.png');  

        // Seleccionar el segundo archivo
        cy.get('input[type="file"]').eq(1)
        .selectFile('../test_manager/cypress/fixtures/Screenshots/Captura de pantalla 2024-11-25 093946.png', { force: true });

        // Verificar que el archivo fue seleccionado correctamente
        cy.get('input[type="file"]').eq(1)
        .should('have.value', 'C:\\fakepath\\Captura de pantalla 2024-11-25 093946.png');  

        // Imprime el cuerpo de la solicitud enviada por Cypress
        cy.intercept('POST', '/Maestros/Tiendas/WS.asmx/ingresartiendas', (req) => {
            console.log('Datos enviados:', req.body);
        }).as('guardar');
        cy.get('#contenido_guardarBtn').click({ force: true });
        cy.wait('@guardar').then((interception) => {
            console.log('Respuesta del servidor:', interception.response);
        });
        
        

    // // Esperar a que se capture la solicitud interceptada
    // cy.wait('@guardarTienda').then((interception) => {
    //     // Imprimir detalles de la solicitud y respuesta
    //     console.log('Datos enviados:', interception.request.body); // Muestra el cuerpo de la solicitud
    //     console.log('Cabeceras:', interception.request.headers); // Muestra las cabeceras
    //     console.log('URL:', interception.request.url); // Muestra la URL
    //     console.log('Respuesta:', interception.response.body);
    });

    it('Combinaciones #5 cambios en la selección tamaño tienda (Tienda con reja)', () => {
        const cc = generarNumeroAleatorio();
        const tl1 = generarNumeroAleatorio();
        const tl2 = generarNumeroAleatorio();
        const nom = generarPalabraAleatoria();
        const ap = generarPalabraAleatoria();
        const ap2 = generarPalabraAleatoria();
        const nomt = generarPalabraAleatoria();
        const num = numP();
        const dec = generarDec(10,80,2);

            cy.get('#contenido_txtCC').type(cc)
            cy.get('#contenido_txtnom1').type(nom)
            cy.get('#contenido_txtnom2').type(ap)
            cy.get('#contenido_txtnom3').type(ap2)
            cy.get('#contenido_txtNombreTienda').type(nomt)
            cy.get('#contenido_txttelefono').type(tl1)
            cy.get('#contenido_txtcelular').type(tl2)

            // DIRECCION
        cy.fixture('coord').then((coord) => {
            const direccion = coord[0];
            // Seleccionar carrera
            cy.get('#select2-chosen-1').click()
            cy.get('#s2id_autogen1_search').type('Autopista')
            cy.get('[id^="select2-result-label-"]').click()
            // Nro carrera
            cy.get('#contenido_dir2').type(direccion.nro)
            // Seleccionar letra
            cy.get('#select2-chosen-2').click()
            cy.get('#s2id_autogen2_search').type('AA')
            cy.get('[id^="select2-result-label-"]').click()
            // Seleccionar norte, sur, etc
            cy.get('#select2-chosen-3').click()
            cy.get('#s2id_autogen3_search').type('ESTE')
            cy.get('[id^="select2-result-label-"]').eq(0).click()
            // Seleccionar otra letra
            cy.get('#select2-chosen-4').click()
            cy.get('#s2id_autogen4_search').type('FB')
            cy.get('[id^="select2-result-label-"]').click()
            // Escribir numero
        cy.get('#contenido_dir5').type('76')
            // Seleccionar letras
        cy.get('#select2-chosen-5').click()
        cy.get('#s2id_autogen5_search').type('F')
        cy.get('[id^="select2-result-label-"]').eq(0).click()
        // Escribir numero
        cy.get('#contenido_dir8').type('30')
        // Codigo postal
        cy.get('#contenido_txtCodPostal').type('005')
    });

        // Seleccion departamento
        cy.get('#select2-chosen-7').click()
        cy.get('#s2id_autogen7_search').type('Antioquia')
        cy.get('[id^="select2-result-label-"]').click()
    // Selecciona el municipio
        cy.get('#select2-chosen-8').click()
        cy.get('#s2id_autogen8_search').type('San Jose').type('{backspace}').type('e')
        cy.get('[id^="select2-result-label-"]').click();
        // Seleccion zona
        cy.get('#select2-chosen-9').click()
        cy.get('#s2id_autogen9_search').type('occidente Medellin')
        cy.get('[id^="select2-result-label-"]').click()
        // Seleccion comuna
        cy.get('#select2-chosen-10').click()
        cy.get('#s2id_autogen10_search').type('unico').type('{backspace}') // Borra la última letra
        .wait(500).type('o').get('[id^="select2-result-label-"]').should('be.visible').click()
        // Seleccion barrio
        cy.get('#select2-chosen-11').click()
        cy.get('#s2id_autogen11_search').type('unico').type('{backspace}') // Borra la última letra
        .wait(500).type('o').get('[id^="select2-result-label-"]').should('be.visible').click()
        // Seleccion sector
        cy.get('#select2-chosen-12').click()
        cy.get('#s2id_autogen12_search').type('Comercial')
        cy.get('[id^="select2-result-label-"]').click()
        // Seleccion estrato
        cy.get('#select2-chosen-13').click()
        cy.get('#s2id_autogen13_search').type('3')
        cy.get('[id^="select2-result-label-"]').click()
        // Seleccion categoria
        cy.get('#select2-chosen-15').click()
        cy.get('#s2id_autogen15_search').type('Tienda con rej')
        cy.get('[id^="select2-result-label-"]').click()
        // Seleccion ubicacion
        cy.get('#select2-chosen-16').click()
        cy.get('#s2id_autogen16_search').type('esquina')
        cy.get('[id^="select2-result-label-"]').click()
        // Seleccion regimen
        cy.get('#select2-chosen-17').click()
        cy.get('#s2id_autogen17_search').type('comun')
        cy.get('[id^="select2-result-label-"]').click()

        // checkBoxes
        cy.get('input#chklocalp').click()
        cy.get('input#chkCredito').click()
        // Ingresa la hora aleatoria
        const randomHourA = Math.floor(Math.random() * 12).toString().padStart(2, '0'); // Hora entre 1 y 12
        const randomMinuteA = Math.floor(Math.random() * 59).toString().padStart(2, '0'); // Minuto entre 00 y 59
        const randomTimeA = `${randomHourA}:${randomMinuteA}`; // Formato HH:MM
        cy.get('#horaApertura').type(randomTimeA).trigger('change');

        const randomHourC = (Math.floor(Math.random() * 11) + 13).toString().padStart(2, '0'); // Hora entre 13 y 24
        const randomMinuteC = Math.floor(Math.random() * 59).toString().padStart(2, '0'); // Minuto entre 00 y 59
        const randomTimeC = `${randomHourC}:${randomMinuteC}`; // Formato HH:MM
        cy.get('#horaCierre').type(randomTimeC).trigger('change');

        // Verifica que la hora se haya establecido correctamente
        cy.get('#horaApertura').should('have.value', randomTimeA);
        cy.get('#horaCierre').should('have.value', randomTimeC);

        // Dias apertura
        cy.get('#s2id_ddlDias').click()
        cy.get('ul.select2-choices').eq(0)
        cy.get('[id^="select2-result-label-"]').eq(0).click()

        // Numero personas
        cy.get('#numPersonas').type(num)
        // Correo electronico
        cy.get('#CorreoElectronico').type('orlandopz@gmail.com')
        // LATITUD
        cy.get('#txtLatitud').type('6.312563')
        // LONGITUD
        cy.get('#txtLongitud').type('-75.575960')
        // METROS EXACTOS
        cy.get('#txtMetrosCuadrados').type(dec)
        // RESPONSABLE TIENDA
        cy.get('#select2-chosen-19').click()
        cy.get('#s2id_autogen19_search').type('William')
        cy.get('[id^="select2-result-label-"]').click()
        // SUPERVISOR ZONA
        cy.get('#select2-chosen-20').click()
        cy.get('#s2id_autogen20_search').type('William')
        cy.get('[id^="select2-result-label-"]').click()

        // Seleccionar el primer archivo
        cy.get('input[type="file"]').eq(0)
        .selectFile('../test_manager/cypress/fixtures/Screenshots/Captura de pantalla 2024-11-25 093946.png', { force: true });

        // Verificar que el archivo fue seleccionado correctamente
        cy.get('input[type="file"]').eq(0)
        .should('have.value', 'C:\\fakepath\\Captura de pantalla 2024-11-25 093946.png');  

        // Seleccionar el segundo archivo
        cy.get('input[type="file"]').eq(1)
        .selectFile('../test_manager/cypress/fixtures/Screenshots/Captura de pantalla 2024-11-25 093946.png', { force: true });

        // Verificar que el archivo fue seleccionado correctamente
        cy.get('input[type="file"]').eq(1)
        .should('have.value', 'C:\\fakepath\\Captura de pantalla 2024-11-25 093946.png');  

        // Imprime el cuerpo de la solicitud enviada por Cypress
        cy.intercept('POST', '/Maestros/Tiendas/WS.asmx/ingresartiendas', (req) => {
            console.log('Datos enviados:', req.body);
        }).as('guardar');
        cy.get('#contenido_guardarBtn').click({ force: true });
        cy.wait('@guardar').then((interception) => {
            console.log('Respuesta del servidor:', interception.response);
        });
        
        

    // // Esperar a que se capture la solicitud interceptada
    // cy.wait('@guardarTienda').then((interception) => {
    //     // Imprimir detalles de la solicitud y respuesta
    //     console.log('Datos enviados:', interception.request.body); // Muestra el cuerpo de la solicitud
    //     console.log('Cabeceras:', interception.request.headers); // Muestra las cabeceras
    //     console.log('URL:', interception.request.url); // Muestra la URL
    //     console.log('Respuesta:', interception.response.body);
    });

    it('Combinaciones #4 cambios en la selección tamaño tienda (Tienda mostrador)', () => {
        const cc = generarNumeroAleatorio();
        const tl1 = generarNumeroAleatorio();
        const tl2 = generarNumeroAleatorio();
        const nom = generarPalabraAleatoria();
        const ap = generarPalabraAleatoria();
        const ap2 = generarPalabraAleatoria();
        const nomt = generarPalabraAleatoria();
        const num = numP();
        const dec = generarDec(10,80,2);

            cy.get('#contenido_txtCC').type(cc)
            cy.get('#contenido_txtnom1').type(nom)
            cy.get('#contenido_txtnom2').type(ap)
            cy.get('#contenido_txtnom3').type(ap2)
            cy.get('#contenido_txtNombreTienda').type(nomt)
            cy.get('#contenido_txttelefono').type(tl1)
            cy.get('#contenido_txtcelular').type(tl2)

            // DIRECCION
        cy.fixture('coord').then((coord) => {
            const direccion = coord[0];
            // Seleccionar carrera
            cy.get('#select2-chosen-1').click()
            cy.get('#s2id_autogen1_search').type('Autopista')
            cy.get('[id^="select2-result-label-"]').click()
            // Nro carrera
            cy.get('#contenido_dir2').type(direccion.nro)
            // Seleccionar letra
            cy.get('#select2-chosen-2').click()
            cy.get('#s2id_autogen2_search').type('AA')
            cy.get('[id^="select2-result-label-"]').click()
            // Seleccionar norte, sur, etc
            cy.get('#select2-chosen-3').click()
            cy.get('#s2id_autogen3_search').type('ESTE')
            cy.get('[id^="select2-result-label-"]').eq(0).click()
            // Seleccionar otra letra
            cy.get('#select2-chosen-4').click()
            cy.get('#s2id_autogen4_search').type('FB')
            cy.get('[id^="select2-result-label-"]').click()
            // Escribir numero
        cy.get('#contenido_dir5').type('76')
            // Seleccionar letras
        cy.get('#select2-chosen-5').click()
        cy.get('#s2id_autogen5_search').type('F')
        cy.get('[id^="select2-result-label-"]').eq(0).click()
        // Escribir numero
        cy.get('#contenido_dir8').type('30')
        // Codigo postal
        cy.get('#contenido_txtCodPostal').type('005')

        // Seleccion departamento
        cy.get('#select2-chosen-7').click()
        cy.get('#s2id_autogen7_search').type('Antioquia')
        cy.get('[id^="select2-result-label-"]').click()
    // Selecciona el municipio
        cy.get('#select2-chosen-8').click()
        cy.get('#s2id_autogen8_search').type('San Jose').type('{backspace}').type('e')
        cy.get('[id^="select2-result-label-"]').click();
        // Seleccion zona
        cy.get('#select2-chosen-9').click()
        cy.get('#s2id_autogen9_search').type('occidente Medellin')
        cy.get('[id^="select2-result-label-"]').click()
        // Seleccion comuna
        cy.get('#select2-chosen-10').click()
        cy.get('#s2id_autogen10_search').type('unico').type('{backspace}') // Borra la última letra
        .wait(500).type('o').get('[id^="select2-result-label-"]').should('be.visible').click()
        // Seleccion barrio
        cy.get('#select2-chosen-11').click()
        cy.get('#s2id_autogen11_search').type('unico').type('{backspace}') // Borra la última letra
        .wait(500).type('o').get('[id^="select2-result-label-"]').should('be.visible').click()
        // Seleccion sector
        cy.get('#select2-chosen-12').click()
        cy.get('#s2id_autogen12_search').type('Comercial')
        cy.get('[id^="select2-result-label-"]').click()
        // Seleccion estrato
        cy.get('#select2-chosen-13').click()
        cy.get('#s2id_autogen13_search').type('3')
        cy.get('[id^="select2-result-label-"]').click()
        // Seleccion categoria
        cy.get('#select2-chosen-15').click()
        cy.get('#s2id_autogen15_search').type('Tienda mostrador')
        cy.get('[id^="select2-result-label-"]').click()
        // Seleccion ubicacion
        cy.get('#select2-chosen-16').click()
        cy.get('#s2id_autogen16_search').type('esquina')
        cy.get('[id^="select2-result-label-"]').click()
        // Seleccion regimen
        cy.get('#select2-chosen-17').click()
        cy.get('#s2id_autogen17_search').type('comun')
        cy.get('[id^="select2-result-label-"]').click()

        // checkBoxes
        cy.get('input#chklocalp').click()
        cy.get('input#chkCredito').click()
        // Ingresa la hora aleatoria
        const randomHourA = Math.floor(Math.random() * 12).toString().padStart(2, '0'); // Hora entre 1 y 12
        const randomMinuteA = Math.floor(Math.random() * 59).toString().padStart(2, '0'); // Minuto entre 00 y 59
        const randomTimeA = `${randomHourA}:${randomMinuteA}`; // Formato HH:MM
        cy.get('#horaApertura').type(randomTimeA).trigger('change');

        const randomHourC = (Math.floor(Math.random() * 11) + 13).toString().padStart(2, '0'); // Hora entre 13 y 24
        const randomMinuteC = Math.floor(Math.random() * 59).toString().padStart(2, '0'); // Minuto entre 00 y 59
        const randomTimeC = `${randomHourC}:${randomMinuteC}`; // Formato HH:MM
        cy.get('#horaCierre').type(randomTimeC).trigger('change');

        // Verifica que la hora se haya establecido correctamente
        cy.get('#horaApertura').should('have.value', randomTimeA);
        cy.get('#horaCierre').should('have.value', randomTimeC);

        // Dias apertura
        cy.get('#s2id_ddlDias').click()
        cy.get('ul.select2-choices').eq(0)
        cy.get('[id^="select2-result-label-"]').eq(0).click()

        // Numero personas
        cy.get('#numPersonas').type(num)
        // Correo electronico
        cy.get('#CorreoElectronico').type('orlandopz@gmail.com')
        // LATITUD
        cy.get('#txtLatitud').type('6.312563')
        // LONGITUD
        cy.get('#txtLongitud').type('-75.575960')
        // METROS EXACTOS
        cy.get('#txtMetrosCuadrados').type(dec)
        // RESPONSABLE TIENDA
        cy.get('#select2-chosen-19').click()
        cy.get('#s2id_autogen19_search').type('William')
        cy.get('[id^="select2-result-label-"]').click()
        // SUPERVISOR ZONA
        cy.get('#select2-chosen-20').click()
        cy.get('#s2id_autogen20_search').type('William')
        cy.get('[id^="select2-result-label-"]').click()

        // Seleccionar el primer archivo
        cy.get('input[type="file"]').eq(0)
        .selectFile('../test_manager/cypress/fixtures/Screenshots/Captura de pantalla 2024-11-25 093946.png', { force: true });

        // Verificar que el archivo fue seleccionado correctamente
        cy.get('input[type="file"]').eq(0)
        .should('have.value', 'C:\\fakepath\\Captura de pantalla 2024-11-25 093946.png');  

        // Seleccionar el segundo archivo
        cy.get('input[type="file"]').eq(1)
        .selectFile('../test_manager/cypress/fixtures/Screenshots/Captura de pantalla 2024-11-25 093946.png', { force: true });

        // Verificar que el archivo fue seleccionado correctamente
        cy.get('input[type="file"]').eq(1)
        .should('have.value', 'C:\\fakepath\\Captura de pantalla 2024-11-25 093946.png');  

        // Imprime el cuerpo de la solicitud enviada por Cypress
        cy.intercept('POST', '/Maestros/Tiendas/WS.asmx/ingresartiendas', (req) => {
            console.log('Datos enviados:', req.body);
        }).as('guardar');
        cy.get('#contenido_guardarBtn').click({ force: true });
        cy.wait('@guardar').then((interception) => {
            console.log('Respuesta del servidor:', interception.response);
        });
        
        

    // // Esperar a que se capture la solicitud interceptada
    // cy.wait('@guardarTienda').then((interception) => {
    //     // Imprimir detalles de la solicitud y respuesta
    //     console.log('Datos enviados:', interception.request.body); // Muestra el cuerpo de la solicitud
    //     console.log('Cabeceras:', interception.request.headers); // Muestra las cabeceras
    //     console.log('URL:', interception.request.url); // Muestra la URL
    //     console.log('Respuesta:', interception.response.body);
    });
    });
});

const { faker } = require('@faker-js/faker');
const { eq } = require('lodash');

function generarNumeroAleatorio() {
    return Math.floor(Math.random() * 10000000000); // Número entre 0 y 9999999999
}
function numP() {
    return Math.floor(Math.random() * 12) + 1;
}
function numP2() {
    return Math.floor(Math.random() * 100)
}
function generarPalabraAleatoria() {
    return faker.word.noun(); // Genera una palabra aleatoria
}
function generarDec(min, max, precision) {
    const factor = Math.pow(10, precision); // Define la cantidad de decimales
    return Math.round((Math.random() * (max - min) + min) * factor) / factor;
}