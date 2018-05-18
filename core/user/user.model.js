const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define("User", {
		id: {
			type: DataTypes.UUID,
			primaryKey: true,
			defaultValue: DataTypes.UUIDV4,
			allowNull: false
		},
		name: DataTypes.STRING,
		email: DataTypes.STRING,
		password: {
			type: DataTypes.STRING,
			allowNull: false
		},
		isAdmin: DataTypes.BOOLEAN
	});

	User.beforeCreate(async user => {
		try {
			user.password = await bcrypt.hash(user.password, bcrypt.genSaltSync(8));
		} catch (error) {
			throw new Error();
		}
	});

	User.generateHash = async password => {
		return await bcrypt.hash(password, bcrypt.genSaltSync(8));
	};

	User.prototype.comparePasswords = async function(password) {
		return await bcrypt.compare(password, this.password);
	};

	User.prototype.getJwt = function() {
		const expirationTime = process.env.JWT_EXPIRATION;
		const payload = {
			userID: this.id,
			privilege: this.isAdmin
		};

		return jwt.sign(payload, process.env.JWT_SECRET, {
			expiresIn: expirationTime
		});
	};

	return User;
};
