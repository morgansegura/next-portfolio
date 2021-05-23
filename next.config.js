const path = require('path')
const Dotenv = require('dotenv-webpack')

module.exports = {
	future: {
		webpack5: true,
	},
	webpack: function (config, options) {
		config.resolve.alias['@'] = path.resolve(__dirname)
		config.plugins.push(new Dotenv({ slient: true }))
		config.experiments = {}
		return config
	},
}
