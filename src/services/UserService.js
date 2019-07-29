const { hasher, encryptPayload, decrypter } = require('../../utils')
const { prisma } = require('../schema/generated/prisma-client')

const { isEmpty } = require('lodash')

const signUp = async body => {
  let { password, email } = body
  password = hasher(password)

  const user = await prisma.createUser({ email, password })

  delete user.password

  const token = encryptPayload(user)

  return {
    email,
    token
  }
}

const loginUser = async body => {
  let { password, email } = body

  const user = await prisma.user({
    email
  })

  if (isEmpty(user)) throw new Error('User with email does not exist')

  const checkPassword = decrypter(password, user.password)

  if (!checkPassword) throw Error('Password Invalid')

  delete user.password

  const token = encryptPayload(user)

  return {
    user,
    token
  }
}

const getUser = async id => {
  if (!id) {
    throw new Error('Unauthorized User')
  }
  const user = await prisma.user({ id })
  return user
}

module.exports = {
  loginUser,
  signUp,
  getUser
}
