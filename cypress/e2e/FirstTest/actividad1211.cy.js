 describe('testing info del hotel', () => {
        it('Debe mostrar correctamente la información del hotel', () => {
          // Visitar la página principal
          cy.visit('https://automationintesting.online/');
      
          // Verifica que la información del hotel esté presente en la página.
          cy.contains('Shady Meadows B&B').should('be.visible');
      
          cy.contains('The Old Farmhouse, Shady Street, Newfordburyshire, NE1 410S')
            .should('be.visible');
      
          cy.contains('012345678901').should('be.visible');
      
          cy.contains('fake@fakeemail.com').should('be.visible');

          // Verificar que haya al menos una imagen visible.
         cy.get('img[src="/images/rbp-logo.jpg"], img[src="/images/room2.jpg"]').should('be.visible');
         
            // Confirma que el texto de la descripción del hotel sea el esperado
         cy.get('.hotel-description')
        .should('be.visible')
        .and('contain', 'Welcome to Shady Meadows, a delightful Bed & Breakfast nestled in the hills on Newingtonfordburyshire. A place so beautiful you will never want to leave. All our rooms have comfortable beds and we provide breakfast from the locally sourced supermarket. It is a delightful place.');

        });
      });
      
  