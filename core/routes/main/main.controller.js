const render = async (req, res, next) => {
    res.render('index')
};

const getDashboard = async (req, res) => {
	res.json({
		status: 403,
		msg: "Forbidden"
	})
};

module.exports = {
	render,
	getDashboard
};
