module.exports = (sequelize, DataTypes) => {
	const Location = sequelize.define("Location", {
		id: {
			type: DataTypes.UUID,
			primaryKey: true,
			defaultValue: DataTypes.UUIDV4,
			allowNull: false
		},

		name: DataTypes.STRING,
		country: DataTypes.STRING,
		uri_token: DataTypes.STRING
	});

	return Location;
};
