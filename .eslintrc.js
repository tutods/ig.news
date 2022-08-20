// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');

const folders = fs
	.readdirSync('src', { withFileTypes: true })
	.filter((dirent) => dirent.isDirectory())
	.map((dirent) => !['styles'].includes(dirent.name) && dirent.name);

module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: [
		'plugin:@next/next/recommended',
		'plugin:react/recommended',
		'airbnb',
		'airbnb-typescript',
		'prettier',
		'airbnb-typescript-prettier'
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 12,
		sourceType: 'module',
		project: './tsconfig.json'
	},
	plugins: [
		'react',
		'@typescript-eslint',
		'simple-import-sort',
		'import',
		'unused-imports',
		'prettier'
	],
	rules: {
		'react/react-in-jsx-scope': 'off',
		'react/no-danger': [1],
		'react/require-default-props': 'off',
		'react/jsx-filename-extension': [
			1,
			{
				extensions: ['.ts', '.tsx']
			}
		],
		'react/jsx-props-no-spreading': 'off',
		'react/function-component-definition': 'off',
		'react/jsx-curly-brace-presence': ['error', { props: 'always' }],
		'jsx-a11y/anchor-is-valid': [
			'error',
			{
				components: ['Link'],
				specialLink: ['hrefLeft', 'hrefRight'],
				aspects: ['invalidHref', 'preferButton']
			}
		],
		'@typescript-eslint/naming-convention': [
			'error',
			{
				selector: 'variableLike',
				format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
				leadingUnderscore: 'allow'
			}
		],
		'no-restricted-exports': 'off',
		'import/extensions': 'off',
		'simple-import-sort/imports': 'error',
		'simple-import-sort/exports': 'error',
		'import/first': 'error',
		'import/newline-after-import': 'error',
		'import/no-duplicates': 'error',
		'unused-imports/no-unused-imports': 'error',
		'import/prefer-default-export': 'off',
		'import/no-cycle': 'error',
		'@typescript-eslint/no-empty-interface': 'off',
		'no-underscore-dangle': 'off',
		'no-param-reassign': 'error',
		'no-useless-escape': 'error',
		'prettier/prettier': ['error', { usePrettierrc: true }]
	},
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
				moduleDirectory: ['src', 'node_modules']
			},
			typescript: {}
		}
	},
	overrides: [
		{
			files: ['**/*.ts?(x)', '**/*.js?(x)'],
			rules: {
				'simple-import-sort/imports': [
					'error',
					{
						groups: [
							['^\\u0000'],
							['^@?\\w'],
							[`^(${folders.join('|')})(/.*|$)`],
							['^[^.]', '^\\.'],
							['^~/styles', '^styles', 'styles', './styles']
						]
					}
				]
			}
		}
	]
};
