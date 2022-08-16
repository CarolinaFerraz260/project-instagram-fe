import axios from "axios";
import LINK from "./Links";
export default async function RegisterUser(userToRegister) {
	try {
		const response = await axios.post(LINK + "/api/v1/user", userToRegister);
		return response;
	} catch (error) {
		return error;
	}
}
