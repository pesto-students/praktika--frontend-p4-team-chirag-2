import axios from 'axios';

const apiClient = axios.create({
	baseURL: `https://praktika.onrender.com/`,
	timeout: 70000,
	headers: {
		'Api-Request-Version': 'bypass'
	}
});

export default class API {
	static async registerUser(registerData) {
		try {
			const data = await apiClient.post(`api/register`, registerData);
			return Promise.resolve(data);
		} catch (error) {
			console.error('errResp', error);
			return Promise.reject(error.response.data.message);
		}
	}

	static async loginUser(loginData) {
		try {
			const data = await apiClient.post(`api/login`, loginData);
			return Promise.resolve(data);
		} catch (error) {
			console.error('errResp', error);
			return Promise.reject(error.response.data.message);
		}
	}

	static async createCompany(companyData, token) {
		const config = {
			headers: {
				Authorization: `Bearer ${token}`
			}
		};
		try {
			const data = await apiClient.post(`api/recrutirer`, companyData, config);
			return Promise.resolve(data);
		} catch (error) {
			console.error('errResp', error);
			return Promise.reject(error);
		}
	}

	static async updateCompany(companyData, token) {
		const config = {
			headers: {
				Authorization: `Bearer ${token}`
			}
		};
		try {
			const data = await apiClient.put(`api/recrutirer`, companyData, config);
			return Promise.resolve(data);
		} catch (error) {
			console.error('errResp', error);
			return Promise.reject(error);
		}
	}

	static async createVacancy(vacancyData, token) {
		const config = {
			headers: {
				Authorization: `Bearer ${token}`
			}
		};
		try {
			const data = await apiClient.post(`api/vacancy`, vacancyData, config);
			return Promise.resolve(data);
		} catch (error) {
			console.error('errResp', error);
			return Promise.reject(error);
		}
	}

	static async deleteVacancy(id, token) {
		const config = {
			headers: {
				Authorization: `Bearer ${token}`
			}
		};
		try {
			const data = await apiClient.delete(`api/vacancy`, id, config);
			return Promise.resolve(data);
		} catch (error) {
			console.error('errResp', error);
			return Promise.reject(error);
		}
	}

	static async getProfileData(token) {
		console.log('Profile API reached');
		const config = {
			headers: {
				Authorization: `Bearer ${token}`
			}
		};
		try {
			const data = await apiClient.get(`api/candidate`, config);
			return Promise.resolve(data);
		} catch (error) {
			console.log('errResp', error);
			return Promise.reject(error);
		}
	}

	static async createProfile(profileData, token) {
		console.log('Create Profile API reached');
		const config = {
			headers: {
				Authorization: `Bearer ${token}`
			}
		};
		try {
			const data = await apiClient.post(`api/candidate`, profileData, config);
			return Promise.resolve(data);
		} catch (error) {
			console.error('errResp', error);
			return Promise.reject(error);
		}
	}

	static async updateProfile(profileData, token) {
		console.log('Update Profile API reached');
		const config = {
			headers: {
				Authorization: `Bearer ${token}`
			}
		};
		try {
			const data = await apiClient.put(`api/candidate`, profileData, config);
			return Promise.resolve(data);
		} catch (error) {
			console.error('errResp', error);
			return Promise.reject(error);
		}
	}

	static async getAllCountries(token) {
		console.log('Country API reached');
		const config = {
			headers: {
				Authorization: `Bearer ${token}`
			}
		};
		try {
			const data = await apiClient.get(`api/vacancy/getCountrys`, config);
			return Promise.resolve(data);
		} catch (error) {
			console.error('errResp', error);
			return Promise.reject(error);
		}
	}

	static async getAllSates(countryId, token) {
		const config = {
			headers: {
				Authorization: `Bearer ${token}`
			}
		};
		try {
			const apiData = { country_id: countryId };
			const data = await apiClient.post(
				`api/vacancy/getStates`,
				apiData,
				config
			);
			return Promise.resolve(data);
		} catch (error) {
			console.error('errResp', error);
			return Promise.reject(error);
		}
	}

	static async getAllCities(stateId, token) {
		const config = {
			headers: {
				Authorization: `Bearer ${token}`
			}
		};
		try {
			const apiData = { state_id: stateId };
			const data = await apiClient.post(
				`api/vacancy/getCitys`,
				apiData,
				config
			);
			return Promise.resolve(data);
		} catch (error) {
			console.error('errResp', error);
			return Promise.reject(error);
		}
	}

	static async getAllJobCategories(token) {
		console.log('JobCategory API reached');
		const config = {
			headers: {
				Authorization: `Bearer ${token}`
			}
		};
		try {
			const data = await apiClient.get(`api/vacancy/getjobcategory`, config);
			return Promise.resolve(data);
		} catch (error) {
			console.error('errResp', error);
			return Promise.reject(error);
		}
	}

	static async getDashboardCounts(token) {
		console.log('Dashboard API reached');
		const config = {
			headers: {
				Authorization: `Bearer ${token}`
			}
		};
		try {
			const data = await apiClient.get(`api/dashboard`, config);
			return Promise.resolve(data);
		} catch (error) {
			console.error('errResp', error);
			return Promise.reject(error);
		}
	}

	static async getUpcomingInterviews(token) {
		console.log('upcoming interviews API reached');
		const config = {
			headers: {
				Authorization: `Bearer ${token}`
			}
		};
		try {
			const data = await apiClient.get(
				`api/dashboard/getPendingInterviews`,
				config
			);
			return Promise.resolve(data);
		} catch (error) {
			console.error('errResp', error);
			return Promise.reject(error);
		}
	}

	static async getVacancyData(token) {
		console.log('vacancy data API reached');
		const config = {
			headers: {
				Authorization: `Bearer ${token}`
			}
		};
		try {
			const data = await apiClient.get(
				`api/dashboard/getPendingVacancy`,
				config
			);
			return Promise.resolve(data);
		} catch (error) {
			console.error('errResp', error);
			return Promise.reject(error);
		}
	}

	static async getCandidateList(token) {
		console.log('candidate data API reached');
		const config = {
			headers: {
				Authorization: `Bearer ${token}`
			}
		};
		try {
			const data = await apiClient.get(
				`api/vacancy/getCandidateListing`,
				config
			);
			return Promise.resolve(data);
		} catch (error) {
			console.error('errResp', error);
			return Promise.reject(error);
		}
	}

	static async getCompanyProfile(token) {
		console.log('company profile data API reached');
		const config = {
			headers: {
				Authorization: `Bearer ${token}`
			}
		};
		try {
			const data = await apiClient.get(`api/recrutirer`, config);
			return Promise.resolve(data);
		} catch (error) {
			console.error('errResp', error);
			return Promise.reject(error);
		}
	}

	static async getVacancyInfo(token) {
		console.log('vacancy info API reached');
		const config = {
			headers: {
				Authorization: `Bearer ${token}`
			}
		};
		try {
			const data = await apiClient.get(`api/vacancy`, config);
			return Promise.resolve(data);
		} catch (error) {
			console.error('errResp', error);
			return Promise.reject(error);
		}
	}
}
