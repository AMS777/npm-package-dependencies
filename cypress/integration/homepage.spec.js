import { urls, ids } from '../support/config';

describe('Homepage', () => {
  beforeEach(() => {
    cy.visit(urls.homepage);
  });

  it('visits url', () => {});

  it('has title and description', () => {
    cy.get(ids.homepage.title).should('exist');
    cy.get(ids.homepage.description).should('exist');
  });
});
