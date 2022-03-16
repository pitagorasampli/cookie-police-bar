module.exports = {
  extends: ['stylelint-config-standard'],
  rules: {
    indentation: null, // the prettier indents automatically
    'comment-empty-line-before': null, // whatever
    'no-missing-end-of-source-newline': null, // not work with template literals
    'property-no-unknown': [
      true,
      { ignoreProperties: ['text-decoration-skip-ink'] },
    ],
    'declaration-block-no-duplicate-properties': [
      true,
      {
        ignore: ['consecutive-duplicates-with-different-values'],
      },
    ],
  },
};
