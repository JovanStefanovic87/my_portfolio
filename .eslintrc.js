module.exports = {
	env: {
		node: true,
		es2021: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
	],
	overrides: [],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint'],
	rules: {
	"@typescript-eslint/ban-types": "off",
	"@typescript-eslint/no-explicit-any": "off",
	"react/no-unescaped-entities": "off",
	"react/prop-types": "off",
	"react/react-in-jsx-scope": "off",
	"@typescript-eslint/no-unused-vars": "off"
},
}
