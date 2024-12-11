describe('myTestSaucedemo', () => {
  let users;

  before(() => {
    // Cargar los datos desde fixtures
    cy.fixture('users').then((data) => {
      users = data;
    });
  });

  it('Compra con usuario standard_user', () => {
    cy.login(users.standard_user.username, users.standard_user.password);
    cy.testFilter(); // Probamos el filtro
    cy.addToCartAndCheckout();
    cy.logout();
  });

  it('Compra con usuario problem_user', () => {
    cy.login(users.problem_user.username, users.problem_user.password);
    cy.testFilter(); // Probamos el filtro
    cy.addToCartAndCheckout();
    cy.logout();
  });


});










