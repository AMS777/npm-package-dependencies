import { urls, ids, texts } from '../support/config';
import { makeNpmPackageUrl } from '../../src/utils/urls';

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

    cy.get(ids.packageDependencies.treeView).should('not.exist');
    cy.get(ids.search.field).find('input').type(texts.package.name);
    cy.get(ids.search.button).click();
    cy.get(ids.packageDependencies.treeView).should('exist');
  });

  it('when a package is searched, the package title updates', () => {
    cy.get(ids.search.field).find('input').type(texts.package.name);
    cy.get(ids.search.button).click();
    cy.get(ids.packageDependencies.title).should('contain', texts.package.name);
  });

  it('when a package is searched, the package dependencies tree updates', () => {
    cy.intercept('GET', makeNpmPackageUrl(ids.packages.package), { fixture: 'package.json' }).as(
      'getPackage',
    );
    cy.intercept('GET', makeNpmPackageUrl(ids.packages.dependency1Level), {
      fixture: 'dependency1Level.json',
    });
    cy.intercept('GET', makeNpmPackageUrl(ids.packages.dependency1Level2), {
      fixture: 'noDependencies.json',
    });
    cy.intercept('GET', makeNpmPackageUrl(ids.packages.dependency2Level), {
      fixture: 'dependency2Level.json',
    });
    cy.intercept('GET', makeNpmPackageUrl(ids.packages.dependency3Level), {
      fixture: 'noDependencies.json',
    });

    cy.get(ids.search.field).find('input').type(texts.package.name);
    cy.get(ids.search.button).click();

    cy.wait('@getPackage').its('response.body').should('have.property', 'name', texts.package.name);

    texts.package.dependencies.forEach(dependency => {
      cy.get(ids.packageDependencies.treeView).should('contain', dependency);
    });
  });
});
