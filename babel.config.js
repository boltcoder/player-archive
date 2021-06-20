module.exports = {
  plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-async-generator-functions'
  ],
  presets: [
    '@babel/env',
    '@babel/preset-react',
  ],
};
