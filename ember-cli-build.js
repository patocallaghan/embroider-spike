'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const path = require('path');
const { env } = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  const { Webpack } = require('@embroider/webpack');
  if (process.env.CLASSIC) {
    return app.toTree();
  } else {
    return require('@embroider/compat').compatBuild(app, Webpack, {
      staticAddonTestSupportTrees: true,
      staticAddonTrees: true,
      staticHelpers: true,
      staticComponents: true,
      packagerOptions: {
        webpackConfig: {
          plugins: [
            new BundleAnalyzerPlugin({
              analyzerPort: 4452,
              generateStatsFile: true,
              openAnalyzer: false,
              statsFilename: path.join(process.cwd(), 'bundle-stats.json'),
            }),
          ],
        },
      },
      packageRules: [
        {
          package: 'ember-intl',
          semverRange: '^4.0.1',
          addonModules: {
            'services/intl.js': {
              dependsOnModules: ['../adapters/default.js'],
            },
          },
        },
      ],
      splitAtRoutes: [
        'addons',
        'teams',
        'players',
        'table',
        'parent',
        'parent.child',
        'parent.child.grandchild',
      ],
    });
  }
};
