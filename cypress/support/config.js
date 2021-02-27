export const urls = {
  homepage: '/',
  package: '/express/latest',
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
};

export const texts = {
  package: {
    name: 'express',
    dependencies: ['content-type', 'proxy-addr', 'serve-static'],
  },
};
