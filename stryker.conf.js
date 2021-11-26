/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
module.exports = {
  _comment:
    "This config was generated using 'stryker init'. Please take a look at: https://stryker-mutator.io/docs/stryker-js/configuration/ for more information",
  packageManager: "npm",
  reporters: ["html", "progress"], // Additional -> "clear-text", "dashboard"
  testRunner: "mocha",
  coverageAnalysis: "perTest",
  mutate: [
    "fuzzball.js",
    // "./lib/leven.js",
    // "./lib/iLeven.js",
    // "./lib/utils.js",
    // "./lib/utils_ultra_lite.js",
  ], // Tells which file to mutate
  mutator: {
    excludedMutations: [
      "ArithmeticOperator", // 64 killed, 32 survived
      "ArrayDeclaration", // 68 killed, 32 survived
      "AssignmentOperator", //68 killed, 34 survived
      "BlockStatement", // 141 killed, 97 survived
      "BlockLiteral", // Not applicable
      "BooleanLiteral", // 42 killed, 72 survived
      "ConditionalExpression", // 386 killed, 811 survived
      "EqualityOperator", // 178 killed, 194 survived
      "LogicalOperator", // 81 killed, 168 survived
      "ObjectLiteral", // 6 killed, 20 survived
      "Optionalchaining", // Not application
      "Regex", // 20 killed, 182 survived
      "StringLiteral", // 51 killed, 213 survived
      // "UnaryOperator", // 21 killed, 10 survived
      "UpdateOperator", // 12 killed, 3 survived
    ],
  },
};
