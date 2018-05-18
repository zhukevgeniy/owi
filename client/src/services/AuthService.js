class AuthService {
	static getURI() {
		return "/signup";
	}

	static async signup({ name, email, password }) {
		const uri = this.getURI();

		const request = new Request(uri, {
			method: "POST",
			headers: new Headers({
				"Content-Type": "application/json"
			}),
			body: JSON.stringify({
				name,
				email,
				password
			})
		});

		try {
			const signUpFetchResponse = await fetch(request);
			const credentialsData = await signUpFetchResponse.json();
			const jwtToken = credentialsData.token;

			return [null, jwtToken];
		} catch (error) {
			return [error, null];
		}
	}

	static signout() {
		sessionStorage.removeItem("jwt_token")
	}
}

export default AuthService;
