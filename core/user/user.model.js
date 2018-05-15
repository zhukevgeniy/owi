const jwt = require("jsonwebtoken");

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
		isAdmin: DataTypes.BOOLEAN,
		created_at: {
			type: DataTypes.DATE,
			defaultValue: DataTypes.NOW,
			allowNull: false
		},
		updated_at: {
			type: DataTypes.DATE,
			defaultValue: DataTypes.NOW,
			allowNull: false
		}
	});

	/*User.associate = models => {
		User.hasMany(models.providers);
	};*/

	User.prototype.getJwt = function() {
		const expirationTime = process.env.JWT_EXPIRATION;
		const token = jwt.sign({ userID: this.id }, process.env.JWT_SECRET, {
			expiresIn: expirationTime
		});

		return token;
	};

	User.verifyJwt = token => {
		try {
			const decoded = jwt.verify(token, process.env.JWT_SECRET);
			console.log(decoded);
		} catch (e) {
			console.error(e);
		}
	};

	return User;
};
