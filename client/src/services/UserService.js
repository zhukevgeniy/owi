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

	static objectToQuerystring = obj => {
		return Object.keys(obj).reduce(function(str, key, i) {
			const delimiter = i === 0 ? "" : "&";
			const val = encodeURIComponent(obj[encodeURIComponent(key)]);
			return [str, delimiter, key, "=", val].join("");
		}, "");
	};

	static async removeUserByEmail(email) {
		const uri = this.getURI();
		const headers = this.requestHeaders();

		const request = new Request(uri, {
			method: "DELETE",
			headers: {
				...headers,
				"Content-Type": "application/x-www-form-urlencoded"
			},
			body: this.objectToQuerystring({email})
		});

		try {
			const userRemoveRequest = await fetch(request);
			const userRemoveStatus = await userRemoveRequest.json();

			return null;
		} catch (error) {
			return error;
		}
	}
}

export default UserService;
