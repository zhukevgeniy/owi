import React from "react";
import LogItem from "../log-item";

const LogList = ({ list }) => {

	console.log(list)

	const renderLogItem = (log, key) => (
		<LogItem
			key={key}
			userID={log["q_user_id"]}
			qTime={log["q_time"]}
			qLocationID={log["q_loc_id"]}
			qUserIP={log["q_user_ip"]}
			qStatus={log["q_status"]}
		/>
	);

	return list.map(renderLogItem);
};

export default LogList;
