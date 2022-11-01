module.exports = {
	extends: ['@commitlint/config-conventional'],
	parserPreset: {
		parserOpts: {
			headerPattern: /^(\w*)\((\w*)\):\s(.*)$/, // TODO: add the commit enforcement pattern to your liking
			headerCorrespondence: ['type', 'scope', 'subject'],
			issuePrefixes: ['^PD-[0-9]{1,4}']
		}
	},
	rules: {
		'references-empty': [2, 'never'],
		'scope-empty': [1, 'never']
	},
	helpUrl: 'https://github.com/conventional-changelog/commitlint/#what-is-commitlint'
};
