const { defaults, } = require('jest-config');
module.exports = {
  reporters : [ 'default' ],
  roots     : ['<rootDir>'], /* rootDir is by default the pwd of this file so we have to specify to jest to look for tests outside and not here */
  rootDir   : './',
  setupFilesAfterEnv     : ['<rootDir>/src/setupTests.js'],
  // testPathIgnorePatterns : [...defaults.testPathIgnorePatterns, '<rootDir>/e2e/'], // don't run e2e tests with this. they are on different config
  // moduleFileExtensions   : [ ...defaults.moduleFileExtensions, 'svg', 'css' ],
  testMatch              : [ '**/__tests__/**/*test.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)' ],
  moduleNameMapper       : {
    'appActions/(.*)$': '<rootDir>/src/redux/actions/$1',
    'appReducers/(.*)$': '<rootDir>/src/redux/reducers/$1',
    'appReducers': '<rootDir>/src/redux/reducers/index.js',
    'appSelectors/(.*)$': '<rootDir>/src/redux/selectors/$1',
    'appRedux/(.*)$': '<rootDir>/src/redux/$1',
    'appSmartComponents/(.*)$': '<rootDir>/src/smartComponents/$1',
    'appPresentationComponents/(.*)$': '<rootDir>/src/presentationComponents/$1',
    'appPresentationComponents': '<rootDir>/src/presentationComponents/index.js',
    'appAssets/(.*)$': '<rootDir>/src/assets/$1',
    'appModels/(.*)$': '<rootDir>/src/models/$1',
    'appUtils/(.*)$': '<rootDir>/src/utils/$1',
    'appConstants/(.*)$': '<rootDir>/src/constants/$1',
    'appContainers/(.*)$': '<rootDir>/src/containers/$1',
    'appContainers': '<rootDir>/src/containers/index.jsx',
    'appHooks/(.*)$': '<rootDir>/src/hooks/$1',
    'appConfig': '<rootDir>/src/config.js',
    
  },
  
  transform: {
    '^.+\\.(js|jsx)$' : '<rootDir>/config/jest/babelTransform.js', // such that import statements within imported modules don't fail
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/config/jest/svgTransform.js",
  },
};
