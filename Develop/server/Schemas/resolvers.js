const { User } = require('./models');
const { signToken } = require('./utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate('savedBooks');
        return user;
      }
      throw new Error('You are not authenticated');
    }
  },
  Mutation: {
    loginUser: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new Error('No user with this email found');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new Error('Incorrect password');
      }

      const token = signToken(user);
      return { token, user };
    },
    signupUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      
      if (!user) {
        throw new Error('Could not create user');
      }

      const token = signToken(user);
      return { token, user };
    }
  }
};

module.exports = resolvers;