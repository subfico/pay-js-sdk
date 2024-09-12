module.exports = {
  // Specify test environment as jsdom (simulates browser environment)
  testEnvironment: 'jest-environment-jsdom',
  
  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // Collect code coverage from these files
  collectCoverageFrom: [
    '!src/**/*.js',    // Collect coverage from all JS files in the 'src' folder
    '!src/**/*.test.js'  // Ignore test files when collecting coverage
  ],

  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,

  // Module file extensions for importing
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],

  // Babel transformation for modern JavaScript features
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',  // Use babel-jest to transpile JavaScript files
  },

  // Configure Jest to look for test files
  testMatch: [
    '**/__tests__/**/*.js',       // Any files inside __tests__ folders
    '**/?(*.)+(spec|test).js',    // Any files with .test.js or .spec.js
  ],

  // Set up global test setup, if needed
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  
  // Verbose output of test results
  verbose: true,
};
