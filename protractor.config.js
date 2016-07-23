exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  allScriptsTimeout: 50000,
  specs: ['./test/e2e/scenarios.js']
};
