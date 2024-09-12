module.exports = {
  // Specify test environment as jsdom (simulates browser environment)
  testEnvironment: 'jest-environment-jsdom',
  
  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // Collect code coverage from these files
  collectCoverageFrom: [
    '!src/**/*.js',
    '!src/**/*.test.js'
  ],

  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,

  // Module file extensions for importing
  moduleFileExtensions: ['js', 'json', 'node'],

  // Configure Jest to look for test files
  testMatch: [
    // Any files with .test.js or .spec.js
    '**/?(*.)+(spec|test).js',
  ],
  
  // Verbose output of test results
  verbose: true,
};
