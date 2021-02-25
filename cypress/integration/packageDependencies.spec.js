import { urls, ids } from '../support/config';

describe('Package dependencies', () => {
  beforeEach(() => {
    cy.visit(urls.homepage);
  });

  it('has title and tree view', () => {
    cy.get(ids.packageDependencies.title).should('exist');
    cy.get(ids.packageDependencies.treeView).should('exist');
  });
});
