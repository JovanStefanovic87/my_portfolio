import axios from 'axios';
import {ContactData} from '../interfaces/interfaces'
const API_URL = process.env.API_URL;

export const sendMessage = (messageData: ContactData) => {
	return axios.post(`${API_URL}/api/sendMessage`, {
		messageData: messageData,
	});
};
