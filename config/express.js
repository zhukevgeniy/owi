const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const passport = require("passport");



const configureExpress = app => {
	app
		.use(cors())
		.use(bodyParser.json({ limit: "20mb" }))
		.use(bodyParser.urlencoded({ limit: "20mb", extended: true }))
		.use(morgan("dev"))
		.use(passport.initialize());
		// .use(passport.session());

};

module.exports = configureExpress;
