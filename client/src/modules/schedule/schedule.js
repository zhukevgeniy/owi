import React from "react";
import Header from "../../common/header/header";

const Schedule = ({ children }) => {
	return (
		<div>
			<Header />
			{children}
		</div>
	);
};

export default Schedule;
