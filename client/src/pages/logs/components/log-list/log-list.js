import React from "react";
import LogItem from "../log-item";

const LogList = ({ list }) => {
	const renderLogItem = (log, key) => (
		<LogItem
			key={key}
			userID={log.userID}
			qTime={log.qTime}
			qLocationID={log.qLocationID}
			qUserIP={log.qUserIP}
			qResult={log.qResult}
				qStatus={log.qStatus}
		/>
	);

	return list.map(renderLogItem);
};

export default LogList;
