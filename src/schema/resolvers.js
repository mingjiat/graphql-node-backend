const { find } = require('lodash')
const { users, profiles } = require('../data/data')

const resolvers = {
  Query: {
    getUserById: (root, { id }) => {
      const user = find(users, { id })
      if (!user) {
        throw new Error(`Couldn't find user with id ${id}`)
      }
      return user
    },
    getUsers: () => users
  },
  Mutation: {
    modifyProfileNickName: (root, { userId, nickName }) => {
      const user = find(users, { id: userId })
      if (!user) {
        throw new Error(`Couldn't find user with id ${id}`)
      }
      const profile = find(profiles, { userId: user.id })
      profile.nickName = nickName
      return user
    }
  },
  User: {
    profile: user => find(profiles, { userId: user.id })
  },
  Profile: {
    user: profile => find(users, { id: profile.userId })
  }
}

module.exports = resolvers