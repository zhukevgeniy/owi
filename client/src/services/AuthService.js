class AuthService {
	static getURI() {
		return "/signup";
	}

	static async signup({ name, email, pwd }) {
		const uri = this.getURI();

		const request = new Request(uri, {
			method: "POST",
			headers: new Headers({
				"Content-Type": "application/json"
			}),
			body: JSON.stringify({
				name,
				email,
				pwd
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
}

export default AuthService;
