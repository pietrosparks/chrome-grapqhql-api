const { merge } = require('lodash')

const userResolver = require('./user.resolver')

const resolvers = merge(userResolver)

module.exports = resolvers
