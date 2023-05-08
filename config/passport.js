const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const {user} = require('../models');

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'your_jwt_secret', // using an environment variable for this value is a good idea
};

module.exports = (passport) => {
  passport.use(
    new JwtStrategy(opts, async (jwt_payload, done) => {
      try {
        console.log(jwt_payload)
        const verifiedUser = await user.findByPk(jwt_payload.id);
        if (verifiedUser) {
          return done(null, verifiedUser);
        }

        return done(null, false);
      } catch (error) {
        return done(error, false);
      }
    })
  );
};

