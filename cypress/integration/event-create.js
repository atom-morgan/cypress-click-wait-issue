describe('Event Create', () => {
  before(() => {
    Cypress.config('baseUrl', 'http://localhost:4200');
  });

  beforeEach(() => {
    cy.visit('/');
  });

  it('should display a success message for a valid event', () => {
    cy
      .get('input[formControlName=startTime]').click()
        .get('.owl-dt-calendar-cell-today').click()
        // This works...sometimes
        .get('.owl-dt-container-buttons button').last().click()
        // Adding .wait() gets it to work but I'm not sure why
        // .get('.owl-dt-container-buttons button').last().wait(1000).click()
      .get('input[formControlName=endTime]').click()
        .get('.owl-dt-calendar-cell-today').click()
        .get('[aria-label="Add a hour"]').click()
        // This works...sometimes
        .get('.owl-dt-container-buttons button').last().click()
        // Adding .wait() gets it to work but I'm not sure why
        // .get('.owl-dt-container-buttons button').last().wait(1000).click()
      .get('button[type=submit]').click();
  });
});