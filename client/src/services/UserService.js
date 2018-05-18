class UserService {
	static getURI = () => `${process.env.REACT_APP_SERVER_API_URI}/users`;

	static requestHeaders() {
		const token = sessionStorage.getItem("jwt_token");

		return {
			AUTHORIZATION: token
		};
	}

	static async getUsers() {
		const uri = this.getURI();
		const headers = this.requestHeaders();

		const request = new Request(uri, {
			headers: headers
		});

		try {
			const userListResponse = await fetch(request);
			const userListDate = await userListResponse.json();
			const userList = userListDate.users;

			return [null, userList];
		} catch (error) {
			return [error, null];
		}
	}
}

export default UserService;
