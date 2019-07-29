const { signUp, loginUser, getUser } = require('../services/UserService')
const { getToken, verifyToken } = require('../../utils')

const resolver = {
  Query: {
    user(parent, args, context) {
      const token = getToken(context)
      if (!token) {
        throw new Error('Not Authenticated')
      }
      const { data } = verifyToken(token);
      return getUser(data.id);
    }
  },

  Mutation: {
    signUpUser(parent, args, context) {
      const { data } = args
      return signUp(data)
    },
    loginUser(parent, args, context) {
      const { data } = args
      return loginUser(data)
    }
  }
}

module.exports = resolver
