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

  it('has search field and button', () => {
    cy.get(ids.search.field).should('exist');
    cy.get(ids.search.button).should('exist');
  });

  it('has package title and tree view', () => {
    cy.get(ids.packageDependencies.title).should('exist');
    cy.get(ids.packageDependencies.treeView).should('exist');
  });
});
