module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: ['>0.25%', 'not dead', 'not op_mini all'],
          node: '8',
        },
      },
    ],
  ],
};
