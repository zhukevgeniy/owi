import jwtDecode from "jwt-decode";

const getPrivilege = token => {
	const decodedToken = jwtDecode(token);

	return decodedToken["privilege"];
};

export default getPrivilege;
