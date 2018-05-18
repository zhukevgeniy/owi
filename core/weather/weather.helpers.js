const { Location, Log } = require("../../config/sequelize");

const logAction = async ({
	uri_token,
	userID,
	userIP,
	queryTime,
	queryStatus
}) => {
	const location = await Location.findOne({
		where: {
			uri_token: `/q/${uri_token}`
		}
	});

	await Log.create({
		q_user_id: userID,
		q_user_ip: userIP,
		q_time: queryTime,
		q_loc_id: location.id,
		q_status: queryStatus
	});
};

const parseHrtimeToSeconds = hrtime => {
	return (hrtime[0] + hrtime[1] / 1e9).toFixed(3);
};

module.exports = {
	logAction,
	parseHrtimeToSeconds
};
