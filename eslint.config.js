const stylistic = require('@stylistic/eslint-plugin');
const prettier = require('eslint-config-prettier');
const js = require('@eslint/js');

module.exports = [
	js.configs.recommended,
	prettier,
	{
		plugins: { '@stylistic': stylistic },
		ignores: ['**/node_modules/', '.git/'],
		rules: {
			indent: ['error', 'tab'],
			'no-undef': 'off',
			'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
			'capitalized-comments': 'error',
			'@stylistic/arrow-spacing': 'error',
			'@stylistic/comma-spacing': 'error',
			'@stylistic/comma-dangle': [
				'error',
				{
					objects: 'always-multiline',
					arrays: 'always-multiline',
					functions: 'always-multiline',
					imports: 'always-multiline',
				},
			],
			'@stylistic/jsx-quotes': 'error',
			'@stylistic/key-spacing': 'error',
			'@stylistic/keyword-spacing': 'error',
			'@stylistic/indent': ['error', 'tab'],
			'@stylistic/semi': 'error',
			'@stylistic/quotes': ['error', 'single'],
			'@stylistic/space-infix-ops': 'error',
			'@stylistic/multiline-ternary': ['error', 'always-multiline'],
			'@stylistic/object-curly-spacing': ['error', 'always'],
			'@stylistic/dot-location': ['error', 'property'],
			'@stylistic/no-multi-spaces': 'error',
			'@stylistic/no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
			'@stylistic/no-mixed-operators': 'error',
			'@stylistic/no-mixed-spaces-and-tabs': 'error',
			'@stylistic/nonblock-statement-body-position': 'error',
			'@stylistic/no-whitespace-before-property': 'error',
			'@stylistic/no-trailing-spaces': 'error',
			'@stylistic/newline-per-chained-call': [
				'error',
				{ ignoreChainWithDepth: 1 },
			],
			'@stylistic/indent-binary-ops': ['error', 'tab'],
			'@stylistic/max-len': [
				'error',
				{
					code: 80,
					tabWidth: 2,
					ignoreStrings: true,
					ignoreTemplateLiterals: true,
					ignoreRegExpLiterals: true,
					ignoreComments: true,
				},
			],
			'@stylistic/padding-line-between-statements': [
				'error',
				{
					blankLine: 'always',
					prev: '*',
					next: [
						'class',
						'function',
						'export',
						'switch',
						'case',
						'default',
						'try',
						'if',
						'return',
						'expression',
						'multiline-const',
						'multiline-var',
						'multiline-let',
					],
				},

				{
					blankLine: 'always',
					prev: ['multiline-const', 'multiline-var', 'multiline-let'],
					next: '*',
				},

				{
					blankLine: 'always',
					prev: 'directive',
					next: '*',
				},
			],
		},
	},
];
