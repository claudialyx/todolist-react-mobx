const {
  override,
  addDecoratorsLegacy,
  disableEsLint
  //   addBabelPlugin
} = require("customize-cra");

module.exports = override(
  //   addBabelPlugin("@babel/plugin-proposal-decorators"),
  addDecoratorsLegacy(),
  disableEsLint()
);
