const componentOverrideMapping = require('./targets/componentOverrideMapping');
const moduleOverridePlugin = require('./targets/moduleOverrideWebpackPlugin');

module.exports = targets => {
  targets.of('@magento/pwa-buildpack').specialFeatures.tap(flags => {
    flags[targets.name] = {
      esModules: true,
      cssModules: true,
      i18n: true
    };
  });

  // Files Mapping Override
  // declare files @magento/venia-ui to be replaced
  targets.of('@magento/pwa-buildpack').webpackCompiler.tap(compiler => {
    new moduleOverridePlugin(componentOverrideMapping).apply(compiler);
  });
};
