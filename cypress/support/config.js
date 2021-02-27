export const urls = {
  homepage: '/',
};

export const ids = {
  homepage: {
    title: '[data-test=homepage-title]',
    description: '[data-test=homepage-description]',
  },
  search: {
    field: '[data-test=search-field]',
    button: '[data-test=search-button]',
  },
  packageDependencies: {
    title: '[data-test=package-dependencies-title]',
    treeView: '[data-test=package-dependencies-tree-view]',
  },
  packages: {
    package: 'test-package',
    dependency1Level: 'dependency-1-level',
    dependency1Level2: 'dependency-1-level-2',
    dependency2Level: 'dependency-2-level',
    dependency3Level: 'dependency-3-level',
  },
};

export const texts = {
  package: {
    name: 'test-package',
    dependencies: [
      'dependency-1-level',
      'dependency-1-level-2',
      'dependency-2-level',
      'dependency-3-level',
    ],
  },
};
