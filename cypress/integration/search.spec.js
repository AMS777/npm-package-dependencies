import { urls, ids } from '../support/config';

describe('Search', () => {
  beforeEach(() => {
    cy.visit(urls.homepage);
  });

  it('has search field and button', () => {
    cy.get(ids.search.field).should('exist');
    cy.get(ids.search.button).should('exist');
  });
});
