describe('Switch', () => {
  it('Check and uncheck', () => {
    cy.visit('http://localhost:4200');
    // cy.get('#switch').click().click();
    cy.get('.switch').click().click();
  });
});
