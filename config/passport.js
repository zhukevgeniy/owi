const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const User = require("../config/sequelize")["User"];

const configurePassportAuth = passport => {
	const config = {
		jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
		secretOrKey: process.env.JWT_SECRET
	};

	passport.serializeUser(function(user, done) {
		done(null, user.id);
	});

	passport.use(
		new JWTStrategy(config, async function verify(payload, done) {
			try {
				const user = await User.findById(payload.userID);
				if (user) {
					return done(null, user);
				} else {
					return done(null, false);
				}
			} catch (err) {
				return done(err, false);
			}
		})
	);
};

module.exports = configurePassportAuth;
