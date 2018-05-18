const { Log } = require("../../config/sequelize");

const getAllLogs = async (req, res) => {
	const logListRaw = await Log.findAll();
	const logs = logListRaw.map(el => el.get({ plain: true }));

	res.json({
		status: "ok",
		logs
	});
};

module.exports = {
	getAllLogs
};
