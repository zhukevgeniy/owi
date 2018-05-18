module.exports = (sequelize, DataTypes) => {
	const Log = sequelize.define("Log", {
		id: {
			type: DataTypes.UUID,
			primaryKey: true,
			defaultValue: DataTypes.UUIDV4,
			allowNull: false
		},

		q_user_id: DataTypes.STRING,
		q_time: DataTypes.STRING,
		q_loc_id: DataTypes.STRING,
		q_user_ip: DataTypes.STRING,
		q_res: DataTypes.STRING,
		q_status: {
			type: DataTypes.ENUM,
			values: ["SUSPEND", "NO RESPONSE"]
		}
	});

	return Log;
};
