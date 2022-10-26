import axios from 'axios';
const API_URL = process.env.API_URL;

export const sendMessage = messageData => {
	return axios.post(`${API_URL}/api/sendMessage`, {
		messageData: messageData,
	});
};
