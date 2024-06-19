module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ['eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:storybook/recommended',
    'plugin:jsx-a11y/recommended',
    'airbnb-typescript',
    'prettier',
    'react-app',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  plugins: ['react-refresh','jest', 'react','import', 'react-hooks',  '@typescript-eslint', 'jsx-a11y', 'unused-imports'],
  rules: {
    "@typescript-eslint/ban-ts-comment":0,
    "@typescript-eslint/ban-types":0,
    "object-property-newline":0,
'import/no-extraneous-dependencies':0,
    'import/no-unresolved': ['error', { ignore: ['/*.svg'] }],
    'react/jsx-curly-brace-presence': 0,
    //=================Descripted rules======================
    //Enforces consistent brace style for blocks.
    'brace-style': 'error',
    // INCORRECT: \r\n - windows style ,CORRECT: \n - unix
    'linebreak-style': ['error', 'unix'],
    // INCORRECT: if (foo) foo++; CORRECT: if (foo) {foo++};
    curly: 'error',
    //INCORRECT: const num = -.7; CORRECT: const num = -0.7
    'no-floating-decimal': 'error',
    //INCORRECT: var a = b = c = 5;
    'no-multi-assign': 'error',
    //INCORRECT: if (x === x) ...
    'no-self-compare': 'error',
    //INCORRECT foo = doSomething(), val;
    'no-sequences': ['error', { allowInParentheses: false }],
    // clear all unused imports
    'unused-imports/no-unused-imports-ts': 'error',
    // always single-quites
    quotes: ['error', 'single', { avoidEscape: true }],
    'jsx-quotes': ['error', 'prefer-single'],
    // import {useEffect as useEffect} from.. is blocked
    'no-useless-rename': 'error',
    // only === and !==
    eqeqeq: 'error',
    //Disallows trailing whitespace at the end of lines.
    'no-trailing-spaces': 'error',
    //This rule is aimed at highlighting an unnecessary block of code following an if containing a return statement
    'no-else-return': 'error',
    //Disallows unnecessary nested blocks
    'no-lone-blocks': 'error',
    //remove unnecessary spaces
    'no-multi-spaces': 'error',
    // x === 1 +
    // 1 === x -
    yoda: 'error',
    // writes ; where it is needed
    semi: 'error',
    //This rule enforces at least one newline (or absence thereof) at the end of non-empty files.
    'eol-last': 'error',
    //Disallows ternary operators when simpler alternatives exist
    'no-unneeded-ternary': 'warn',
    //Disallows multiline strings
    'no-multi-str': 'error',
    // allow construction ~str.indexOf('smth')  equal   str.indexOf('smth') === -1
    // ~x= (x * -1) - 1
    // ~(-1) = (-1 * -1) - 1  =0 = false
    // ~(3) = (3* -1) - 1 = -4   = true
    'no-bitwise': ['error', { allow: ['~'] }],
    // a?b:c -incorrect  a ? b : c -correct
    'space-infix-ops': 'error',
    // space below comment string
    'spaced-comment': 'error',
    // INCORRECT: ()=> {}; CORRECT: () => {};
    'arrow-spacing': 'error',
    // disallows duplicate imports
    'no-duplicate-imports': 'error',
    // Disallows unnecessary computed property keys in objects and classes
    'no-useless-computed-key': 'error',
    // no var
    'no-var': 'error',
    //INCORRECT: foo(function(a) { return a; });
    //CORRECT: foo(a => a);
    'prefer-arrow-callback': 'error',
    //INCORRECT: var obj = { "foo":42 } CORRECT: var obj = { "foo"[space]:[space]42 };
    'key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true,
      },
    ],
    //Enforces consistent comma styles.
    'comma-style': ['error', 'last'],
    //Disallows or enforces spaces inside of blocks after opening blocks and before closing blocks
    'block-spacing': 'error',
    //INCORRECT: var foo = 1 ,bar = 2; CORRECT: var foo = 1, bar = 2;

    //Enforces consistent spacing before and after keywords.
    'keyword-spacing': [
      'error',
      {
        before: true,
        after: true,
      },
    ],
    // Enforce American spelling for literals, variables, and function declarations (add more words if needed)
    'no-restricted-syntax': [
      'error',
      {
        selector: 'Literal[value=/(cancelled|centre|colour|favour|honour)/i]',
        message: 'Use American spelling of word in string',
      },
      {
        selector: `VariableDeclarator > Identifier[name=/(cancelled|centre|colour|favour|honour)/i]`,
        message: 'Use American spelling of word in variable name',
      },
      {
        selector: `FunctionDeclaration > Identifier[name=/(cancelled|centre|colour|favour|honour)/i]`,
        message: 'Use American spelling of word in function decloration',
      },
    ],
    //Enforces default clauses in switch statements to be last.
    'default-case-last': 'error',
    //This rule aims to report redundant return statements.
    'no-useless-return': 'error',
    //Disallows unused expressions
    'no-unused-expressions': 'warn',
    //Disallows new operators with the String, Number, and Boolean objects
    'no-new-wrappers': 'error',
    //INCORRECT: const avatar_url; CORRECT:const avatarUrl;
    // camelcase: ['error', { properties: 'never' }],
    '@typescript-eslint/naming-convention': 0,
    //Disallows multiple empty lines.
    'no-multiple-empty-lines': [
      'error',
      {
        max: 2,
        maxEOF: 0,
      },
    ],
    //Enforces the location of single-line statements
    'nonblock-statement-body-position': ['error', 'below'],
    //Enforces placing object properties on separate lines
    //Requires or disallows padding lines between statements
    'padding-line-between-statements': [
      'error',
      // {
      //   blankLine: 'always',
      //   prev: ['if'],
      //   next: '*',
      // },
      // {
      //   blankLine: 'always',
      //   prev: ['*'],
      //   next: 'if',
      // },
      // {
      //   blankLine: 'always',
      //   prev: ['for'],
      //   next: '*',
      // },
      // {
      //   blankLine: 'always',
      //   prev: ['*'],
      //   next: 'for',
      // },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
    ],
    //Enforces consistent spacing inside braces
    'object-curly-spacing': ['warn', 'always'],
    //Disallows unused variables.
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        args: 'none',
      },
    ],
    //Enforces a maximum line length.
    'max-len': [
      'warn',
      {
        code: 140,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreComments: true,
        tabWidth: 2,
      },
    ],
    // Forbid the import of external modules that are not declared in the package.json's dependencies,
    // devDependencies, optionalDependencies, peerDependencies, or bundledDependencies.

    //Detect missing key prop
    'react/jsx-key': 'error',
    //Reports if a module's default export is unnamed. todo:can we remove it?
    'import/no-anonymous-default-export': [
      'warn',
      {
        allowObject: true,
      },
    ],
    //Disallows the unary operators ++ and --.todo:can we remove it?
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    //Enforces dot notation whenever possible.
    'dot-notation': 'warn',

    'no-nested-ternary': 0,

    //====================

    'react/jsx-props-no-spreading': 'off',
    'import/prefer-default-export': 'off',
    'import/no-cycle': 0,
    'react/jsx-boolean-value': 'off',
    'react/prop-types': 'off',
    'react/no-unescaped-entities': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/destructuring-assignment': 'off',
    'react/jsx-indent': 'off',
    'no-extra-parens': 0,
    'react/jsx-indent-props': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/camelcase': 'off',
    'no-param-reassign': 'off',

    '@typescript-eslint/lines-between-class-members': 'off',

    'jsx-a11y/accessible-emoji': 1,
    'jsx-a11y/alt-text': 1,
    'jsx-a11y/anchor-has-content': 1,
    'jsx-a11y/anchor-is-valid': 1,
    'jsx-a11y/aria-activedescendant-has-tabindex': 1,
    'jsx-a11y/aria-props': 1,
    'jsx-a11y/aria-proptypes': 1,
    'jsx-a11y/aria-role': 1,
    'jsx-a11y/aria-unsupported-elements': 1,
    'jsx-a11y/click-events-have-key-events': 1,
    'jsx-a11y/heading-has-content': 1,
    'jsx-a11y/html-has-lang': 1,
    'jsx-a11y/iframe-has-title': 1,
    'jsx-a11y/img-redundant-alt': 1,
    'jsx-a11y/interactive-supports-focus': 1,
    'jsx-a11y/label-has-associated-control': 1,
    'jsx-a11y/media-has-caption': 1,
    'jsx-a11y/mouse-events-have-key-events': 1,
    'jsx-a11y/no-access-key': 1,
    'jsx-a11y/no-autofocus': 1,
    'jsx-a11y/no-distracting-elements': 1,
    'jsx-a11y/no-interactive-element-to-noninteractive-role': 1,
    'jsx-a11y/no-noninteractive-element-interactions': 1,
    'jsx-a11y/no-noninteractive-element-to-interactive-role': 1,
    'jsx-a11y/no-noninteractive-tabindex': 1,
    'jsx-a11y/no-onchange': 1,
    'jsx-a11y/no-redundant-roles': 1,
    'jsx-a11y/no-static-element-interactions': 1,
    'jsx-a11y/role-has-required-aria-props': 1,
    'jsx-a11y/role-supports-aria-props': 1,
    'jsx-a11y/scope': 1,
    'jsx-a11y/tabindex-no-positive': 1,
    'react/require-default-props': 0,
    '@typescript-eslint/comma-dangle': 0,
    'arrow-body-style': 0,
    'no-underscore-dangle': 0,
    'react/no-unused-prop-types': 0,
    '@typescript-eslint/no-shadow': 0,
    'react/no-array-index-key': 0,
    'no-use-before-define': 'off',
    'react/jsx-curly-brace-presence': 0,
  },
}
